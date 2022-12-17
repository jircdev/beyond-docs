import * as React from 'react';
import { AppIcon } from '@beyond/docs/ui/icons';
import { useHomeContext } from '../context';

export function GettingStart() {
	const {
		texts: { gettingStarted: texts },
	} = useHomeContext();

	return (
		<div className="container">
			<div className="container--800">
				<h3>{texts.ready}</h3>
				{/* <Elink href="https://workspace.beyondjs.com">Conoce nuestro Workspace</Elink> */}
				<p>{texts.description}</p>
				<div className="links">
					<a href="#">{texts.links.why}</a>
					<a href="#">{texts.links.github}</a>

					<div className="clipboard__container" data-text="npm i -g beyond">
						<span>npm i --location=global beyond</span>
						<AppIcon icon="copy" />
					</div>
					<p>{texts.creatingAProject}</p>
					<div className="clipboard__container" data-text="npm i -g beyond">
						npx @beyond-js/create-project --type node --name @beyond-tutorial/hmr
					</div>
				</div>
			</div>
		</div>
	);
}
