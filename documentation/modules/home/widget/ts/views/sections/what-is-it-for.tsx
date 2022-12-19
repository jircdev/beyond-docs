import * as React from 'react';
import { useHomeContext } from '../context';
import { Item } from './item';

export function WhatIsItFor() {
	const {
		texts: { whatsIsItFor: texts },
	} = useHomeContext();

	const featuresElements = texts.features.map((feature: { title: string; description: string; icon: string }) => <Item key={feature.description} title={feature.title} content={feature.description} icon={feature.icon} />);

	return (
		<section className="what-its-for__section center-content">
			<h2 className="pre__title">{texts.pretitle}</h2>
			<h3 className="main__title">{texts.title}</h3>
			<ul className="feature__list">{featuresElements}</ul>
		</section>
	);
}
