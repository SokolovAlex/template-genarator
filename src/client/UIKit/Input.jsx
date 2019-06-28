import React from 'react';
import classNames from 'classnames';
import styles from './Input.module.scss';
import { Icon } from '../shared/atoms/Icon/Icon';
import InteractiveElement from './InteractiveElement';

export const InputType = {
  text: 'text',
  number: 'number',
};

export default class Input extends React.PureComponent {
  onInput = (event) => {
    const { onChange, id, type } = this.props;
    if (type === InputType.number) {
      const value = parseInt(event.currentTarget.value, 10) || 0;
      onChange(value, id);
    } else {
      onChange(event.currentTarget.value, id);
    }
  };

  clear = () => {
    const { onChange, id, type } = this.props;
    if (type === InputType.number) {
      onChange(0, id);
    } else {
      onChange('', id);
    }
  };

  increment = () => {
    const { onChange, value } = this.props;
    const parsedValue = parseInt(value, 10) || 0;
    onChange(parsedValue + 1);
  };

  decrement = () => {
    const { onChange, value } = this.props;
    const parsedValue = parseInt(value, 10) || 0;
    onChange(parsedValue - 1);
  };

  render() {
    const { iconName, showClear, hasError, value, placeholder, type, disabled, className } = this.props;
    const hasCloseButton = !disabled && showClear && type !== InputType.number && value !== '';

    return (
      <InteractiveElement hasError={hasError} disabled={disabled} className={className}>
        {(cn) => (
          <React.Fragment>
            {iconName && (
              <div className={classNames(styles.icon, { [styles.iconDisabled]: disabled })}>
                <Icon name={iconName} size={16} fill={null} />
              </div>
            )}
            {hasCloseButton && (
              <div className={styles.clearButton} onClick={this.clear}>
                <Icon name="cancel" size={16} fill={null} />
              </div>
            )}
            {!disabled && type === InputType.number && (
              <div className={styles.numberSpan}>
                <div onClick={this.increment} className={classNames(styles.numberArrow, styles.numberArrowInc)}>
                  <Icon name="arrowUp" size={9} fill={null} />
                </div>
                <div onClick={this.decrement} className={classNames(styles.numberArrow, styles.numberArrowDec)}>
                  <Icon name="arrowDown" size={9} fill={null} />
                </div>
              </div>
            )}
            <input
              className={classNames(
                cn,
                {
                  [styles.inputWithClear]: hasCloseButton,
                  [styles.inputWithIcon]: iconName,
                  [styles.inputWithNumberSpan]: !disabled && type === InputType.number,
                },
                styles.input
              )}
              type={InputType[type]}
              placeholder={placeholder}
              disabled={disabled}
              value={value || ''}
              onChange={this.onInput}
            />
          </React.Fragment>
        )}
      </InteractiveElement>
    );
  }
}
