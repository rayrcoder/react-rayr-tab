# react-rayr-tab

## Description

base on react,a tab component.

## Install

```javascript
npm install react-rayr-tab --save
```

## Usage

```javascript
import {RayrTab, RayrTabPane} from 'react-rayr-tab';

<RayrTab classPrefix={"tabs"} defaultActiveIndex={0} className="tab-wrapper" onChange={(data)=>{}}>
        <RayrTabPane key={`tab_0`} order={'0'} tab={'tab1'}>
            tab1 content
        </RayrTabPane>
        <RayrTabPane key={`tab_1`} order={'1'} tab={'tab2'}>
            tab2 content
        </RayrTabPane>
        <RayrTabPane key={`tab_2`} order={'2'} tab={'tab3'}>
            tab3 content
        </RayrTabPane>
        <RayrTabPane key={`tab_3`} order={'3'} tab={'tab4'}>
            tab4 content
        </RayrTabPane>
</RayrTab>
```

## Params

### RayrTab

|name|type|desc|
|----|----|----|
|classPrefix| String | prefix of classname |
|defaultActiveIndex|Number|order of default active tab|
|className|String|customize style classname|
|onChange|Function|callback of tab change, will receive an object about prev index and active index|

### RayrTabPane

|name|type|desc|
|----|----|----|
|key|String|only key value of a tab panel|
|order|String|the order number of tab&tab panel|
|tab|String\|React Component|tab content,allow use string or a React Component|

note: The tab panel content is add inner RayrTabPane component.Is the children node of RayrTabPane component.

## Note

Do not forget to import style file(.css) to your project.