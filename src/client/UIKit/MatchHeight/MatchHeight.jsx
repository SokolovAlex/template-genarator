import React from 'react';
import { MatchHeightContext } from './MatchHeightContext';

export const MatchHeight = ({ group, children, className }) => {
  const ref = React.useRef(null);
  const { register, unregister, heights } = React.useContext(MatchHeightContext);

  React.useEffect(() => {
    register({ ref, group });
    return () => unregister({ ref, group });
  }, [register, unregister, group]);

  const divHeight = heights[group] && heights[group] > 0 ? heights[group] : 'auto';
  const style = {
    height: divHeight,
    maxWidth: '100%',
  };

  return (
    <div className={className} style={style}>
      <div
        style={{
          maxWidth: '100%',
        }}
        ref={ref}>
        {children}
      </div>
    </div>
  );
};
