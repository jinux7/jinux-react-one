import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './dropDown.less'
import {Select} from 'antd';
let Option = Select.Option
class DropDownWarning extends Component {
    constructor(props) {
        super(props);

    }
    valueChange(val){
        if(this.props.retParams){
            this.props.retParams(val);
        }
    }

    render() {
        return (

            <div className={'warp_select_v2 '+ (this.props.className || '')}>
                <span>{this.props.name}</span>
                <Select
                    style={{width: this.props.width || 110, fontSize: 16}}
                    onChange={this.valueChange.bind(this)} value={this.props.value}>
                    {
                        this.props.data.map((val, index) => {
                            return (
                                <Option key={index} value={val}>{val}</Option>
                            )
                        })}
                </Select>
           
            </div>
        )
    }
}
DropDownWarning.propTypes = {
    name: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired
}
export default DropDownWarning