import CSFThemeProvider from "../theme/CSFThemeProvider";

const Providers = ({ children }) => {
  return <CSFThemeProvider>{children}</CSFThemeProvider>;
};

export default Providers;
