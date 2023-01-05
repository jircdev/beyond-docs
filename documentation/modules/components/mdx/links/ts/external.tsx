import * as React from 'react';

interface Props {
	to: string;
	children: JSX.Element | Array<JSX.Element>;
}

export /*bundle*/ function ELink({ to, children }: Props) {
	return (
		<a target="_blank" href={to}>
			{children}
		</a>
	);
}
