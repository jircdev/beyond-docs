import * as React from 'react';
import { routing } from '@beyond-js/kernel/routing';

interface Props {
	to: string;
	children: JSX.Element | Array<JSX.Element>;
}

export /*bundle*/ function Link({ to, children }: Props) {
	function onClick(event: { preventDefault: () => void }) {
		console.log('ME EJECUTO DE UNA MANERA INCREIBLE CHAVAL');
		event.preventDefault();
		routing.pushState(to);
	}

	return (
		<a onClick={onClick} href={to}>
			{children}
		</a>
	);
}
