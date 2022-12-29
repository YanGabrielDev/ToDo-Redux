import type { AppProps } from "next/app"
import { Provider } from "react-redux"
import store from "../redux/store"
import { ThemeProvider } from "styled-components"
import { theme } from "../styles/theme"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}
