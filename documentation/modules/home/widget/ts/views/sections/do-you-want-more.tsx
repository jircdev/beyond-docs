import React from 'react';
import { Item } from './item';
import { useHomeContext } from '../context';

interface IFeature {
	moreInfo?: { text: string; to: string };
	title: string;
	description: string;
	icon: string;
}

export function DoYouWantMore() {
	const {
		texts: { doYouWantMore: texts },
	} = useHomeContext();

	const output = texts.features.map((feature: IFeature) => {
		return (
			<Item key={feature.description} title={feature.title} icon={feature.icon} content={feature.description}>
				{feature.moreInfo && <a href={feature.moreInfo.to}>{feature.moreInfo.text}</a>}
			</Item>
		);
	});

	return (
		<section className="more__section">
			<h3 className="pre__title">{texts.preTitle}</h3>
			<h4 className="main__title">{texts.title}</h4>
			<ul className="feature__list">{output}</ul>
		</section>
	);
}
