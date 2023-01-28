import * as React from 'react';

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
		<div className="main-widget">
			<docs-header-menu />
			<div className="docs-page container">
				<menu-layout />
				<main>
					<beyond-layout-children />
				</main>
			</div>
		</div>
	);
}
