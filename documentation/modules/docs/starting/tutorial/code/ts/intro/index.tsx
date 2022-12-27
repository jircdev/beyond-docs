import * as React from 'react';
import { hmr, Document } from '@beyond/docs/components/html';

import { module } from 'beyond_context';
import { tpls } from '../templates';
import ES from './es.mdx';

export /*bundle*/ function TutorialIntro() {
	return (
		<>
			{/* <Document specifier={module.specifier} textId="intro" /> */}
			{/* <Document specifier={module.specifier} textId="starting" tpls={tpls.starting} nextLinks={['/docs/tutorial/first-module', '/docs/tutorial/backend']} /> */}
			<ES />
		</>
	);
}
