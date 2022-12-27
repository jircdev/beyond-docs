import * as React from 'react';

interface Props {
	children: string | number;
}

export /*bundle*/ function Title({ children }: Props) {
	return <h1 className="main__title">{children}</h1>;
}
