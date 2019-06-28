import React from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';
import { Icon } from '../shared/atoms/Icon/Icon';
import { SimpleLoader } from '../shared/atoms/Loader/Loader';

export const ButtonWidth = {
  adaptive: 'WAdaptive',
  small: 'WSmall',
  default: 'WDefault',
};

export const ButtonHeight = {
  small: 'WSmall',
  default: 'WDefault',
};

export const ButtonType = {
  PrimaryGreen: 'PrimaryGreen',
  PrimaryRed: 'PrimaryRed',
  OutlineGreen: 'OutlineGreen',
  OutlineGray: 'OutlineGray',
  OutlineGrayTextGreen: 'OutlineGrayTextGreen',

  LinkGreen: 'LinkGreen',
};
const ButtonWrapper = (props) => {
  const { href, children, btnType } = props;
  if (href) {
    return <a {...props}>{children} </a>;
  }
  return (
    <button type={btnType} {...props}>
      {children}
    </button>
  );
};
const Button = ({
  iconName,
  children,
  disabled,
  withShadow,
  bold,
  href,
  target,
  width = ButtonWidth.default,
  height = ButtonHeight.default,
  type = ButtonType.PrimaryGreen,
  btnType = 'button',
  onClick,
  loading,
  className,
}) => {
  return (
    <ButtonWrapper
      type={btnType}
      target={target}
      href={href}
      onClick={disabled ? undefined : onClick}
      className={classNames(
        styles.button,
        {
          [styles.buttonBold]: bold,
          [styles.buttonWithshadow]: withShadow,
          [styles.buttonLoading]: loading,
          [styles.buttonWSmall]: width === ButtonWidth.small,
          [styles.buttonWAdaptive]: width === ButtonWidth.adaptive,
          [styles.buttonWDefault]: width === ButtonWidth.default,
          [styles.buttonTOutlineGreen]: type === ButtonType.OutlineGreen,
          [styles.buttonTPrimaryRed]: type === ButtonType.PrimaryRed,
          [styles.buttonTPrimaryGreen]: type === ButtonType.PrimaryGreen,
          [styles.buttonTOutlineGray]: type === ButtonType.OutlineGray,
          [styles.buttonTOutlineGrayTextGreen]: type === ButtonType.OutlineGrayTextGreen,

          [styles.buttonTLinkGreen]: type === ButtonType.LinkGreen,
          [styles.buttonDisabled]: disabled,
          [styles.buttonHSmall]: height === ButtonHeight.small,
          [styles.buttonHDefault]: height === ButtonHeight.default,
        },
        className
      )}>
      {loading && (
        <span className={classNames(styles.loader, { [styles.loaderShown]: loading })}>
          <SimpleLoader />
        </span>
      )}
      <span className={classNames(styles.container, { [styles.containerHidden]: loading })}>
        {iconName && (
          <span className={classNames(styles.icon, { [styles.iconDisabled]: disabled })}>
            <Icon name={iconName} height={16} width={null} size={null} fill={null} />
          </span>
        )}
        <span className={styles.content}>{children}</span>
      </span>
    </ButtonWrapper>
  );
};

export default Button;
