import { PageReactWidgetController } from '@beyond-js/react-widgets/page';

import { IWidgetStore } from '@beyond-js/kernel/core';
import { Page } from './views/index';
import { Store } from './store';

export /*bundle*/
class Controller extends PageReactWidgetController {
	createStore(): IWidgetStore {
		const store = new Store(this.body);
		window.s = store;
		return store;
	}

	get Widget() {
		return Page;
	}
}
