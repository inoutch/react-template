import React from 'react';
import ReactDOM from 'react-dom';

import 'sanitize.css'

class App extends React.Component {
    render = () =>
        <div style={{color: "#ff0000"}}>Hello React!</div>;
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);
