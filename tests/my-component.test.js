// tests/my-component.test.js

import React from "react";
import ReactDOM from "react-dom";
import { MyComponent } from "../src/index";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<MyComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
