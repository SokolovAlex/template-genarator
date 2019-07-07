import React from 'react';
import { Template } from './../../../db/entity/template';
import Checkbox from './../../UIKit/Checkbox/Checkbox';
import templateContext from '../../containers/Creation/template-context';
import { StyledTemplate, TemplateDescription } from './styled';

interface ITemplateCheckboxProps {
  template: Template;
  onValueChange: (checked: boolean, template: Template) => void;
}

const TemplateCheckbox = ({ template, onValueChange }: ITemplateCheckboxProps) => {
  const templateInfoMap = React.useContext(templateContext);
  const onValueChangeHandler = (cheked: boolean) => {
    onValueChange(cheked, template);
  };

  const { selected, disabled } = templateInfoMap[template.key];

  return (
    <StyledTemplate>
      <Checkbox checked={selected} disabled={disabled} onValueChange={onValueChangeHandler} label={template.name}/>
      <TemplateDescription>{template.description}</TemplateDescription>
    </StyledTemplate>
  );
};

export default TemplateCheckbox;
