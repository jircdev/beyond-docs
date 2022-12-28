import * as React from 'react';

interface IIconsPage {
	icons;
	setIcons;
}
export const IconsPageContext = React.createContext({} as IIconsPage);
export const useIconsContext = () => React.useContext(IconsPageContext);
