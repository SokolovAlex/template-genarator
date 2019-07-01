import React from 'react';
import { getTemplates } from './../../api/templates';
import { Template } from '../../../db/entity/template';

const Creation: React.FC = () => {
  const [templates, setTemplate ] = React.useState<Template[]>([]);
  
  React.useEffect(() => {
    getTemplates().then((templates) => {
      setTemplate(templates);
    });
  }, []);

  return (
    <div>{
      templates.map((template) => <div key={template.key}>{template.name}</div>)
    }</div>
  );
};

export default Creation;
