import styled from 'styled-components';
import { composeStyleProps, StyleProps } from '../ThemeProvider';
import { Save } from './Save';

const StyledIconWrapper = styled.span<StyleProps>(composeStyleProps());

const IconWrapper = (Icon: React.FC<any>) => (props: StyleProps) => {
  return (
    <StyledIconWrapper display="flex" {...props} color="inherit">
      <Icon />
    </StyledIconWrapper>
  );
};

const ICONS = {
  Save: IconWrapper(Save),
};

export type Icons = keyof typeof ICONS;
export { ICONS };
