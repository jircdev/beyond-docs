import * as React from "react";
import { MDXProvider } from "@mdx-js/react";
import { PreTitle, Title, Subtitle, Link, ELink, DocHeader } from "@beyond/docs/components/html";
import { BeyondIcon } from "@beyond/ui/icons";

import { Code, InlineCode } from "@beyond/docs/code";

import { PreloadPage } from "@beyond/docs/preload";
const components = {
    Link,
    ELink,

    Icon: BeyondIcon,
    PreTitle,
    Title,
    DocHeader,
    Subtitle,
};

export /*bundle*/ function MDXComponentsProvider({ children }) {
    return <MDXProvider components={components}>{children}</MDXProvider>;
}
