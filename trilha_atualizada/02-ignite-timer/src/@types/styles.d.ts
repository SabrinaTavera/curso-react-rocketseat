import styled from "styled-components";
import { defaultTheme } from "../styles/themes/default";


type ThemeType = typeof defaultTheme;

/**
 * Faz uma sobreescrita do styles-components
 */
declare module "styled-components" {
    export interface defaultTheme extends ThemeType { }
}