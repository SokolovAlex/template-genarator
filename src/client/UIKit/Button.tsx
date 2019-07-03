import React, { ReactNode } from 'react';
import classNames from 'classnames';
// import { Icon } from './Icon/Icon';
// import { SimpleLoader } from '../shared/atoms/Loader/Loader';

const styles: any = {};

export enum ButtonType {
  Primary = 'Primary',
  Link = 'Link',
}

interface IButtonProps {
  iconName?: string;
  children: ReactNode;
  disabled?: boolean;
  href?: string;
  target?: string;
  type?: ButtonType;
  onClick?: () => void;
  loading?: boolean;
  className?: string;
}

interface IButtonWrapperProps {
  children: ReactNode;
  href: string;
  target: string;
  onClick: () => void;
  className: string;
}

const ButtonWrapper = (props: IButtonWrapperProps) => {
  const { href, children } = props;
  if (href) {
    return <a {...props}>{children} </a>;
  }
  return (
    <button {...props}>
      {children}
    </button>
  );
};

const Button = ({
  iconName,
  children,
  disabled,
  href,
  target,
  type = ButtonType.Primary,
  onClick,
  loading,
  className,
}: IButtonProps) => {
  return (
    <ButtonWrapper
      target={target}
      href={href}
      onClick={disabled ? undefined : onClick}
      className={classNames(
        styles.button, {
          [styles.buttonLoading]: loading,
          [styles.buttonPrimary]: type === ButtonType.Primary,
          [styles.buttonLink]: type === ButtonType.Link,
          [styles.buttonDisabled]: disabled,
        },
        className,
      )}>
      {loading && (
        <span className={classNames(styles.loader, { [styles.loaderShown]: loading })}>
          {'Loader'}
        </span>
      )}
      <span className={classNames(styles.container, { [styles.containerHidden]: loading })}>
        {iconName && (
          <span className={classNames(styles.icon, { [styles.iconDisabled]: disabled })}>
            {'Icon'}
          </span>
        )}
        <span className={styles.content}>{children}</span>
      </span>
    </ButtonWrapper>
  );
};

export default Button;
