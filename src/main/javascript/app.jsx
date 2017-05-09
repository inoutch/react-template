import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render = () =>
        <div style={{color: "#ff0000"}}>Hello React!</div>;
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);
