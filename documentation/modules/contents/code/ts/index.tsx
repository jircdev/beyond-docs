import * as React from 'react';

import { beyond } from '@beyond-js/kernel/core';
import { DocsContext } from './context';
import * as Contents from '@beyond/docs/contents/esp';
import * as ContentsEn from '@beyond/docs/contents/en';
import { useState, useEffect } from 'react';
import { RightAside } from './views/right-aside';
import '@beyond/docs/missing.widget';
import '@beyond/docs/under-construction.widget';

export /*bundle*/ function ContentsPage({ contentId, component }) {
	const { current: lang } = beyond.languages;
	// const ComponentToShow = contents[contentId][lang];

	const replace = (text) => text.replace(text[0], text[0].toUpperCase());
	const Components = lang === 'es' ? Contents : ContentsEn;
	const name = contentId.split('-').map(replace).join('');
	const [Component, setComponent] = useState(Components[name]);
	const [sections, setSections] = useState<Element[]>();
	const [updated, setUpdated] = useState<EpochTimeStamp>(performance.now());
	const { shadowRoot } = component;

	function ContentWrapper({ children }) {
		return <>{children}</>;
	}

	useEffect(() => {
		const items: NodeList = shadowRoot.querySelectorAll('h1,h2,h3,h4');
		const onChange = () => {
			setComponent(Components[name]);
			setUpdated(performance.now());
		};
		Components.hmr.on('change', onChange);
		setSections(Array.from(items));
		return () => Components.hmr.on('change', onChange);
	}, []);

	if (!Component) {
		return (
			<main className="page__main-container">
				<section className="page__main-content">
					<app-under-construction />
				</section>
			</main>
		);
	}

	const Content = Components[name];

	return (
		<DocsContext.Provider value={{ sections, setSections, shadowRoot, component }}>
			<main className="page__main-container">
				<section className="page__main-content">
					<Content components={{ wrapper: ContentWrapper }} />
				</section>
				{sections?.length ? <RightAside /> : null}
			</main>
		</DocsContext.Provider>
	);
}
