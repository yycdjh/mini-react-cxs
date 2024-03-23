import ReactDom from "./core/ReactDom.js";
import React from "./core/React.js";

const App = React.createElement("div", { id: "app" }, "hi-mini-react1");
ReactDom.createRoot(document.querySelector("#root")).render(App);
