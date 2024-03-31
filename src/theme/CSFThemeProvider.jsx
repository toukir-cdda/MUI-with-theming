"use client";

import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import {
  CSFThemeContext,
  csfThemeOptions,
  shadows,
  typographyPresets,
} from "./Theme";

const CSFThemeProvider = ({ children }) => {
  const theme = createTheme({
    palette: csfThemeOptions[0].palette,
    typography: typographyPresets,
    shadows: shadows,
  });

  const appCSFTheme = {
    name: csfThemeOptions[0].name,
    theme: theme,
  };
  const [csfTheme, setCSFTheme] = useState(appCSFTheme);
  //initial theme setter from local storage
  useEffect(() => {
    const csfTheme = JSON.parse(localStorage.getItem("csfTheme"));
    if (csfTheme) {
      setCSFTheme({
        name: csfTheme.name,
        theme: createTheme({
          palette: csfTheme.palette,
          typography: typographyPresets,
          shadows: shadows,
        }),
      });
    }
  }, []);

  // theme setter
  const setTheme = (themeOptions) => {
    themeOptions.palette.mode = csfTheme.theme.palette.mode;
    setCSFTheme({
      name: themeOptions.name,
      theme: createTheme({
        palette: themeOptions.palette,
        typography: typographyPresets,
        shadows: shadows,
      }),
    });
    // set theme in local storage
    localStorage.setItem("csfTheme", JSON.stringify(themeOptions));
  };

  // theme mode setter (light/dark) if local storage has a theme set already then it will set the mode from that theme else it will set the mode from the default theme
  const setThemeMode = (mode) => {
    const themeOptions = JSON.parse(localStorage.getItem("csfTheme"));
    if (themeOptions) {
      themeOptions.palette.mode = mode;
      setCSFTheme({
        name: themeOptions.name,
        theme: createTheme({
          palette: themeOptions.palette,
          typography: typographyPresets,
          shadows: shadows,
        }),
      });
      // set theme in local storage
      localStorage.setItem("csfTheme", JSON.stringify(themeOptions));
    } else {
      const themeOptions = csfThemeOptions[0];
      themeOptions.palette.mode = mode;
      setCSFTheme({
        name: themeOptions.name,
        theme: createTheme({
          palette: themeOptions.palette,
          typography: typographyPresets,
          shadows: shadows,
        }),
      });
      // set theme in local storage
      localStorage.setItem("csfTheme", JSON.stringify(themeOptions));
    }
  };
  return (
    <CSFThemeContext.Provider
      value={{ csfTheme: csfTheme, setTheme, setThemeMode }}
    >
      <ThemeProvider theme={csfTheme?.theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CSFThemeContext.Provider>
  );
};

export default CSFThemeProvider;
