import React from "react";
import { GlobalStyle } from "./style/global";

import Router from './routes';

export default function App() {
  return(
    <>
      <Router/>
      <GlobalStyle/>
    </>
  )
}