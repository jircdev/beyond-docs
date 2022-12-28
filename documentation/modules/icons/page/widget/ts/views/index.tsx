import * as React from 'react';
import { Header } from './header';
import { List } from './list';
import { IconsPageContext } from './context';

import { SVGS } from '../icons';

export /*bundle*/
function View() {
	const [icons, setIcons] = React.useState(SVGS ?? []);

	const contextValue = {
		icons,
		setIcons,
	};
	return (
		<IconsPageContext.Provider value={contextValue}>
			<main className="icons__page">
				<Header />
				<List />
			</main>
		</IconsPageContext.Provider>
	);
}
