import '@emotion/react'
import { lightTheme } from '../styles/theme/light'

export type ThemeType = typeof lightTheme

declare module '@emotion/react' {
  export interface Theme extends ThemeType {}
}