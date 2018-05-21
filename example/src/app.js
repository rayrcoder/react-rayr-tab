import 'react-rayr-tab/src/RayrTab.scss';
import './index.scss';

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {RayrTab, RayrTabPane} from 'react-rayr-tab';

let tabList = [
    {
        navItem: '北方大区',
        navPane: ['东北','北京','山东','河北'],
        order: '0'
    },
    {
        navItem: '华东大区',
        navPane: ['上海','苏州','杭州','无锡'],
        order:'1'
    },
    {
        navItem: '华南大区',
        navPane: ['广州','深圳','珠海','中山'],
        order: '2'
    }
];

function RenderPane(navPane) {
    return (
        <div className="pane-wrapper">
            {
                navPane.map((item, index)=>{
                    return (
                        <span key={`${item}_${index}`} className="nav-pane-item">
                            {item}
                        </span>
                    )
                })
            }
        </div>
    );
}

function App() {
    return (
        <div className="demo-wrapper">
            <h1>Tab组件初始化</h1>
            <div className="tab-box">
                <RayrTab
                        classPrefix={"tabs"}
                        defaultActiveIndex={0}
                        className="tab-wrapper"
                        onChange={(data)=>{
                            
                        }}>
                    {
                        tabList.map((item, index)=>{
                            return (
                                <RayrTabPane key={`tab_${index}`} order={item.order} tab={item.navItem}>
                                    {
                                        RenderPane(item.navPane)
                                    }
                                </RayrTabPane>
                            );
                        })
                    }
                </RayrTab>
            </div>

            <div className="tab-box">
                <RayrTab
                        classPrefix={"tabs"}
                        defaultActiveIndex={0}
                        className="tab-wrapper"
                        onChange={(data)=>{
                            
                        }}>
                        <RayrTabPane key={`tab_0`} order={'0'} tab={'首页'}>
                            <div>
                                <h1>Tab Title</h1>
                                <p>This is tab content...</p>
                            </div>
                        </RayrTabPane>
                        <RayrTabPane key={`tab_1`} order={'1'} tab={'商城'}>
                            Tab_2的内容
                        </RayrTabPane>
                        <RayrTabPane key={`tab_2`} order={'2'} tab={'其他'}>
                            Tab_3的内容
                        </RayrTabPane>
                        <RayrTabPane key={`tab_3`} order={'3'} tab={'个人中心'}>
                            Tab_4的内容
                        </RayrTabPane>
                </RayrTab>
            </div>
        </div>
    )
}

const run = () => {
    ReactDOM.render(<App/>, document.getElementById('app'));
};

window.addEventListener('DOMContentLoaded', run);
