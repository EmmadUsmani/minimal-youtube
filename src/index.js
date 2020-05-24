import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles";
import App from "./App";
import "./index.css";

const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: {
        main: "#5e35b1",
      },
    },
    breakpoints: {
      md: 860,
      lg: 1220,
    },
  })
);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
