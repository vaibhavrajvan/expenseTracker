import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "./context/context";

import { SpeechProvider } from "@speechly/react-client";

ReactDOM.render(
  <SpeechProvider appId="8b63ef3c-3b04-4b82-af26-79706c6cfad8" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById("root")
);
