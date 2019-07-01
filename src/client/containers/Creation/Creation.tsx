import React from 'react';
import { getTemplates } from './../../api/templates';

const Creation: React.FC = () => {
  React.useEffect(() => {
    console.info('!!');
    getTemplates();
  }, []);

  return (
    <div>!!!!</div>
  );
};

export default Creation;
