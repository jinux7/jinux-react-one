import React, { Component } from 'react';
import './index.less';
import { Row, Col } from 'antd';

const Mark = (props)=>{
    return (
        <div className="module_home_right1_button">
            { props.name }
        </div>
    )
}
class Right1 extends Component {
    render(){
        return (
            <div id="home_module_right1">
                <div className="inner">
                    <Row>
                        <Col span={12}>
                            <h2 className="module_home_right1_label">35.64MW</h2>
                            <Mark name="实时功率"></Mark>
                        </Col>
                        <Col span={12}>
                            <h2 className="module_home_right1_label">45.83MW</h2>
                            <Mark name="理论功率"></Mark>
                        </Col>
                    </Row>     
                    <Row>
                        <Col span={12}>
                            <h2 className="module_home_right1_label">35.79MW</h2>
                            <Mark name="调度功率"></Mark>
                        </Col>
                        <Col span={12}>
                            <h2 className="module_home_right1_label">5.6s/m</h2>
                            <Mark name="平均风速"></Mark>
                        </Col>
                    </Row>        
                </div>
            </div>
        );
    }
}

export { Right1 }