import axios from 'axios';
import { Template } from './../../db/entity/template';

const apiUrl = '/api/templates';
const conflictUrl = `${apiUrl}/conflicts`;
const parametersUrl = `${apiUrl}/parameters`;

export const getTemplates = async (): Promise<Template[]> => {
  const response = await axios.get(apiUrl);
  return response.data;
};

export const checkTemplateConflicts = async (template: Template): Promise<any> => {
  const response = await axios.get(conflictUrl, {
    params: { templateKey: template.key },
  });
  return response.data;
};

export const getParameters = async (template: Template): Promise<any> => {
  const response = await axios.get(parametersUrl, {
    params: { templateKey: template.key },
  });
  return response.data;
};
