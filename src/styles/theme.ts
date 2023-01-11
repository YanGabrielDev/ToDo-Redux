import { ThemeInterface } from "../interfaces/themeInterface";

export const theme: ThemeInterface = {
    colors:{
        green: "#02d91f",
        red: '#ff0303',
        darkBlue: '#1e1f24',
        softBlack: '#050505',
        softBlack2: '#262626',
        text: "#00000",
        white: '#ffffff',
        blue: "#0564fc",
        ciano: "#05aefc",
        gray: "#8c8c8c",
        opacityBlack: "rgba(0%, 0%, 0%, 40%)"
    },
    fonts: {
        family: {
          default: "'Raleway', sans-serif",
          secondary: "'Montserrat', sans-serif",
        },
        sizes: {
          xsmall: "1.3rem",
          small: "1.6rem",
          medium: "2.4rem",
          large: "2.5rem",
          xlarge: "4.0rem",
          xxlarge: "4.8rem",
          huge: "5.6rem",
          xhuge: "6.4rem",
        },
      },
      media: {
        lteMedium: "(max-width: 760px)",
        lteLarge: "(max-width: 980px)",
        // lteLarge: "(max-width: 980px)",
      },
      spacings: {
        xsmall: "1rem",
        small: "1.6rem",
        medium: "2.4rem",
        large: "3.2rem",
        xlarge: "4.0rem",
        xxlarge: "4.8rem",
        huge: "5.6rem",
        xhuge: "11rem",
      },
}