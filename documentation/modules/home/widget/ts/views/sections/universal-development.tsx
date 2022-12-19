import React from 'react';
import { BeyondIcon } from '@beyond/ui/icons';
import { BeyondButton } from '@beyond/ui/form';
import { useHomeContext } from '../context';

export function UniversalDevelopment() {
	const {
		texts: { universalDevelopment: texts },
	} = useHomeContext();

	return (
		<section className="universal-development__section">
			<BeyondIcon icon="universal-development" />

			<div className="content">
				<header>
					<h3 className="pre__title">{texts.pretitle}</h3>
					<h4 className="main__title">{texts.title}</h4>
					<h5 className="sub__title">{texts.subTitle}</h5>
				</header>

				<p>{texts.concept}</p>

				<div className="actions">
					<BeyondButton>{texts.startNow}</BeyondButton>
					<a href="#">{texts.moreInfo}</a>
				</div>
			</div>
		</section>
	);
}
