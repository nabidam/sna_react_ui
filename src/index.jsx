import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { store } from "./_helpers";
import { App } from "./App";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import "./_styles/style.css";
import "./_styles/fontawesome.css";
import "./_styles/rtl-style.css";

// setup fake backend
import { configureFakeBackend } from "./_helpers";

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '"BYekan"',
      '"Lato"',
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(",")
  }
});
configureFakeBackend();

render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById("app")
);
