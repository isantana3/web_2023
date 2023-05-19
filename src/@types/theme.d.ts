/* eslint-disable @typescript-eslint/naming-convention */
import { type Theme } from "styles/Themes";

import "styled-components";

declare module "styled-components" {
  type ThemeType = typeof Theme;

  export interface DefaultTheme extends ThemeType {}
}
