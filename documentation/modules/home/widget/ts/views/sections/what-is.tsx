import * as React from 'react';
import { useHomeContext } from '../context';
export function WhatIs() {
	const {
		texts: { whatIs: texts },
	} = useHomeContext();

	return (
		<section className="what-is__section">
			<div className="left">
				<h2>{texts.title}</h2>

				<div className="links">
					<a href="#why">{texts.links.why}</a>
					<a href="https://github.com/beyondjs">{texts.links.github}</a>
				</div>
			</div>
			<div className="right">
				<p>{texts.what}</p>
			</div>
		</section>
	);
}
