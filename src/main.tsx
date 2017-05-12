import * as React from "react";
import * as ReactDOM from "react-dom";

import { App } from "./components/App";

require("../css/main.css");
require("../index.html");

ReactDOM.render(
    <App />,
    document.getElementById("container")
);