import { sizingTransform as o, maxWidth as s } from "./index90.js";
import { columnGap as i, rowGap as n, gap as m } from "./index91.js";
import { margin as e, padding as t } from "./index76.js";
import { paletteTransform as l } from "./index92.js";
import { borderRadius as y, borderTransform as r } from "./index93.js";
const b = {
  // borders
  border: {
    themeKey: "borders",
    transform: r
  },
  borderTop: {
    themeKey: "borders",
    transform: r
  },
  borderRight: {
    themeKey: "borders",
    transform: r
  },
  borderBottom: {
    themeKey: "borders",
    transform: r
  },
  borderLeft: {
    themeKey: "borders",
    transform: r
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: r
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: y
  },
  // palette
  color: {
    themeKey: "palette",
    transform: l
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: l
  },
  backgroundColor: {
    themeKey: "palette",
    transform: l
  },
  // spacing
  p: {
    style: t
  },
  pt: {
    style: t
  },
  pr: {
    style: t
  },
  pb: {
    style: t
  },
  pl: {
    style: t
  },
  px: {
    style: t
  },
  py: {
    style: t
  },
  padding: {
    style: t
  },
  paddingTop: {
    style: t
  },
  paddingRight: {
    style: t
  },
  paddingBottom: {
    style: t
  },
  paddingLeft: {
    style: t
  },
  paddingX: {
    style: t
  },
  paddingY: {
    style: t
  },
  paddingInline: {
    style: t
  },
  paddingInlineStart: {
    style: t
  },
  paddingInlineEnd: {
    style: t
  },
  paddingBlock: {
    style: t
  },
  paddingBlockStart: {
    style: t
  },
  paddingBlockEnd: {
    style: t
  },
  m: {
    style: e
  },
  mt: {
    style: e
  },
  mr: {
    style: e
  },
  mb: {
    style: e
  },
  ml: {
    style: e
  },
  mx: {
    style: e
  },
  my: {
    style: e
  },
  margin: {
    style: e
  },
  marginTop: {
    style: e
  },
  marginRight: {
    style: e
  },
  marginBottom: {
    style: e
  },
  marginLeft: {
    style: e
  },
  marginX: {
    style: e
  },
  marginY: {
    style: e
  },
  marginInline: {
    style: e
  },
  marginInlineStart: {
    style: e
  },
  marginInlineEnd: {
    style: e
  },
  marginBlock: {
    style: e
  },
  marginBlockStart: {
    style: e
  },
  marginBlockEnd: {
    style: e
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (a) => ({
      "@media print": {
        display: a
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: m
  },
  rowGap: {
    style: n
  },
  columnGap: {
    style: i
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: o
  },
  maxWidth: {
    style: s
  },
  minWidth: {
    transform: o
  },
  height: {
    transform: o
  },
  maxHeight: {
    transform: o
  },
  minHeight: {
    transform: o
  },
  boxSizing: {},
  // typography
  font: {
    themeKey: "font"
  },
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
};
export {
  b as default
};
