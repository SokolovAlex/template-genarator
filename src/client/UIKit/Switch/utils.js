import { SwitchSize } from './constants';
import { Spaces } from '../Spaces/Spaces';
import { Labels } from '../../shared/atoms/Typography/Labels/Labels';

const spaceMapper = {
  [SwitchSize.S]: Spaces.sizes.XXS,
  [SwitchSize.M]: Spaces.sizes.S,
  [SwitchSize.L]: Spaces.sizes.M,
};

export const mapSpace = (size) => spaceMapper[size];

const fontMapper = {
  [SwitchSize.S]: Labels.sizes.xs,
  [SwitchSize.M]: Labels.sizes.m,
  [SwitchSize.L]: Labels.sizes.xl,
};

export const mapFont = (size) => fontMapper[size];
