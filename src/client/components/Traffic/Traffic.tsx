import React from 'react';
import TemplateCheckbox from './../../components/TemplateCheckBox/TemplateCheckBox';
import { TrafficInfo } from '../../models/traffic';
import { TrafficWrapper } from './styled';
import { TitleH3 } from '../../UIKit/Title';

interface ITemplateCheckboxProps {
  traffic: TrafficInfo;
  onValueChange: any;
}

const Traffic = ({ traffic, onValueChange }: ITemplateCheckboxProps) => {
  return (
    <TrafficWrapper>
      <TitleH3>{traffic.title}</TitleH3>
      {
        traffic.templates.map((template) => (
          <React.Fragment key={template.key}>
            <TemplateCheckbox
              onValueChange={onValueChange}
              key={template.key}
              template={template}
            />
          </React.Fragment>
        ))
      }
    </TrafficWrapper>
  );
};

export default Traffic;
