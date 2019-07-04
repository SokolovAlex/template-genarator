import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import { CheckIcon } from './CheckIcon';
import { Colors } from '../../constants/styles';

const size = '20px';

const Root = styled.label`
  font-size: 15px;
  cursor: pointer;
  margin-right: 5px;
  line-height: ${size};
  display: inline-block;
  &:hover {
    > span:first-child {
      box-shadow: ${`0 0 0 2px ${Colors.Green}`}
    }
  }
`;

const Label = styled.span`
  color: ${Colors.Grey};
  :hover {
    color: ${Colors.Green};
  }
`;

interface ICheckWrapper {
  checked?: boolean;
  round?: boolean;
}

const CheckWrapper = styled('span')<ICheckWrapper>`
  box-sizing: border-box;
  position: relative;
  display: inline-block;
  width: ${size};
  height: ${size};
  border: 1px solid ${Colors.Green};
  border-radius: ${(props) => (props.round ? '50%' : '2px')};
  background-color: ${Colors.White};
  transition: 'all 120ms ease-out';
  margin: -2px 0.6em 0 0;
  vertical-align: middle;
`;

const Input = styled.input`
  display: none;
`;

interface IIconWrapperProps {
  checked?: boolean;
  round?: boolean;
  disabled?: boolean;
}

const IconWrapper = styled('div')<IIconWrapperProps>`
  text-align: center;
  width: 100%;
  height: 100%;
  position: relative;
  opacity: ${({ checked }) => (checked ? 1 : 0)};
  transform: ${({ checked }) => (checked ? 'scale(1)' : 'scale(0)')};
  pointer-events: none;
  transition: all 120ms ease-out;
  color: ${Colors.Green};
`;

export interface ICheckboxProps {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  round?: boolean;
  icon?: React.ReactNode | ((props: any) => React.ReactNode);
  label?: string;
  name?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onValueChange?: (value: boolean) => void;
  theme?: any;
  style?: React.CSSProperties;
  className?: string;
}

export class Checkbox extends React.Component<ICheckboxProps> {
  public render() {
    const {
      defaultChecked,
      disabled = false,
      icon,
      label,
      name,
      round = false,
      theme,
      style,
      className,
      onChange,
      onValueChange,
      ...props
    } = this.props;

    const onChangeHandler = (e) => {
      if (onChange) {
        onChange(e);
      }
      if (onValueChange) {
        onValueChange(!this.props.checked);
      }
    };

    return (
      <Root
        style={style}
        className={cn('vital__checkbox', className)}
      >
        <CheckWrapper
          checked={this.props.checked}
          round={round}
        >
          <IconWrapper checked={this.props.checked}>
            {round || icon || <CheckIcon />}
          </IconWrapper>
        </CheckWrapper>
        <Label>
          <Input
            type='checkbox'
            disabled={disabled}
            checked={this.props.checked}
            defaultChecked={defaultChecked}
            name={name}
            {...props}
            onChange={onChangeHandler}
          />
          {label}
        </Label>
      </Root>
    );
  }
}

export default Checkbox;
