import React from "react";
import { mount } from "utils";

import IntersectionObserverComponent from "..";

it("<IntersectionObserver />", function () {
  // https://github.com/airbnb/enzyme/blob/558d5cfce306b53872d812a9f32d0c0ca9a68395/packages/enzyme/src/RSTTraversal.js#L35-L40
  expect(
    mount(<IntersectionObserverComponent />).getDOMNode().textContent
  ).toBe("IntersectionObserver");
});
