import * as React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Link, ELink } from '@beyond/docs/links';
import { BeyondIcon } from '@beyond/ui/icons';
import { BeyondImage } from '@beyond/ui/image';

const components = {
	Link,
	ELink,
	Img: BeyondImage,
	Icon: BeyondIcon,
};

export /*bundle*/ function MDXComponentsProvider({ children }) {
	return <MDXProvider components={components}>{children}</MDXProvider>;
}
