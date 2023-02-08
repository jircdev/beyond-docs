import * as React from 'react';
import { Link } from '@beyond/ui/link';

export /*bundle*/ function Notice({ text, className, link: [href, link] }) {
	const cls = `block__note${className ? ` ${className}` : ''}`;
	return (
		<div className={cls}>
			{text} <Link href={href}>{link}</Link>
		</div>
	);
}
