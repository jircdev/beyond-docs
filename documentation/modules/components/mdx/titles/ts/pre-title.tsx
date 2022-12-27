import * as React from 'react';

interface Props {
	children: string | number;
}

export /*bundle*/ function PreTitle({ children }: Props) {
	return <h3 className="pre__title">{children}</h3>;
}
