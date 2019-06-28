/* eslint-disable */
import React from 'react';

export const InputHelper = ({ initValue, children }) => {
  const [value, setValue] = React.useState(initValue);
  const onChange = React.useCallback((incomingValue) => {
    console.log(incomingValue)
    setValue(incomingValue);
  });
  return <div style={{ padding: '10px' }}>{children({ value, onChange })}</div>;
};
