import React, { Component } from 'react';
import './index.less';
import { Row, Col } from 'antd';
import ProcessBar from '@/components/public_ui/elements/processBar';

class Left3 extends Component {
    render(){
        return (
            <div id="home_module_left3">
                <div className="module_home_containBox_title">月发电完成率</div>
                <div className="processBar">
                    <ProcessBar percent="0.65" />
                </div>
                <div className="module_home_containBox_title">年发电完成率</div>
                <div className="processBar">
                    <ProcessBar percent="0.32" />
                </div>
            </div>
        );
    }
}

export { Left3 }