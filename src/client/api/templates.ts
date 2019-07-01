import axios from 'axios';
import { Template } from './../../db/entity/template';

const apiUrl = '/api/templates';

export const getTemplates = (): Promise<Template[]> => {
  return axios.get(apiUrl).then((data) => {
    console.log(data);
    return [new Template()];
  });
};
