import React from 'react';
import { Parameter } from '../../../db/entity/parameter';
import { IParameterProps } from './Parameter';
import Checkbox from './../../UIKit/Checkbox/Checkbox';

const CheckboxParameter = ({ parameter }: IParameterProps) => {
  return (
    <div>
      { parameter.name }
      <Checkbox checked={true} onValueChange={() => {

      }}/>
    </div>
  )
};

export default CheckboxParameter;
