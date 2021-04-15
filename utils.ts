import Enzyme, { mount as _mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import jasmineEnzyme from "jasmine-enzyme";
import { ReactElement } from "react";

// Configure Enzyme for the appropriate React adapter
Enzyme.configure({ adapter: new Adapter() });

const container = document.createElement("div");
document.body.appendChild(container);

// Initialize global helpers
beforeEach(() => {
  jasmineEnzyme();

  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
});

// Re-export all enzyme exports
export * from "enzyme";

export function mount(node: ReactElement) {
  return _mount(node, { attachTo: container });
}
