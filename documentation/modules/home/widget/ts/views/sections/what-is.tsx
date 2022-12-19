import * as React from 'react';
import { AppIcon } from '@beyond/docs/ui/icons';
import { BeyondIconButton } from '@beyond/ui/icons';
import { useHomeContext } from '../context';

export function WhatIs() {
	const {
		texts: { whatIs: texts },
	} = useHomeContext();

	return (
		<section className="what-is__section">
			<div className="left">
				<h2 className="main__title">{texts.title}</h2>

				<div className="links">
					<a href="#why">{texts.links.why}</a>
					<a href="https://github.com/beyondjs">{texts.links.github}</a>
				</div>
			</div>
			<div className="right">
				<p>{texts.what}</p>

				<div className="actions">
					<BeyondIconButton className="start-now" icon="arrow-left">
						{texts.startNow}
					</BeyondIconButton>

					<div className="clipboard__container" data-text="npm i -g beyond">
						<span>npm i --location=global beyond</span>
						<AppIcon icon="copy" />
					</div>
				</div>
			</div>
		</section>
	);
}
