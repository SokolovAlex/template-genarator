import React from 'react';
import cn from 'classnames';
import styles from './Selector.module.scss';
import { PureSwitch } from '../PureSwitch/PureSwitch';
import { Labels } from '../../../shared/atoms/Typography/Labels/Labels';
import { Spaces } from '../../Spaces/Spaces';
import { mapSpace, mapFont } from '../utils';

const SwitchOption = ({ label, size, isActive, id, ...rest }) => (
  <Labels
    component="label"
    htmlFor={id}
    size={mapFont(size)}
    {...rest}
    className={cn(styles.label, {
      [styles.active]: isActive,
    })}>
    {label}
  </Labels>
);

export const Selector = ({ options, size, value, onChange: switchValue, ...props }) => {
  const [firstOption, secondOption] = options;
  const onChange = (newValue) => {
    switchValue(newValue ? secondOption.value : firstOption.value);
  };
  return (
    <div className={styles.container}>
      <SwitchOption
        {...firstOption}
        size={size}
        {...props}
        isActive={firstOption.value === value || typeof value === 'undefined'}
      />
      <Spaces.Vertical size={mapSpace(size)} />
      <PureSwitch {...props} size={size} selectorMode value={secondOption.value === value} onChange={onChange} />
      <Spaces.Vertical size={mapSpace(size)} />
      <SwitchOption {...secondOption} size={size} {...props} isActive={secondOption.value === value} />
    </div>
  );
};
