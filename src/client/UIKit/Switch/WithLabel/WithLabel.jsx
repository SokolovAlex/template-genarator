import React from 'react';
import cn from 'classnames';
import styles from './WithLabel.module.scss';
import { PureSwitch } from '../PureSwitch/PureSwitch';
import { Spaces } from '../../Spaces/Spaces';
import { mapSpace } from '../utils';

export const WithLabel = ({ label, children, reverse, size, id, ...props }) => {
  return (
    <label
      htmlFor={id}
      className={cn(styles.container, {
        [styles.reverse]: reverse,
      })}>
      <PureSwitch size={size} id={id} {...props} />
      <Spaces.Vertical size={mapSpace(size)} />
      {children}
    </label>
  );
};
