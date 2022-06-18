import * as React from "react";
import { Loading } from "./loading";
import { useTexts, DocsContext } from "@beyond/docs/store/code";
import { Render } from "./render";
import { Link } from "@beyond/ui/link/code";
import { NextLinks } from "@beyond/docs/components/next-links/code";

export /* bundle */ function Document({ moduleId, textId, nextLinks }) {
  const [ready, texts] = useTexts(moduleId);
  if (!ready) return <Loading />;
  
  return (
    <DocsContext.Provider value={{ texts, ready }}>
      <Render content={texts[textId]} />
      {nextLinks && <NextLinks items={nextLinks} />}
    </DocsContext.Provider>
  );
}
