import 'react-rayr-tab/src/RayrTab.scss';

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {RayrTab, RayrTabPane} from 'react-rayr-tab';

function App() {
    return (
        <div>
            <h1>组件初始化</h1>
            <RayrTab classPrefix={"tabs"} defaultActiveIndex={0}>
                <RayrTabPane key={0} tab={'Tab1'}>菜单1中的内容</RayrTabPane>
                <RayrTabPane key={1} tab={'Tab2'}>菜单2中的内容</RayrTabPane>
                <RayrTabPane key={2} tab={'Tab3'}>菜单3中的内容</RayrTabPane>
            </RayrTab>
        </div>
    )
}

const run = () => {
    ReactDOM.render(<App/>, document.getElementById('app'));
};

window.addEventListener('DOMContentLoaded', run);
