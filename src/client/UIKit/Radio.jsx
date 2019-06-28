import React from 'react';
import classNames from 'classnames';
import styles from './Radio.module.scss';

export const Radio = ({ onChange, value, selected, disabled, children, name, className }) => {
  const click = React.useCallback(() => {
    if (!disabled) onChange(value);
  }, [value, disabled, onChange]);
  const classnames = classNames(
    { [styles.optionDisabled]: disabled, [styles.optionSelected]: selected },
    styles.option,
    className
  );
  return (
    <div className={classnames}>
      <input tabIndex="0" type="radio" className={styles.input} onChange={click} name={name} id={value} />
      <div className={styles.radioIcon} />
      <label htmlFor={value} className={styles.radioLabel}>
        {children}
      </label>
    </div>
  );
};

const RadioGroup = ({ options, value, onChange, disabled, name }) => {
  const radioClassNames = classNames({ [styles.radioDisabled]: disabled }, styles.radio);
  return (
    <div className={radioClassNames}>
      {options &&
        options.map((data) => (
          <Radio
            selected={data.value && data.value === value}
            disabled={data.disabled}
            value={data.value}
            currentOption={value}
            onChange={onChange}
            name={name}
            key={data.value}>
            {data.label}
          </Radio>
        ))}
    </div>
  );
};
export default RadioGroup;
