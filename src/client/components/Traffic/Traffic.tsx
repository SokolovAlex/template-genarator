import React from 'react';
import TemplateCheckbox from './../../components/TemplateCheckBox/TemplateCheckBox';
import { TrafficInfo } from '../../models/traffic';

interface ITemplateCheckboxProps {
  traffic: TrafficInfo;
  templateInfo: any;
  onValueChange: any;
}

const Traffic = ({ traffic, templateInfo, onValueChange }: ITemplateCheckboxProps) => {
  return (
    <div>
      <div>{traffic.title}</div>
      {
        traffic.templates.map((template) => (
          <>
            <TemplateCheckbox
              checked={templateInfo[template.key].selected}
              onValueChange={onValueChange}
              key={template.key}
              template={template}
            />
          </>
        ))
      }
    </div>
  );
};

export default Traffic;
