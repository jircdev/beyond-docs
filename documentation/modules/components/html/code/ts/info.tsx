import * as React from 'react';
export /*bundle */ function Info({ className, children }) {
	const cls = `docs__info${className ? ` ${className}` : ''}`;
	return <div className={cls}>{children}</div>;
}
