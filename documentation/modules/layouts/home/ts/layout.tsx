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

export default function () {
	return (
		<MDXComponentsProvider>
			<div className="main-widget">
				<div className="home-page">
					<docs-header-menu />
					<menu-layout home="true" />
					<main>
						<beyond-layout-children />
					</main>
				</div>
			</div>
		</MDXComponentsProvider>
	);
}
