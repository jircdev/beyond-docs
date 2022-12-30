import * as React from 'react';
import { PreTitle, Title, SubTitle } from '@beyond/docs/titles';
import { Code, InlineCode } from '@beyond/docs/code';
import { ELink } from '@beyond/docs/links';
import { PreloadPage } from '@beyond/docs/preload';

import { DocsContext } from './context';
import { ContentsContainer } from './container';
import MDXComponent from './views/mdx/es.mdx';

export /*bundle*/ function ContentsPage({}) {
	const { pathname } = location;

	return (
		<DocsContext.Provider value={{}}>
			<ContentsContainer>
				<h3>Content page</h3>
				<MDXComponent />
			</ContentsContainer>
		</DocsContext.Provider>
	);
}
