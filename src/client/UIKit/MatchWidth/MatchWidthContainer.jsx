import React from 'react';
import throttle from 'lodash/throttle';
import { MatchWidthContext } from './MatchWidthContext';

export class MatchWidthContainer extends React.Component {
  state = {
    elements: [],
    width: null,
  };

  constructor(props) {
    super(props);
    this.updateThrottled = throttle(this.update, 200);
  }

  componentDidMount() {
    this.updateThrottled();
  }

  componentDidUpdate(prevProps) {
    const { observable } = this.props;

    if (observable && observable !== prevProps.observable) {
      this.updateThrottled();
    }
  }

  register = (element) => {
    this.setState(
      (prevState) => {
        const { elements } = prevState;
        const newElements = [...elements, element];
        return { elements: newElements };
      },
      () => this.updateThrottled()
    );
  };

  unregister = (element) => {
    this.setState(
      (prevState) => {
        const { elements } = prevState;
        const newElements = elements.filter((arrayElement) => element !== arrayElement);
        return { elements: newElements };
      },
      () => this.updateThrottled()
    );
  };

  update = () => {
    const { elements } = this.state;
    const elementsWithCurrent = elements.filter((element) => element.current);
    if (elementsWithCurrent.length === 0) {
      return;
    }
    const widths = elementsWithCurrent.map((element) => {
      return element.current.scrollWidth;
    });
    const maxWidth = Math.max(...widths);
    this.setState({ width: maxWidth });
  };

  render() {
    const { elements, width } = this.state;
    const { children } = this.props;

    return (
      <MatchWidthContext.Provider
        value={{
          elements,
          width,
          register: this.register,
          unregister: this.unregister,
          update: this.updateThrottled,
        }}>
        {children}
      </MatchWidthContext.Provider>
    );
  }
}
