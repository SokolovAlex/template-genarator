import React from 'react';
import { SpaceSize } from './constants';
import styles from './Spaces.module.scss';

export const Vertical = ({ size }) => <div className={styles[`width${size}`]} />;

Vertical[SpaceSize.XXXL] = () => <div className={styles.widthXXXL} />;
Vertical[SpaceSize.XXL] = () => <div className={styles.widthXXL} />;
Vertical[SpaceSize.XL] = () => <div className={styles.widthXL} />;
Vertical[SpaceSize.L] = () => <div className={styles.widthL} />;
Vertical[SpaceSize.M] = () => <div className={styles.widthM} />;
Vertical[SpaceSize.S] = () => <div className={styles.widthS} />;
Vertical[SpaceSize.XS] = () => <div className={styles.widthXS} />;
Vertical[SpaceSize.XXS] = () => <div className={styles.widthXXS} />;
Vertical[SpaceSize.XXXS] = () => <div className={styles.widthXXXS} />;
