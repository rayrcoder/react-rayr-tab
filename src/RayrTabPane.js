import classnames from "classnames";
import React from "react";
import PropTypes from "prop-types";

class TabPane extends React.Component {
    static propTypes = {
        tab: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.node
        ]).isRequired,
        order: React.PropTypes.string.isRequired,
        disable: React.PropTypes.bool,
        isActive: PropTypes.bool
    };

    render() {
        const {classPrefix, className, isActive, children} = this.props;

        const classes = classnames({
            [className]: className,
            [`${classPrefix}-panel`]: true,
            [`${classPrefix}-active`]: isActive
        });

        return (
            <div
                role={"tabpanel"}
                className={classes}
                aria-hidden={!isActive}>
                {children}
            </div>
        );
    }
}

export default TabPane;
