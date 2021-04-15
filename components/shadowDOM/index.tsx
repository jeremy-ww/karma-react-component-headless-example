import React from "react";
import { List, CustomListItem, Button } from "@ui5/webcomponents-react";
import { setCustomElementsScopingSuffix } from "@ui5/webcomponents-base/dist/CustomElementsScope";
import { setSuffix } from "@ui5/webcomponents-base/dist/renderer/LitRenderer";

setSuffix("demo");
setCustomElementsScopingSuffix("demo");

export default function ShadowDOMComponent() {
  return (
    <List>
      <CustomListItem>
        <Button>nested shadowDOM found</Button>
      </CustomListItem>
    </List>
  );
}
