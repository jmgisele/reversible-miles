import React from 'react';
import Head from 'next/head';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange, purple } from '@mui/material/colors';

import { Navbar } from './navbar';
import useIsMobile from './hooks/useIsMobile';
import styles from './styles/layout.module.scss';

//***** Theme  *****/
export const theme = createTheme({
  palette: {
    primary: {
      main: orange[400],
    },
    secondary: {
      main: purple[500],
    },
  },
});

//***** Global Layout *****/
export const HeadComponent = () => (
  <Head>
    <link rel="icon" href="/bag-heart-fill.svg" />
    <meta name="description" content="Storefront for independent artist reversible miles" />
    <meta name="og:title" content="reversible miles" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>reversible miles</title>
  </Head>
);

//***** Mobile Layout *****/
function MobileLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <HeadComponent />
      <Navbar />
      <main className={styles.mobilePageContainer}>{children}</main>
    </ThemeProvider>
  );
}

//***** Desktop Layout  *****/
function DesktopLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <HeadComponent />
      <Navbar />
      <main className={styles.desktopPageContainer}>{children}</main>
    </ThemeProvider>
  );
}

//returns the correct component (MobileLayout or Desktop Layout) based on current window size
export function Layout({ children }: { children: React.ReactNode }) {
  return useIsMobile() ? MobileLayout({ children }) : DesktopLayout({ children });
}
