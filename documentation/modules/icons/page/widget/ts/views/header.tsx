import * as React from 'react';
import { Searchbar } from './searchbar';

export function Header() {
	return (
		<header className="main__header">
			<h1>Beyond Docs Icons</h1>
			<Searchbar />
		</header>
	);
}
