import React from 'react';
import { IParameterProps } from './Parameter';
import Checkbox from './../../UIKit/Checkbox/Checkbox';

const CheckboxParameter = ({ parameter }: IParameterProps) => {
  const [checked, setChecked] = React.useState<{ [key:string] : boolean}>({});

  const onValueChangeHandler = (value, isChecked) => {
    const newChecked = {...checked};
    newChecked[value.key] = isChecked;
    setChecked(newChecked);
  }

  return (
    <div>
      <div>{ parameter.name }</div>
      {
        parameter.values.map((value) => (
          <Checkbox key={value.key} checked={checked[value.key]}
            onValueChange={(isChecked) => onValueChangeHandler(value, isChecked)} label={value.name}/>
        ))
      }
      
    </div>
  )
};

export default CheckboxParameter;
