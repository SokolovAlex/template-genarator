import React from 'react';
import { Parameter } from '../../../db/entity/parameter';
import { IParameterProps } from './Parameter'

const SelectParameter = ({ parameter }: IParameterProps) => {
  return (
    <div>
      { parameter.name }
    </div>
  )
};

export default SelectParameter;
