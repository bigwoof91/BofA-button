import styled from 'styled-components';
import { getToken } from '../ThemeProvider';
import { ButtonPrimitive, ButtonPrimitiveProps } from './ButtonPrimitive';

export type PrimaryButtonProps = Omit<ButtonPrimitiveProps, 'variant'>;

const StyledPrimaryButton = styled(ButtonPrimitive)`
  &:not(:disabled) {
    &:hover {
      background-color: ${getToken('color-primary-highlight')};
    }
    &:focus {
      border: ${getToken(2, 'borders')};
    }
  }
`;

const PrimaryButton = (props: PrimaryButtonProps) => {
  return (
    <StyledPrimaryButton
      bg="color-primary"
      color="color-neutral-lightest"
      {...props}
    />
  );
};

export { PrimaryButton };
