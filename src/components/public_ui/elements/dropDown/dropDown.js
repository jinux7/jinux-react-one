import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './dropDown.less'
import {Select} from 'antd';
let Option = Select.Option
class DropDownWarning extends Component {
    constructor(props) {
        super(props);

    }
    valueChange = (value) => {
        let params = {};
        params.key = value['key'].split("_")[0];
        params.value = value['label'];
        this
            .props
            .retParams(params)

    }
    render() {
        return (

            <div className='warp_select ${this.props.className}'>
                <span>{this.props.name}</span>
                <Select
                    defaultValue={{
                    key: '10',
                    label: '请选择'
                }}
                    style={{
                    width: 120,
                    fontSize: 16
                }}
                    labelInValue
                    onChange={this.valueChange}>
                    {this
                        .props
                        .data
                        .map((val, index) => {
                            return (
                                <Option key={index} value={`${this.props.code}_${index}`}>{val}</Option>
                            )

                        })}

                    {/* <Option value="disabled" disabled>Disabled</Option> */}

                </Select>
                {/* <Select defaultValue="lucy" style={{ width: 120 }} allowClear disabled>
            </Select> */}
            </div>
        )
    }
}
DropDownWarning.propTypes = {
    name: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired
}
export default DropDownWarning