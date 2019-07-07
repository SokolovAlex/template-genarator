import React from 'react';
import { TemplateInfo } from '../../models/traffic';

interface ITemplateInfoMap {
  [key: string]: TemplateInfo;
}

const defaultValue: ITemplateInfoMap = {};

export default React.createContext(defaultValue);