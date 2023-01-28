import * as React from 'react';
import { BeyondSpinner } from '@beyond/docs/spinner';
declare global {
	namespace JSX {
		interface IntrinsicElements {
			'menu-layout': any;
			'beyond-layout-children': any;
			'beyond-docs-header': any;
			'docs-header-menu': any;
		}
	}
}

export default function () {
	const ref = React.useRef(null);
	// React.useEffect(() => {
	// 	const target = ref.current;
	// 	globalThis.setTimeout(() => {
	// 		target.classList.add('hide');
	// 		target.remove();
	// 	}, 1500);
	// }, []);
	return (
		<div className="main-widget">
			{/* <div className="app__preloader" ref={ref}>
				<BeyondSpinner active />
			</div> */}
			<div className="home-page">
				<docs-header-menu />

				<menu-layout home="true" />
				<main>
					<beyond-layout-children />
				</main>
			</div>
		</div>
	);
}
