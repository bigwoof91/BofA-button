import styled from 'styled-components';
import { composeStyleProps, StyleProps } from '../ThemeProvider';

// icons (as components)
import { Bin } from './icons/Bin';
import { Save } from './icons/Save';

const StyledIconWrapper = styled.span<StyleProps>(composeStyleProps());

const IconWrapper = (Icon: React.FC<any>) => (props: StyleProps) => {
  return (
    <StyledIconWrapper display="flex" {...props} color="inherit">
      <Icon />
    </StyledIconWrapper>
  );
};

const ICONS = {
  save: IconWrapper(Save),
  bin: IconWrapper(Bin),
};

export type Icons = keyof typeof ICONS;
export { ICONS };
