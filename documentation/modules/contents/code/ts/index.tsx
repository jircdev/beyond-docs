import * as React from 'react';
import { PreTitle, Title, SubTitle } from '@beyond/docs/titles';
import { Code, InlineCode } from '@beyond/docs/code';
import { ELink } from '@beyond/docs/links';
import { PreloadPage } from '@beyond/docs/preload';
import { beyond } from '@beyond-js/kernel/core';
import { DocsContext } from './context';
import { ContentsContainer } from './container';
import { IntroEN, BackendEN, BeeEN } from './mdx/en';
import { TutoES, IntroES, BackendES, BeeES, BundlesES } from './mdx/es';

export /*bundle*/ function ContentsPage({ contentId }) {
	const contents = {
		intro: {
			es: BundlesES,
			en: BackendES,
		},

		'tutorial/start': {
			es: TutoES,
		},
		'/widgets/pepito': '@beyond/docs/pepito',
	};

	const { current: lang } = beyond.languages;
	const ComponentToShow = contents[contentId][lang];

	function ContentWrapper({ children }) {
		return <>{children}</>;
	}

	return (
		<DocsContext.Provider value={{}}>
			<ContentsContainer>
				<ComponentToShow components={{ wrapper: ContentWrapper }} />
			</ContentsContainer>
		</DocsContext.Provider>
	);
}
