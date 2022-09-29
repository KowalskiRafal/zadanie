import classNames from 'classnames';
import React from 'react';
import { ButtonProps } from './Button.models.d';

const Button = ({
  label, variant, className, ...props
}: ButtonProps) => {
  const buttonClasses = classNames('button', className, {
    [`button--${variant}`]: variant,
  });

  return (
        <button className={buttonClasses} type='button' {...props}>{label}</button>
  );
};

export default Button;
