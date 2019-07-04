import React from 'react';
import { Template } from './../../../db/entity/template';
import Checkbox from './../../UIKit/Checkbox/Checkbox';

interface ITemplateCheckboxProps {
  template: Template;
  checked?: boolean;
  disabled?: boolean;
  onValueChange: (checked: boolean, template: Template) => void;
}

const TemplateCheckbox = ({ template, onValueChange, checked }: ITemplateCheckboxProps) => {
  const onValueChangeHandler = (cheked: boolean) => {
    onValueChange(cheked, template);
  };
  return (
    <div>
      <Checkbox checked={checked} onValueChange={onValueChangeHandler} label={template.name}/>
      <div>{template.description}</div>
    </div>
  );
};

export default TemplateCheckbox;
