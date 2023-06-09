import { GlobalStyles } from "@/styles/global.styled";
import { theme } from "@/styles/theme.styled";
import type { AppProps } from "next/app";

import { ThemeProvider } from "styled-components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
