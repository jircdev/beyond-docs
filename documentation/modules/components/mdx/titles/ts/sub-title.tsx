import * as React from 'react';

interface Props {
	children: string | number;
}

export /*bundle*/ function SubTitle({ children }: Props) {
	return <h2 className="sub__title">{children}</h2>;
}
