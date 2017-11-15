import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button} from 'antd';

class EveryMomentButton extends Component {
    constructor(props) {
        super(props);
    }
    handleClick() {
        const par = this.props.name;
        this
            .props
            .buttonClick(par);
    }
    render() {
        return (
            <Button
                className={this.props.className}
                onClick={this
                .handleClick
                .bind(this)}
                icon={this.props.type}
                style={{
                    height:40,
                background: 'rgb(29,113,142)',
                border: 'none',
                color: 'white',
                marginLeft:10,
                fontSize: '16px'
            }}>{this.props.name}</Button>
        )
    }
}
EveryMomentButton.propsType = {
    buttonClick: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired
}
export default EveryMomentButton