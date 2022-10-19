import React from "react";
import { GlobalStyle } from "./style/global";

import NavProvider from "./contexts/navigation";

import Router from './routes';

export default function App() {
  return(
    <NavProvider>
      <Router/>
      <GlobalStyle/>
    </NavProvider>
  )
}