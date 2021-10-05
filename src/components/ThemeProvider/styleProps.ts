import {
  border,
  BorderProps,
  color,
  ColorProps,
  compose,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  shadow,
  ShadowProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from 'styled-system';

export type StyleProps = Partial<
  SpaceProps &
    FlexboxProps &
    BorderProps &
    LayoutProps &
    ShadowProps &
    ColorProps &
    PositionProps &
    TypographyProps
>;

const composeStyleProps = () =>
  compose(space, flexbox, border, layout, color, shadow, position, typography);

export { composeStyleProps };
