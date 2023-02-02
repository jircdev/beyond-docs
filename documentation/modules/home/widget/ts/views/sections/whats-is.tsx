import * as React from 'react';
import { AppIcon } from '@beyond/docs/ui/icons';
import { BeyondIconButton } from '@beyond/ui/icons';
import { useHomeContext } from '../contexts';
import { SVGS } from '../../icons';
import { Clipboard } from '../clipboard';
import { routing } from '@beyond-js/kernel/routing';

export function WhatIs() {
	const {
		texts: { whatIs: texts, copyMessage },
	} = useHomeContext();

	return (
		<section className="page-section container text-on-primary">
			<div className=" what-is__section ">
				<div className="left">
					<h3 className="no-m">{texts.title}</h3>
					<div className="flex-container flex-space-b hidden-xs">
						<a href="#why">{texts.links.why}</a>
						<a href="https://github.com/beyondjs">{texts.links.github}</a>
					</div>
				</div>
				<div className="right">
					<p className="h4 regular no-m">{texts.what}</p>
					<div className="flex-container mt-50">
						<BeyondIconButton
							className="start-now"
							icon={SVGS.rightArrow}
							onClick={() => routing.pushState('/docs/quick-start')}
						>
							{texts.startNow}
						</BeyondIconButton>
						<Clipboard text="npx @beyond-js/create-package@latest" message={copyMessage} />
					</div>
				</div>
			</div>
		</section>
	);
}
