import React from 'react';
import { IParameterProps } from './Parameter';
import Checkbox from './../../UIKit/Checkbox/Checkbox';

const CheckboxParameter = ({ parameter }: IParameterProps) => {
  console.log('CheckboxParameter', parameter);
  debugger;
  return (
    <div>
      <label>{ parameter.name }</label>
      {
        parameter.values.map((value) => (
          <Checkbox key={value.key} checked={true} label={value.name}/>
        ))
      }
      
    </div>
  )
};

export default CheckboxParameter;
