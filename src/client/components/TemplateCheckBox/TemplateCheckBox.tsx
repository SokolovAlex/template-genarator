import React from 'react';
import { Template } from './../../../db/entity/template';

interface ITemplateCheckboxProps {
  template: Template;
  isSelected?: boolean;
  isDisabled?: boolean;
}

const TemplateCheckbox = ({ template }: ITemplateCheckboxProps) => (
  <div>!!!{template.name}</div>
);

export default TemplateCheckbox;
