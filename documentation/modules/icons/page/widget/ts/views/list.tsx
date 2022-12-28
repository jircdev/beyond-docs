import * as React from 'react';

import { Icon } from './icon';
import { useIconsContext } from './context';

export function List() {
	const { icons } = useIconsContext();
	console.log(icons);
	const iconsElements = icons.map((icon) => <Icon key={icon.name} name={icon.name} icon={icon} />);

	return <ul className="icon__list">{iconsElements}</ul>;
}
