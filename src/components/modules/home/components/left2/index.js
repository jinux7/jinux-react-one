import React, { Component } from 'react';
import './index.less';
import { Row, Col } from 'antd';

class Left2 extends Component {
    render(){
        return (
            <div id="home_module_left2">
                <div className="module_home_containBox_title">节能减排</div>
                <div className="info">
                    <Row type="flex">
                        <Col span={8}>
                            <div className="coal">
                                <h5 className="module_home_containBox_val">11.29万吨</h5>
                                <p>
                                    <i className="anticon anticon-sync"></i>
                                    <span className="module_home_containBox_text">节约标准煤</span>
                                </p>
                            </div>
                        </Col>
                        <Col span={8}>
                            <div className="co2">
                                <h5 className="module_home_containBox_val">29.59万吨</h5>
                                <p>
                                    <i className="anticon anticon-rocket"></i>
                                    <span className="module_home_containBox_text">减排CO<sub>2</sub></span>
                                </p>
                            </div>
                        </Col>
                        <Col span={8}>
                            <div className="cs2">
                                <h5 className="module_home_containBox_val">0.26万吨</h5>
                                <p>
                                    <i className="anticon anticon-filter"></i>
                                    <span className="module_home_containBox_text">减排SO<sub>2</sub></span>
                                </p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export { Left2 }