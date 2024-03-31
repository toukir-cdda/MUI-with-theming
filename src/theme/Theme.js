import { createContext } from "react";
import {
  cyan,
  green,
  lightBlue,
  lightGreen,
  orange,
  yellow,
} from "@mui/material/colors";

export const CSFThemeContext = createContext({
  csfTheme: { name: "", theme: {} },
  setTheme: () => {},
  setThemeMode: () => {},
});

export const typographyPresets = {
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  fontFamily: "poppins , sans-serif",
  h1: {
    fontSize: "2.25rem",
    fontWeight: 600,
    lineHeight: 1.5,
  },
  h2: {
    fontSize: "2rem",
    fontWeight: 600,
    lineHeight: 1.5,
  },
  h3: {
    fontSize: "1.75rem",
    fontWeight: 600,
    lineHeight: 1.5,
  },
  h4: {
    fontSize: "1.5rem",
    fontWeight: 600,
    lineHeight: 1.5,
  },
  h5: {
    fontSize: "1.25rem",
    fontWeight: 600,
    lineHeight: 1.5,
  },
  h6: {
    fontSize: "1rem",
    fontWeight: 600,
    lineHeight: 1.5,
  },
  subtitle1: {
    fontSize: "1rem",
    fontWeight: 600,
    lineHeight: 1.5,
  },
  subtitle2: {
    fontSize: "0.875rem",
    fontWeight: 500,
    lineHeight: 1.5,
  },
  body1: {
    fontSize: "1rem",
    fontWeight: 400,
    lineHeight: 1.5,
  },
  body2: {
    fontSize: "0.875rem",
    fontWeight: 600,
    lineHeight: 1.5,
  },
  button: {
    fontSize: "0.875rem",
    textTransform: "none",
    fontWeight: 600,
    lineHeight: 1.5,
    cursor: "pointer",
  },
};

export const shadows = [
  "none",
  "rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px",
  "rgba(0, 0, 0, 0.15) 0px 2px 8px",
  "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
  "rgba(0, 0, 0, 0.15) 0px 3px 3px 0px",
];

export const csfThemeOptions = [
  {
    name: "default",
    palette: {
      bg: { main: "#f3f3f9", light: "#f3f3f9", dark: "#1a1d21" },
      primary: {
        main: lightBlue[300],
        light: lightBlue[500],
        dark: lightBlue[500],
        contrastText: "#fff",
      },
      secondary: {
        main: lightBlue[100],
        light: lightBlue[300],
        dark: lightBlue[400],
        contrastText: "#fff",
      },
      title: { main: "#495057", light: "#495057", dark: "#ced4da" },
      subtitle: { main: "#878a99", light: "#878a99", dark: "#878a99" },
      body: { main: "#212529", light: "#212529", dark: "#ced4da" },
      sidebar: { main: "#f3f3f9", light: "#f3f3f9", dark: "#1a1d21" },
      topNav: { main: "#f3f3f9", light: "#f3f3f9", dark: "#1a1d21" },
      card: { main: "#f3f3f9", light: "#fff", dark: "#1a1d21" },
    },
    shadows: shadows,
    typography: typographyPresets,
  },

  {
    name: "Forest",
    palette: {
      bg: { main: "#f9fff9", light: "#f9fff9", dark: "#011703" },
      primary: {
        main: green[500],
        light: green[300],
        dark: green[900],
        contrastText: "#fff",
      },
      secondary: {
        main: lightGreen[400],
        light: lightGreen[300],
        dark: lightGreen[900],
      },
      title: { main: "#495057", light: "#495057", dark: "#ced4da" },
      subtitle: { main: "#878a99", light: "#878a99", dark: "#878a99" },
      body: { main: "#212529", light: "#212529", dark: "#ced4da" },
      sidebar: { main: "#f9fff9", light: "#f9fff9", dark: "#011703" },
      topNav: { main: "#f9fff9", light: "#f9fff9", dark: "#011703" },
      card: { main: "#f9fff9", light: "#fff", dark: "#011703" },
    },
    shadows: shadows,
    typography: typographyPresets,
  },
  {
    name: "Ocean",
    palette: {
      bg: { main: "#f9f9ff", light: "#f9f9ff", dark: "#01103f" },
      primary: {
        main: lightBlue[600],
        light: lightBlue[300],
        dark: lightBlue[900],
        contrastText: "#fff",
      },
      secondary: { main: cyan[400], light: cyan[300], dark: cyan[900] },
      title: { main: "#495057", light: "#495057", dark: "#ced4da" },
      subtitle: { main: "#878a99", light: "#878a99", dark: "#878a99" },
      body: { main: "#212529", light: "#212529", dark: "#ced4da" },
      sidebar: { main: "#f9f9ff", light: "#f9f9ff", dark: "#020b24" },
      topNav: { main: "#f9f9ff", light: "#f9f9ff", dark: "#020b24" },
      card: { main: "#f9f9ff", light: "#fff", dark: "#020b24" },
    },
    shadows: shadows,
    typography: typographyPresets,
  },
  {
    name: "Parpel",
    palette: {
      bg: { main: "#fff9ff", light: "#fff9ff", dark: "#3f013f" },
      primary: {
        main: "#9c27b0",
        light: "#9c27b0",
        dark: "#9c27b0",
        contrastText: "#fff",
      },
      secondary: { main: "#e91e63", light: "#e91e63", dark: "#e91e63" },
      title: { main: "#495057", light: "#495057", dark: "#ced4da" },
      subtitle: { main: "#878a99", light: "#878a99", dark: "#878a99" },
      body: { main: "#212529", light: "#212529", dark: "#ced4da" },
      sidebar: { main: "#fff9ff", light: "#fff9ff", dark: "#1f001f" },
      topNav: { main: "#fff9ff", light: "#fff9ff", dark: "#1f001f" },
      card: { main: "#fff9ff", light: "#fff", dark: "#1f001f" },
    },
    shadows: shadows,
    typography: typographyPresets,
  },
  {
    name: "Sunset",
    palette: {
      bg: { main: "#fff9f9", light: "#fff9f9", dark: "#3f0101" },
      primary: {
        main: orange[600],
        light: orange[300],
        dark: orange[900],
        contrastText: "#fff",
      },
      secondary: { main: yellow[400], light: yellow[300], dark: yellow[900] },
      title: { main: "#495057", light: "#495057", dark: "#ced4da" },
      subtitle: { main: "#878a99", light: "#878a99", dark: "#878a99" },
      body: { main: "#212529", light: "#212529", dark: "#ced4da" },
      sidebar: { main: "#fff9f9", light: "#fff9f9", dark: "#2b1800" },
      topNav: { main: "#fff9f9", light: "#fff9f9", dark: "#2b1800" },
      card: { main: "#fff9f9", light: "#fff", dark: "#2b1800" },
    },
    shadows: shadows,
    typography: typographyPresets,
  },
];
