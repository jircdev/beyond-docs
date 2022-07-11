import {initialCountState} from "./state";
import {createStore, createSubState} from "universal-model-ng-react-svelte-vue";

const initialState = {
    counter: createSubState(initialCountState)
};
type State = typeof initialState;

const createCountSelectors = <T extends State>() => ({
    selectorCount: (state: State) => state.counter.count
});
const counterStateSelectors = createCountSelectors<State>();

export /*bundle*/
const store = createStore<State, typeof counterStateSelectors>(initialState, counterStateSelectors);