import * as React from "react";
import { hmr, Document } from "@beyond/docs/components/html/code";
import { Code } from "@beyond/docs/code/code";
import { Link } from "@beyond/ui/link/code";
import { useTexts, DocsContext } from "@beyond/docs/store/code";
import { module } from "beyond_context";
import { Content } from "./content";
export /*bundle*/ function TutorialIntro() {
  return (
    <>
       <Document moduleId={module.resource} textId="intro" />
      <Document
        moduleId={module.resource}
        textId="starting"
        nextLinks={[
          ["First Module", "/docs/tutorial/first-module"],
          ["Backend", "/docs/tutorial/backend"],
        ]}
      />
    </>
  );
}
