import styled from 'styled-components';
import fieldBase from './FieldBase';

interface InputElementProps {
  alarm?: boolean;
  warning?: boolean;
  rightIcon?: any;
}

export const Input = styled.input<InputElementProps>`
  ${fieldBase};
`;
