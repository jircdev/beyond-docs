import * as React from 'react';

import { SVGS } from '../icons';
import { Icon } from './icon';

export function List() {
	const iconsElements = SVGS.map((icon) => <Icon key={icon.icon} name={icon.name} icon={icon} />);

	return <ul className="icon__list">{iconsElements}</ul>;
}
