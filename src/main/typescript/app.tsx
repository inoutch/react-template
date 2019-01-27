import * as React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import {createFinalStore} from "./redux/store";
import {AppRouter} from "./router/app-router";

const store = createFinalStore();

function App() {
    return (
        <Provider store={store}>
            <AppRouter/>
        </Provider>
    );
}

render(<App/>, document.getElementById("app"));
