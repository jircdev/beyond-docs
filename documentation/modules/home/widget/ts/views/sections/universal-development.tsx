import React from 'react';
import { useHomeContext } from '../context';

export function UniversalDevelopment() {
	const {
		texts: { universalDevelopment: texts },
	} = useHomeContext();

	return (
		<section>
			{/* SVG GOES HERE */}

			<div className="content">
				<header>
					<p className="">{texts.pretitle}</p>
					<h4>{texts.title}</h4>
					<h5>{texts.subTitle}</h5>
				</header>

				<p>{texts.concept}</p>

				<div className="links">
					<button>{texts.startNow}</button>
					<a href="#">{texts.moreInfo}</a>
				</div>
			</div>
		</section>
	);
}
