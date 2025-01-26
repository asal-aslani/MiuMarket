"use client";
import React, { PropsWithChildren } from 'react'
import { CssBaseline, ThemeProvider as MuiThemeProvider } from "@mui/material";
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import theme from './Theme';


  
  const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
  });
  

function Themeprovider({children}:PropsWithChildren) {
  return (
    <CacheProvider value={cacheRtl}>
      <MuiThemeProvider theme={theme}>
      <CssBaseline />
        {children}
        </MuiThemeProvider>
        </CacheProvider>
  )
}

export default Themeprovider