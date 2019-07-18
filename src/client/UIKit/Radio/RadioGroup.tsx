import * as React from 'react';
import { RadioContext } from './RadioContext';

export interface RadioGroupProps<T> {
  onChange?: (selectedValue: T | string | number) => void;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  selectedValue?: T | string | number;
  name?: string;
}

/**
 * @render react
 * @name Radio
 * @description Group of radio buttons
 * @example
 * <RadioGroup name="color" selectedValue={value} onChange={set}>
 *        <Radio label="red" value="red" />
 *        <Radio label="blue" value="blue" />
 *        <Radio label="yellow" value="yellow" />
 *      </RadioGroup>
 */
export class RadioGroup<T> extends React.Component<
  RadioGroupProps<T>
> {
  static defaultProps = {
    onChange: () => {},
    disabled: false,
  };

  handleChange = value => {
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  };

  render() {
    const {
      disabled,
      name,
    } = this.props;
    return (
        <RadioContext.Provider
          value={{
            name: name,
            disabled: disabled,
            seletedValue: this.props.selectedValue,
            onChange: this.handleChange,
          }}
        >
          {this.props.children}
        </RadioContext.Provider>
    );
  }
}