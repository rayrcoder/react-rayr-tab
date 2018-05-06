import 'react-rayr-tab/src/RayrTab.scss';

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {RayrTab} from 'react-rayr-tab';

function App() {
    return (
        <div>
            <h1>组件初始化</h1>
            <RayrTab/>
        </div>
    )
}

const run = () => {
    ReactDOM.render(<App/>, document.getElementById('app'));
};

window.addEventListener('DOMContentLoaded', run);
