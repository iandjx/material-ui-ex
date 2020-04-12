import React from "react";
import logo from "./logo.svg";
import Header from "./ui/header";
import { theme } from "./ui/theme";
import { ThemeProvider } from "@material-ui/core";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header /> Hello!
    </ThemeProvider>
  );
}

export default App;
