import React from 'react';
import classNames from 'classnames';
import styles from './InteractiveElement.module.scss';

const InteractiveElement = ({ onClick, children, hasError, className, selected, disabled }) => (
  <div className={classNames(styles.container, className)} onClick={onClick}>
    {children(
      classNames(
        { [styles.elementHasError]: hasError, [styles.elementSelected]: selected, [styles.elementDisabled]: disabled },
        styles.element
      )
    )}
    {/* this is needed to make properly 2px wide bottom border, otherwise it has diagonal edge transitions */}
    <div className={styles.fakeBorder} />
  </div>
);

export default InteractiveElement;
