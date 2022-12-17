import React from 'react';
import { useHomeContext } from '../context';

export function CodePen() {
	const {
		texts: { codepen: texts },
	} = useHomeContext();

	return (
		<section>
			<div className="content">
				<h4>{texts.title}</h4>
				<h5>{texts.subTitle}</h5>

				<p>{texts.description}</p>

				<p>{texts.checkItOut}</p>
			</div>

			<div className="container--800">
				<iframe height="300" style={{ width: '100%' }} scrolling="no" title="BeyondJS react counter widget" src="https://codepen.io/hello-beyond/embed/xxzrORV?default-tab=html%2Cresult" frameBorder="no" loading="lazy" allowtransparency="true" allowFullScreen={true}>
					See the Pen <a href="https://codepen.io/hello-beyond/pen/xxzrORV">BeyondJS react counter widget</a> by hello-beyond (<a href="https://codepen.io/hello-beyond">@hello-beyond</a>) on <a href="https://codepen.io">CodePen</a>.
				</iframe>
			</div>
		</section>
	);
}
