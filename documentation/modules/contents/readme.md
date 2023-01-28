# how add a new doc page.

# imports

Imports to add in mdx file.

```
import { NextLinks, Link, ELink, DocHeader, Title, Subtitle, BeyondJS } from "@beyond/docs/components/html";
import { Code, CodeBox } from "@beyond/docs/code";
```

## Export mdx file.

1. open `documentation\modules\contents\languages\[lang]\index.ts`
2. export new file.
3. the vdir in the url must have the coincidence with the exported object.

# add to menu.

1.Add an entry point in the texts file located at documentation/modules/contents/menu/texts/[lang].json.
Note: The entry point must include the "/docs" prefix in the URL.

2. Include the entry in the data array found in documentation/modules/contents/menu/ts/data/sections.
3. In the sections file, each file represents a main section in the menu structure.
