import React, { Component } from 'react';
import './index.less';
import { Row, Col } from 'antd';

class Left1 extends Component {
    render(){
        return (
            <div id="home_module_left1">
                <div className="module_home_containBox_title">日发电量</div>
                <div className="showNum">
                    <div className="img">
                        <span>402</span>
                        <i>81</i>
                    </div>
                    <h3>万kwh</h3>
                </div>
                <div className="info">
                    <Row>
                        <Col span={6}>
                            <div className="month_generate_electricity module_home_containBox_text">月累发电量</div>
                        </Col>
                        <Col span={6}>
                            <div className="month_generate_electricity_num module_home_containBox_val">4343.16万kwh</div>
                        </Col>
                        <Col span={6}>
                        <div className="year_generate_electricity module_home_containBox_text">月累发电量</div>
                        </Col>
                        <Col span={6}>
                            <div className="year_generate_electricity_num module_home_containBox_val">4343.16万kwh</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={6}>
                            <div className="month_equal_hour module_home_containBox_text">月等效小时</div>
                        </Col>
                        <Col span={6}>
                            <div className="month_equal_hour_num module_home_containBox_val">338.07h</div>
                        </Col>
                        <Col span={6}>
                        <div className="year_equal_hour module_home_containBox_text">年等效小时</div>
                        </Col>
                        <Col span={6}>
                            <div className="year_equal_hour_num module_home_containBox_val">758h</div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export { Left1 }