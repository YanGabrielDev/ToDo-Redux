export interface ThemeInterface{
      colors?:{
          green?: string,
          red?: string,
          text?: string,       
          ciano?: string,       
          blue?: string,       
          gray?: string,
          opacityBlack?: string      
      }
    
      fonts: {
        family?: {
          default?: string,
          secondary?: string,
        },
        sizes?: {
          xsmall?: string,
          small?: string,
          medium?: string,
          large?: string,
          xlarge?: string,
          xxlarge?: string,
          huge?: string,
          xhuge?: string,
        },
      },
      media?: {
        lteMedium?: string,
        lteLarge?: string,
      },
      spacings?: {
        xsmall?: string,
        small?: string,
        medium?: string,
        large?: string,
        xlarge?: string,
        xxlarge?: string,
        huge?: string,
        xhuge?: string,
      },
    
  }  