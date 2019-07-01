import React from 'react';
import { MatchWidthContext } from './MatchWidthContext';

export class MatchWidthBase extends React.PureComponent {
  ref = React.createRef();

  componentDidMount() {
    const {
      context: { register },
    } = this.props;
    register(this.ref);
  }

  componentWillUnmount() {
    const {
      context: { unregister },
    } = this.props;
    unregister(this.ref);
  }

  render() {
    const {
      children,
      className,
      context: { width },
    } = this.props;

    const style = {
      width: width || 'auto',
    };
    return (
      <div className={className} style={style}>
        <div style={{ display: 'inline-block' }} ref={this.ref}>
          {children}
        </div>
      </div>
    );
  }
}

export const MatchWidth = (props) => {
  return (
    <MatchWidthContext.Consumer>{(value) => <MatchWidthBase {...props} context={value} />}</MatchWidthContext.Consumer>
  );
};
