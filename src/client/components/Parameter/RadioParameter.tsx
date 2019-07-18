import React from 'react';
import { IParameterProps } from './Parameter';
import { RadioGroup } from '../../UIKit/Radio/RadioGroup';
import { Radio } from '../../UIKit/Radio/Radio';

const RadioParameter = ({ parameter }: IParameterProps) => {
  const [value, setValue] = React.useState(parameter.defaultValue.name);
  return (
    <div>
      <label>{ parameter.name }</label>
      <RadioGroup name={parameter.key} selectedValue={value} onChange={(val) => setValue(val.toString())}>
        {
          parameter.values.map((value) => (
            <Radio label={value.name} value={value.name} />
          ))
        }
      </RadioGroup>
    </div>
  )
};

export default RadioParameter;
