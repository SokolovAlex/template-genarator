import React from 'react';
import classNames from 'classnames';
import styles from './Select.module.scss';
import InteractiveElement from './InteractiveElement';

import { ClickAwayListener } from '../shared/atoms/ClickAwayListener/ClickAwayListener';
import { Icon } from '../shared/atoms/Icon/Icon';
import { FoldingContainer } from '../shared/atoms/FoldingContainer/FoldingContainer';

// TODO: Make keyboard-usable
const calculateCurrentValue = (currentValue, options) => {
  if (!currentValue || !options) {
    return null;
  }
  return options.find((option) => {
    if (option.value === currentValue) {
      return true;
    }
    return false;
  });
};

const SelectOption = ({ onClick, value, currentOption, disabled, label }) => {
  const click = React.useCallback(() => {
    if (!disabled) onClick(value);
  }, [value, disabled, onClick]);
  const classnames = classNames(
    { [styles.optionDisabled]: disabled, [styles.optionSeslected]: currentOption && currentOption === value },
    styles.option
  );
  return (
    <div className={classnames} onClick={click}>
      {label}{' '}
    </div>
  );
};

export default class Select extends React.PureComponent {
  state = { currentOption: null, open: false };

  ref = React.createRef();

  componentDidMount() {
    this.setCurrentValue();
  }

  componentDidUpdate(prevProps) {
    const { value, options } = this.props;
    if (value !== prevProps.value || options !== prevProps.options) {
      this.setCurrentValue();
    }
  }

  setCurrentValue() {
    const { value, options } = this.props;
    const currentOption = calculateCurrentValue(value, options);
    this.setState({ currentOption });
  }

  onClick = (value) => {
    const { onChange, id } = this.props;
    onChange(value, id);
    this.close();
  };

  toggle = () => {
    const { disabled } = this.props;
    if (disabled) return;
    this.setState((prevState) => {
      this.setState({ open: !prevState.open });
    });
  };

  open = () => {
    const { disabled } = this.props;
    if (!disabled) {
      this.setState({ open: true });
    }
  };

  close = () => {
    this.setState({ open: false });
  };

  render() {
    const { placeholder, options, hasError, disabled, iconName, className, dropDownStyle } = this.props;
    const { currentOption, open } = this.state;
    const localOpen = !disabled && open;
    return (
      <div ref={this.ref} className={classNames(styles.container, className)}>
        <InteractiveElement selected={open} onClick={this.toggle} hasError={hasError} disabled={disabled}>
          {(cn) => (
            <React.Fragment>
              {iconName && (
                <div className={classNames(styles.icon, { [styles.iconDisabled]: disabled })}>
                  <Icon name={iconName} size={16} fill={null} />
                </div>
              )}
              <div
                className={classNames(styles.triangle, {
                  [styles.triangleOpen]: localOpen,
                  [styles.triangleDisabled]: disabled,
                })}
              />
              <div
                className={classNames(
                  {
                    [styles.selectWithIcon]: iconName,
                    [styles.selectDisabled]: disabled,
                    [styles.selectPlaceholder]: !(currentOption && currentOption.label),
                  },
                  styles.select,
                  cn
                )}>
                {(currentOption && currentOption.label) || placeholder}
              </div>
            </React.Fragment>
          )}
        </InteractiveElement>
        <ClickAwayListener onClickAway={this.close} elementRef={this.ref}>
          <div className={styles.relative}>
            <div className={styles.dropDownContainer}>
              <FoldingContainer visible={localOpen} timeout={150}>
                <div className={classNames({ [styles.optionsOpen]: localOpen }, styles.options, dropDownStyle)}>
                  {options.map((option) => (
                    <SelectOption
                      key={option.value}
                      value={option.value}
                      currentOption={currentOption}
                      disabled={option.disabled}
                      label={option.label}
                      onClick={this.onClick}
                    />
                  ))}
                </div>
              </FoldingContainer>
            </div>
          </div>
        </ClickAwayListener>
      </div>
    );
  }
}
