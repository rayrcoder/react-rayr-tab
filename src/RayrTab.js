import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Selector = (classPrefix) => ({
    PREFIX: classPrefix,
    NAV: `${classPrefix}-nav`,
    CONTENT: `${classPrefix}-content`,
    TAB: `${classPrefix}-tab`,
    PANEL: `${classPrefix}-panel`,
    ACTIVE: `${classPrefix}-active`,
    DISABLED: `${classPrefix}-disable`
});

class RayrTab extends React.Component {

    static propTypes = {
        classPrefix: PropTypes.string,
        className: PropTypes.string,
        defaultActiveIndex: PropTypes.number,// 默认激活index，组件内更新
        activeIndex: PropTypes.number,// 默认激活index，组件外更新
        onChange: PropTypes.func,
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node
        ])
    };

    static defaultProps = {
        classPrefix: 'tabs',
        onChange: () => {
        }
    };


    constructor(props) {
        super(props);

        this.handleTabClick = this.handleTabClick.bind(this);

        const currProps = this.props;

        let activeIndex;

        if ('activeIndex' in currProps) {
            activeIndex = currProps.activeIndex;
        } else if ('defaultActiveIndex' in currProps) {
            activeIndex = currProps.defaultActiveIndex;
        }

        this.state = {
            activeIndex,
            prevIndex: activeIndex
        }
    };

    componentWillReceiveProps(nextProps) {
        if ('activeIndex' in nextProps) {
            this.setState({
                activeIndex: nextProps.activeIndex
            });
        }
    }

    handleTabClick(activeIndex) {
        //...
        const prevIndex = this.state.activeIndex;

        if (this.state.activeIndex !== activeIndex &&
            'defaultActiveIndex' in this.props) {
            this.setState({
                activeIndex,
                prevIndex
            });
        }

        this.props.onChange({activeIndex, prevIndex});
    }

    renderTabNav() {
        const {classPrefix, children} = this.props;

        return (
            <TabNav
                key="tabBar"
                classPrefix={classPrefix}
                onTabClick={this.handleTabClick}
                panels={children}
                activeIndex={this.state.activeIndex}
            />
        );
    }

    renderTabContent() {
        const {classPrefix, children} = this.props;

        return (
            <TabContent
                key={"tabcontent"}
                classPrefix={classPrefix}
                panels={children}
                activeIndex={this.state.activeIndex}
            />
        );
    }


    render() {
        const {className} = this.props;

        const classes = classnames(className, 'ui-tabs');

        return (
            <div className={classes}>
                {this.renderTabNav()}
                {this.renderTabContent()}
            </div>
        );

        // return (
        //     <div className="rayr-tab">
        //         <div className="tabs-bar">
        //             <ul className="tabs-nav">
        //                 <li className="tabs-tab">菜单-1</li>
        //                 <li className="tabs-tab">菜单-2</li>
        //                 <li className="tabs-tab">菜单-3</li>
        //             </ul>
        //         </div>
        //         <div className="tabs-content">
        //             <div className="tabs-panel">
        //                 Fist menu 的内容
        //             </div>
        //             <div className="tabs-panel">
        //                 Second menu 的内容
        //             </div>
        //             <div className="tabs-panel">
        //                 Third menu 的内容
        //             </div>
        //         </div>
        //     </div>
        // );
    }
}

class TabNav extends React.Component {

    static propTypes = {
        classPrefix: PropTypes.string,
        panels: PropTypes.node,
        activeIndex: PropTypes.number
    };


    getTabs() {
        const {classPrefix, activeIndex, panels} = this.props;

        return React.Children.map(panels, (child) => {
            if (!child) {
                return;
            }

            const order = parseInt(child.props.order, 10);

            let classes = classnames({
                [`${classPrefix}-tab`]: true,
                [`${classPrefix}-active`]: activeIndex === order,
                [`${classPrefix}-disabled`]: child.props.disbled
            });

            let events = {};

            if (!child.props.disabled) {
                events = {
                    onClick: this.props.onTabClick.bind(this, order)
                };
            }

            const ref = {};
            if (activeIndex === order) {
                ref.ref = 'activeTab';
            }

            return (
                <li
                    role={"tab"}
                    aria-disabled={child.props.disabled ? 'true' : 'false'}
                    aria-selected={activeIndex === order ? 'true' : 'false'}
                    {...events}
                    className={classes}
                    key={order}
                >
                    {child.props.tab}
                </li>
            );
        });
    }

    render() {
        const {classPrefix} = this.props;
        const rootClasses = classnames({
            [`${classPrefix}-bar`]: true
        });

        const classes = classnames({
            [`${classPrefix}-nav`]: true
        });

        return (
            <div className={rootClasses} role={"tablist"}>
                <ul className={classes}>
                    {this.getTabs()}
                </ul>
            </div>
        );
    }
}

class TabContent extends React.Component {
    static propTypes = {
        classPrefix: PropTypes.string,
        panels: PropTypes.node,
        activeIndex: PropTypes.number
    };

    getTabPanes() {
        const {classPrefix, activeIndex, panels} = this.props;

        return React.Children.map(panels, (child) => {
            if (!child) {
                return;
            }

            const order = parseInt(child.props.order, 10);
            const isActive = activeIndex === order;

            return React.cloneElement(child, {
                classPrefix,
                isActive,
                children: child.props.children,
                key: `tabpane-${order}`
            });
        });
    }

    render() {
        const {classPrefix} = this.props;
        const classes = classnames({
            [`${classPrefix}-content`]: true
        });

        return (
            <div className={classes}>
                {this.getTabPanes()}
            </div>
        );
    }
}

export default RayrTab;
