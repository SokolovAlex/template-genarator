import React from 'react';

import { ICONS } from './Icons.constants';

export const Icon = (props) => {
  const { name, size, height, width, fill } = props;
  const FoundIcon = ICONS[name];
  if (!FoundIcon) {
    return <span>No Icon found with the name: {name}</span>;
  }
  return <FoundIcon width={width || size} height={height || size} fill={fill} {...props} />;
};
