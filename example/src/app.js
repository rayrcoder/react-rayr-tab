import 'react-rayr-tab/src/RayrTab.scss';

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {RayrTab, RayrTabPane} from 'react-rayr-tab';

// test
import Counter from '../../src/test/counter';

function App() {
    return (
        <div>
            <h1>组件初始化</h1>
            <RayrTab activeIndex={2} classPrefix={"tabs"} defaultActiveIndex={0} onChange={(data)=>{
                console.log(data);
                console.log('data');
            }}>
                <RayrTabPane key={0} order={'0'} tab={'A-E'}>
                    <div>
                        ABCDE
                    </div>
                </RayrTabPane>
                <RayrTabPane key={1} order={'1'} tab={'F-K'}>FGHIJK</RayrTabPane>
                <RayrTabPane key={2} order={'2'} tab={'L-Z'}>LMNOPQRSTUVWXYZ</RayrTabPane>
            </RayrTab>
        </div>
    )
}

const run = () => {
    ReactDOM.render(<App/>, document.getElementById('app'));
};

window.addEventListener('DOMContentLoaded', run);
