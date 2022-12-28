import * as React from 'react';
import { AppIcon } from '@beyond/docs/ui/icons';
import { BeyondIconButton } from '@beyond/ui/icons';
import { useHomeContext } from '../contexts';
import { SVGS } from '../../icons';

export function GettingStart() {
	const {
		texts: { gettingStarted: texts },
	} = useHomeContext();

	return (
		<section className="getting_started__section center-content">
			<h3 className="main__title">{texts.ready}</h3>
			{/* <Elink href="https://workspace.beyondjs.com">Conoce nuestro Workspace</Elink> */}
			<p className="pre__title">{texts.description}</p>
			<div className="actions">
				<a href="#">{texts.links.why}</a>
				<a href="#">{texts.links.github}</a>

				<BeyondIconButton className="start-now" icon={SVGS.rightArrow}>
					{texts.links.startNow}
				</BeyondIconButton>

				<div className="clipboard__container" data-text="npm i -g beyond">
					<span>npm i --location=global beyond</span>
					<AppIcon icon="copy" />
				</div>
			</div>
		</section>
	);
}
