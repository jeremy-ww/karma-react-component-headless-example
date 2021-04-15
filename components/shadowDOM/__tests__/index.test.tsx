import React from "react";
import { mount } from "utils";

import ShadowDOMComponent from "..";

it("<ShadowDOM />", function () {
  const container = mount(
    <ShadowDOMComponent></ShadowDOMComponent>
  ).getDOMNode();
  // https://github.com/airbnb/enzyme/blob/558d5cfce306b53872d812a9f32d0c0ca9a68395/packages/enzyme/src/RSTTraversal.js#L35-L40
  expect(container?.querySelector("ui5-button-demo")?.textContent).toBe(
    "nested shadowDOM found"
  );
});
