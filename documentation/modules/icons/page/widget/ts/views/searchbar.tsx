import * as React from 'react';
import { useIconsContext } from './context';
import { SVGS } from '../icons';

const DEFAULT_ICONS = SVGS;

export function Searchbar() {
	const { setIcons } = useIconsContext();
	const [searchValue, setSearchValue] = React.useState('');

	function handleChange(event: { target: { value: string } }) {
		const { value } = event.target;
		setSearchValue(value);

		setIcons((prevValues) => {
			const filteredItems = prevValues.filter((icon: { name: string }) => icon.name.includes(value));

			const returnDefault = value === '' || filteredItems.length === 0;
			return !returnDefault ? filteredItems : DEFAULT_ICONS;
		});
	}

	return <input placeholder="Search..." value={searchValue} onChange={handleChange} type="search" />;
}
