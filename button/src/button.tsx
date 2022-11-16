import { Button as MantineButton, ButtonProps as MantineButtonProps } from '@mantine/core';
import * as React from 'react';
import { Icon } from '../../icon/src/icon';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  compact?: boolean;
  disabled?: boolean;
  iconPosition?: undefined | 'left' | 'right';
  icon?: string;
  loading?: boolean;
  children: string;
}

/**
 * A button component
 */
export const Button = (props: ButtonProps) => {
  const { variant, compact, disabled, iconPosition, icon, loading, children, ...otherProps } = {
    variant: 'primary',
    compact: false,
    disabled: false,
    iconPosition: undefined,
    icon: undefined,
    loading: false,
    ...props,
  } as Required<ButtonProps>;
  return (
    <MantineButton
      variant={mapVariantToMantineVariant[variant]}
      compact={compact}
      disabled={disabled}
      leftIcon={icon && iconPosition === 'left' && <Icon icon={icon} />}
      rightIcon={icon && iconPosition === 'right' && <Icon icon={icon} />}
      loading={loading}
      loaderPosition={loading ? 'left' : undefined}
      {...(otherProps as MantineButtonProps)}
    >
      {children}
    </MantineButton>
  );
};

Button.displayName = 'Button';

const mapVariantToMantineVariant = {
  primary: 'filled' as MantineButtonProps['variant'],
  secondary: 'outline' as MantineButtonProps['variant'],
};
