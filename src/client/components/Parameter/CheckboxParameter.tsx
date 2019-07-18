import React from 'react';
import { Parameter } from '../../../db/entity/parameter';
import { IParameterProps } from './Parameter';
import Checkbox from './../../UIKit/Checkbox/Checkbox';

const CheckboxParameter = ({ parameter }: IParameterProps) => {
  return (
    <div>
      <Checkbox checked={true} label={parameter.name}/>
    </div>
  )
};

export default CheckboxParameter;
