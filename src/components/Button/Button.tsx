import { ButtonPrimitiveProps, ButtonVariant } from './ButtonPrimitive';
import { PrimaryButton } from './PrimaryButton';
import { SecondaryButton } from './SecondaryButton';

export type ButtonProps = ButtonPrimitiveProps;

const BUTTON_VARIANTS: {
  [key in ButtonVariant]: React.FC<ButtonPrimitiveProps>;
} = {
  primary: PrimaryButton,
  secondary: SecondaryButton,
};

const Button = ({ variant = 'primary', ...otherProps }: ButtonProps) => {
  const ButtonVariant = BUTTON_VARIANTS[variant];
  return <ButtonVariant {...otherProps} />;
};

export { Button };
