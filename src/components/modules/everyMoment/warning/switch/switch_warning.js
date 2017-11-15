import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Radio, Button} from 'antd';
import './switch_warning.less'
const RadioGroup = Radio.Group;
class SwitchWarning extends Component {
  constructor(props) {
    super(props)

  }
  handleClick(par) {
    console.log(par);
  }
  handleToggle = (e) => {
    console.log(e.target.value);
    // return ((enable) => {   console.log(prop);   this.setState(this.state.owner,
    // () => {     this.state.owner[prop] = enable   }); })

  }
  render() {
    let state = this.state;
    return (
      <div id='wrap_switch_warning'>

        <div
          className="components-table-demo-control-bar"
          style={{
          textAlign: 'center'
        }}>
          <RadioGroup onChange={this.handleToggle}>
            <Radio value={'数据刷新'}>数据刷新</Radio>
            <Radio value={'停止刷新'}>停止刷新</Radio>

          </RadioGroup>
        </div>
      </div>

    )
  }

}
export default SwitchWarning