import {SvelteWidgetController} from '@beyond-js/svelte-widgets/controllers/ts';
import type {SvelteComponent} from 'svelte';
import Widget from "./widget.svelte";

export /*bundle*/
class Controller extends SvelteWidgetController {
    get Widget(): SvelteComponent {
        return Widget;
    }
}