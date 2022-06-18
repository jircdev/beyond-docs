import React from "react";
import { useRender } from "./use-render";

interface Ivalue {
  content: object;
}

export /*bundle*/ function Render({ content }) {
  const output = useRender(content);
  return <>{output}</>;
}
