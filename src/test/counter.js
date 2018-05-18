import React from 'react';

export default class extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        console.log('click');
        this.setState({
            count: this.state.count + 1
        });
    }

    render() {
        return (
            <div className="counter">
                <div>{this.state.count}</div>
                <div>
                     <button onClick={this.handleClick}>更新</button>
                </div>
            </div>
        );
    }
}