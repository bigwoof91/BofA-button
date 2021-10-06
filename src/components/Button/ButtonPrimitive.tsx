import styled from 'styled-components';
import { ICONS } from '../Icon';
import { getToken, StyleProps, composeStyleProps } from '../ThemeProvider';

export type ButtonVariant = 'primary' | 'secondary';
export type ButtonPrimitiveProps =
  React.ButtonHTMLAttributes<HTMLButtonElement> &
    StyleProps & {
      variant?: ButtonVariant;
      /**
       * Icon aligned-right
       * Can add iconTrailing/iconAfter and iconLeading/iconBefore if we want to eventually be able to adjust icon placement
       */
      icon?: keyof typeof ICONS;
    };

const StyledButton = styled.button<ButtonPrimitiveProps>`
  white-space: nowrap;
  outline: 2px solid transparent;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  box-sizing: border-box;
  &:disabled {
    cursor: not-allowed;
    pointer-events: none;
    outline-color: transparent;
    border-color: transparent;
    color: ${getToken('color-neutral-dark')};
    background-color: ${getToken('color-neutral')};
  }
  ${composeStyleProps}
`;

const ButtonContent = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: opacity 0.2s ease-out;
  width: 100%;
`;
const ButtonLabel = styled.span<StyleProps>(composeStyleProps);

const ButtonPrimitive = ({
  children,
  icon,
  ...otherProps
}: ButtonPrimitiveProps) => {
  const Icon = icon ? ICONS[icon] : undefined;
  return (
    <StyledButton
      position="relative"
      display="flex"
      alignItems="center"
      width="auto"
      minWidth={1}
      p={3}
      m={0}
      borderRadius={1}
      border="2px solid transparent"
      box-shadow="none"
      textAlign="center"
      {...otherProps}>
      <ButtonContent>
        <ButtonLabel mr={Icon ? 2 : 0}>{children}</ButtonLabel>
        {Icon && <Icon alignSelf="center" marginLeft="auto" />}
      </ButtonContent>
    </StyledButton>
  );
};

export { ButtonPrimitive };
