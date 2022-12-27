import * as React from 'react';
import { routing } from '@beyond-js/kernel/routing';

interface Props {
	href: string;
	children: JSX.Element | Array<JSX.Element>;
}

export /*bundle*/ function Link({ href, children }: Props) {
	function onClick(event: { preventDefault: () => void }) {
		event.preventDefault();
		routing.pushState(href);
	}

	return (
		<a onClick={onClick} href={href}>
			{children}
		</a>
	);
}
