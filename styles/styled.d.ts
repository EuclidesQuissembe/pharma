import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string
      secondary: string
      green: string
      orange: string
      yellow: string
      white: string
      black: string
      gray: string
    }
  }
}