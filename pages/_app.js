import React from "react";
import "../src/styles.css";
import { ThemeProvider } from 'theme-ui'
import theme from "../theme";
import Nav from "../src/components/nav"

// eslint-disable-next-line
export default function App({ Component, pageProps }) {
  return (
  <ThemeProvider theme={theme}>
   <Nav />
    <Component {...pageProps}/>
  </ThemeProvider>);
}