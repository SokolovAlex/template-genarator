import React from 'react';
import { Parameter, InputType } from '../../../db/entity/parameter';
import { ParameterValue } from '../../../db/entity/parameterValue';
import CheckboxParameter from './CheckboxParameter';
import RadioParameter from './RadioParameter';
import SelectParameter from './SelectParameter';

export interface IParameterProps {
  parameter: Parameter;
  templateKey: string;
}

const ParameterBlock = (props: IParameterProps) => {
  const {parameter} = props;
  return (
    <React.Fragment>
      {parameter.inputType == InputType.Checkbox &&
        <CheckboxParameter {...props} />
      }
      {parameter.inputType == InputType.Radio &&
        <RadioParameter {...props} />
      }
      {parameter.inputType == InputType.Select &&
        <SelectParameter {...props} />
      }
    </React.Fragment>
  )
};

export default ParameterBlock;
