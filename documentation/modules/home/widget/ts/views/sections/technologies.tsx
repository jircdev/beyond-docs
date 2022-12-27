import React from 'react';
import { BeyondIcon } from '@beyond/ui/icons';
import { useHomeContext } from '../contexts';

const technologies = [
	{ title: 'jamstack', icon: 'jamstack' },
	{ title: 'react', icon: 'react' },
	{ title: 'npm', icon: 'npm' },
	{ title: 'vue', icon: 'vue' },
	{ title: 'sass', icon: 'sass' },
	{ title: 'typescript', icon: 'typescript' },
	{ title: 'node', icon: 'node' },
	{ title: 'svelte', icon: 'svelte' },
	{ title: 'websockets', icon: 'websockets' },
];

export function Technologies() {
	const {
		texts: { technologies: texts },
	} = useHomeContext();

	const output = technologies.map((technology) => (
		<li key={technology.title}>
			<BeyondIcon icon={technology.icon} title={technology.title} />
		</li>
	));

	return (
		<section className="technologies__section center-content">
			<h5 className="pre__title">{texts.title}</h5>
			<ul className="technologies__list">{output}</ul>
		</section>
	);
}
