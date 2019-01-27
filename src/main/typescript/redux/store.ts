import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";
import {connectRouter, routerMiddleware, RouterState} from "connected-react-router";
import {history} from "../router/app-router";

// full redux states
export type ReduxState = {
    router: RouterState;
};

export function createFinalStore() {
    const rootReducers = combineReducers<ReduxState>({
        router: connectRouter(history),
    });
    return createStore(rootReducers, applyMiddleware(thunk, routerMiddleware(history)));
}
