import * as React from 'react';
import { MDXComponentsProvider } from '@beyond/docs/mdx-setup';

declare global {
	namespace JSX {
		interface IntrinsicElements {
			'menu-layout': any;
			'beyond-layout-children': any;
			'beyond-docs-header': any;
		}
	}
}

export /*bundle*/ function Layout() {
	return (
		<MDXComponentsProvider>
			<div className="main-widget">
				<docs-header-menu />
				<div className="docs-page container">
					<menu-layout />
					<main>
						<beyond-layout-children />
					</main>
				</div>
			</div>
		</MDXComponentsProvider>
	);
}
