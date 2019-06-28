import React from 'react';
import cn from 'classnames';
import styles from './PureSwitch.module.scss';
import { SwitchSize } from '../constants';

const SwitchBase = ({ value, onChange, switchClassName, containerClassName, className, name, id, selectorMode }) => {
  const change = React.useCallback(() => onChange(!value, name), [name, onChange, value]);
  return (
    <div className={cn(containerClassName, styles.container, className)}>
      <div
        className={cn(styles.slider, {
          [styles.active]: !!value || selectorMode,
        })}
      />
      <div className={cn({ [styles.switchMoved]: value }, switchClassName, styles.switch)} />
      <input id={id} tabIndex="0" className={styles.checkbox} type="checkbox" checked={value} onChange={change} />
    </div>
  );
};

const styleMapper = {
  [SwitchSize.S]: {
    containerClassName: styles.smallContainer,
    switchClassName: styles.smallSwitch,
  },
  [SwitchSize.M]: {
    containerClassName: styles.middleContainer,
    switchClassName: styles.middleSwitch,
  },
  [SwitchSize.L]: {
    containerClassName: styles.bigContainer,
    switchClassName: styles.bigSwitch,
  },
};
export const PureSwitch = ({ size = SwitchSize.M, ...props }) => {
  const classes = styleMapper[size];
  return <SwitchBase {...classes} {...props} />;
};

PureSwitch.Size = SwitchSize;
