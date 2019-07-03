import axios from 'axios';
import { Template } from './../../db/entity/template';

const apiUrl = '/api/templates';
const conflictUrl = `${apiUrl}/conflicts`;

export const getTemplates = async (): Promise<Template[]> => {
  const response = await axios.get(apiUrl);
  return response.data;
};

export const checkTemplates = async (template: Template): Promise<Template[]> => {
  const response = await axios.get(conflictUrl, {
    params: template.key,
  });
  return response.data;
};
