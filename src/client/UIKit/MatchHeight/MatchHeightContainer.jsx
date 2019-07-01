import React from 'react';
import throttle from 'lodash/throttle';
import { MatchHeightContext } from './MatchHeightContext';
import { Events, subscribe, unsubscribe } from '../../../services/event';
import WidthListener from '../../atoms/WidthListener';

export class MatchHeightContainer extends React.Component {
  state = {
    elements: [],
    heights: {},
  };

  width = 0;

  constructor(props) {
    super(props);

    this.updateOneGroupThrottled = throttle(this.updateOneGroup, 200);
    this.updateAllThrottled = throttle(this.updateAll, 200);
  }

  componentDidMount() {
    this.updateAllThrottled();
    subscribe(Events.bbresize, this.updateAllThrottled);
  }

  componentWillUnmount() {
    unsubscribe(Events.bbresize, this.updateAllForced);
  }

  register = (element) => {
    this.setState(
      (prevState) => {
        const { elements } = prevState;
        const newElements = [...elements, element];
        return { elements: newElements };
      },
      () => this.updateOneGroupThrottled(element.group)
    );
  };

  unregister = (element) => {
    this.setState(
      (prevState) => {
        const { elements } = prevState;
        const newElements = elements.filter((arrayElement) => element.ref !== arrayElement.ref);
        return { elements: newElements };
      },
      () => this.updateOneGroupThrottled(element.group)
    );
  };

  updateOneGroup = (group) => {
    const { heights, elements } = this.state;
    if (elements.length === 0) {
      return;
    }
    const groupHeight = elements.reduce((accum, element) => {
      if (element.group !== group) {
        return accum;
      }
      return Math.max(accum, element.ref.current.scrollHeight);
    }, -1);
    if (groupHeight !== heights[group]) {
      this.setState({ heights: Object.assign({}, heights, { [group]: groupHeight }) });
    }
  };

  updateAll = () => {
    const { elements } = this.state;

    if (elements.length === 0) {
      return;
    }

    const heights = elements.reduce((accum, element) => {
      const currValue = (accum[element.group] && accum[element.group].value) || -1;
      // Checking element width to check if it is displayed, if its 0, it means it has display: none
      if (element.ref.current.offsetWidth !== 0) {
        return Object.assign({}, accum, {
          [element.group]: {
            value: Math.max(currValue, element.ref.current.scrollHeight),
            count: (accum[element.group] && accum[element.group].count && accum[element.group].count + 1) || 1,
          },
        });
      }

      return accum;
    }, {});

    const result = {};
    Object.keys(heights).forEach((groupKey) => {
      const groupInfo = heights[groupKey];
      // If there's only one drawn element in group, what's the point of force-setting height? setting auto
      if (groupInfo.count > 1) {
        result[groupKey] = groupInfo.value;
      }
    });
    this.setState({ heights: result });
  };

  render() {
    const { elements, heights } = this.state;
    const { children } = this.props;

    return (
      <MatchHeightContext.Provider
        value={{
          elements,
          heights,
          register: this.register,
          unregister: this.unregister,
          updateOneGroup: this.updateOneGroupThrottled,
        }}>
        <WidthListener onWidthChange={this.updateAllThrottled} />
        {children}
      </MatchHeightContext.Provider>
    );
  }
}
