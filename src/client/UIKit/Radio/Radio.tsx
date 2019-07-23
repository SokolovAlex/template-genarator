import * as React from 'react';
import styled from 'styled-components';
import { RadioContext } from './RadioContext';
import { Colors } from '../../constants/styles';

interface RootProps {
  disabled?: boolean;
}

const Root = styled('div')<RootProps>`
  display: inline-block;
  vertical-align: middle;
  position: relative;
  margin: 0 5px 10px 0;
  word-break: break-word;
  color: ${Colors.Grey};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  :hover {
    input {
      box-shadow: 0 0 0 2px rgba(14, 134, 254, 0.2);
      border-color: ${Colors.Green};
    }
  }
`;

const Input = styled.input`
  vertical-align: middle;
  appearance: none;
  outline: none;
  position: relative;
  box-sizing: content-box;
  margin: -2px 0 0 0;
  width: 18px;
  height: 18px;
  border: 1px solid ${Colors.Green};
  border-radius: 50%;
  background-color: ${Colors.Green};
  transition: 'all 120ms ease-out';
  cursor: pointer;
  &:checked {
    border-color: ${({ disabled }) =>
      disabled ? Colors.Grey1 : Colors.Green};
    background-color: ${({ disabled }) =>
      disabled ? Colors.Grey1 : Colors.Green};
    &:after {
      opacity: 1;
      transform: scale(1);
      background: ${({ disabled }) =>
        disabled ? Colors.Grey1 : Colors.Grey2};
    }
  }
  &:after {
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    top: 3px;
    left: 3px;
    border-radius: 50%;
    background: transparent;
    opacity: 0;
    transform: scale(0);
    transition: 'all 120ms ease-out';
  }
`;

const Label = styled.span`
  padding-left: 4px;
`;

export interface RadioProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  value?: number | string;
  defaultChecked?: boolean;
  className?: string;
  style?: React.CSSProperties;
  inputClassName?: string;
  inputStyle?: React.CSSProperties;
}

export const Radio: React.SFC<RadioProps> = ({
  label,
  defaultChecked,
  style,
  className,
  inputClassName,
  inputStyle,
  value,
  onChange,
  ...props
}) => (
  <RadioContext.Consumer>
    {({ name, disabled, seletedValue, onChange: handleChange }) => (
      <Root
        style={style}
        disabled={disabled}
      >
        <Input
          style={inputStyle}
          disabled={disabled}
          type="radio"
          defaultChecked={defaultChecked}
          checked={value === seletedValue}
          name={name}
          onChange={
            handleChange ? () => handleChange(value) : onChange
          }
          {...props}
        />
        <Label>{label}</Label>
      </Root>
    )}
  </RadioContext.Consumer>
);