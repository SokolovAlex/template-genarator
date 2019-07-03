import React from 'react';
import { getTemplates } from './../../api/templates';
import { Template } from '../../../db/entity/template';
import Title from './../../UIKit/Title/Title';
import TemplateCheckbox from './../../components/TemplateCheckBox/TemplateCheckBox';

const Creation: React.FC = () => {
  const [templates, setTemplate ] = React.useState<Template[]>([]);
  React.useEffect(() => {
    getTemplates().then((newTemplate) => {
      setTemplate(newTemplate);
    });
  }, []);

  return (
    <div>
      <Title>Tracking Code generator</Title>
      {
      templates.map((template) => <TemplateCheckbox key={template.key} template={template}/>)
    }</div>
  );
};

export default Creation;
