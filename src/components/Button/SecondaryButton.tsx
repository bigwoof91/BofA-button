import styled from 'styled-components';
import { getToken } from '../ThemeProvider';
import { ButtonPrimitive, ButtonPrimitiveProps } from './ButtonPrimitive';

export type SecondaryButtonProps = Omit<ButtonPrimitiveProps, 'variant'>;

const StyledSecondaryButton = styled(ButtonPrimitive)`
  outline-width: 1px;
  outline-offset: 2px;
  &:not(:disabled) {
    &:hover {
      background-color: ${getToken('color-neutral-dark')};
      color: ${getToken('color-neutral-lightest')};
    }
    &:focus {
      outline-color: ${getToken('color-neutral-darkest')};
    }
  }
`;

const SecondaryButton = (props: SecondaryButtonProps) => {
  return (
    <StyledSecondaryButton bg="color-neutral-light" border={2} {...props} />
  );
};

export { SecondaryButton };
