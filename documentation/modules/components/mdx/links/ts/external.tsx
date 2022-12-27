import * as React from 'react';

interface Props {
	href: string;
	children: JSX.Element | Array<JSX.Element>;
}

export /*bundle*/ function ELink({ href, children }: Props) {
	return (
		<a target="_blank" href={href}>
			{children}
		</a>
	);
}
