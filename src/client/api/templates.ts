import axios from 'axios';
import { Template } from './../../db/entity/template';

const apiUrl = '/api/templates';
const conflictUrl = `${apiUrl}/conflicts`;

export const getTemplates = (): Promise<Template[]> => {
  return axios.get(apiUrl).then((response) => {
    const template: Template[] = response.data;
    return template;
  });
};

export const checkTemplates = (templates: Template[]): Promise<Template[]> => {
  return axios.get(conflictUrl, {
    params: templates.map(template => template.key)
  }).then((response) => response.data);
};
