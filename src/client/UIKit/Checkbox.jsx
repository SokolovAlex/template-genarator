import React from 'react';
import classNames from 'classnames';
import styles from './Checkbox.module.scss';
import { Icon } from '../shared/atoms/Icon/Icon';

const Checkbox = ({ checked, onChange, children, disabled, id, className, title }) => {
  const click = React.useCallback(() => {
    if (!disabled) onChange(!checked, id);
  }, [checked, disabled, id, onChange]);
  const checkboxClassNames = classNames(className, {
    [styles.checkbox]: true,
    [styles.checkboxChecked]: checked,
    [styles.checkboxDisabled]: disabled,
  });
  const checkboxTextClassNames = classNames(styles.text, {
    [styles.textDisabled]: disabled,
  });
  return (
    <label htmlFor={id} className={checkboxClassNames} title={title}>
      <input id={id} tabIndex="0" className={styles.input} type="checkbox" checked={checked} onChange={click} />
      <div className={styles.tick}>
        <Icon className={styles.tickIcon} name="check" fill={null} size={20} />
      </div>
      {children && <span className={checkboxTextClassNames}>{children}</span>}
    </label>
  );
};

export default Checkbox;
