import React, {Component} from 'react';
import PowerTable from './table/table_power';
import CurvePower from './curve/curve_power';
import BarPower from './bar/bar_power';
import './all.less'
import { Row, Col } from 'antd';
class everyMomentPower extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id='wrap_power_all'>
                <div className='wrap_power_curve theme_border_color' style={{width:'45%'}}>
                    <CurvePower/>
                </div>
                <div className='wrap_power_bar' style={{width:'45%'}}>
                    <BarPower/>
                </div>

                <div className='wrap_power_table'>
                    <PowerTable data={[0]}/>
                </div>
            </div>
            
        )
    }
}
export default everyMomentPower