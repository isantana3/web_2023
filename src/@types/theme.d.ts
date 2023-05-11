/* eslint-disable @typescript-eslint/naming-convention */
import { type defaultTheme } from "styles/Themes";

import "styled-components";

declare module "styled-components" {
  type ThemeType = typeof defaultTheme;

  export interface DefaultTheme extends ThemeType {}
}
