import * as React from "react";
import {Route, Switch} from "react-router";
import {createBrowserHistory} from "history";
import {ConnectedRouter} from "connected-react-router";
import IndexPage from "../containers/pages/IndexPage";

export const history = createBrowserHistory();

export function AppRouter() {
    return (
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact path="/" component={IndexPage}/>
            </Switch>
        </ConnectedRouter>
    );
}
