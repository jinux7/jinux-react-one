import React, { Component } from 'react';
import './index.less';
import { Row, Col } from 'antd';
import echarts from 'echarts/lib/echarts';
import $ from 'jquery';

const ShowInfo = (props)=>{
    return (
        <div className="ShowInfo">
            <strong>
                <i style={{background: props.color||'#ccc'}}></i>
            </strong>
            <b>{props.name}</b>
            <span>{props.val}</span>
            <em>{props.percent}</em>
        </div>       
    );
}

class Right2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            chartArea: null
        }
        this.rePaint = this.rePaint.bind(this); 
    }

    rePaint(){
        this.state.chartArea.resize();
    }
    
    paint(){
         // 绘制图表
        // Generate data
        var option = {};
        // option
        option = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            /*legend: {
                orient: 'vertical',
                x: 'left',
                data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
            },*/
            series: [
                {
                    name:'访问来源',
                    type:'pie',
                    radius: ['70%', '90%'],
                    avoidLabelOverlap: false,
                    color: ['#05D064','#B2620D','#666666','#952523','#9F9B10','#3D7FA3','#763F90','#999999'],
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[
                        {value:210, name:'运行'},
                        {value:0, name:'待机'},
                        {value:3, name:'停机'},
                        {value:15, name:'故障'},
                        {value:3, name:'检修'},
                        {value:9, name:'中断'},
                        {value:30, name:'限运'},
                        {value:30, name:'限停'}
                    ]
                }
            ]
        };
        
        this.state.chartArea.setOption(option);
    }

    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        const chartArea = echarts.init(document.getElementById('home_module_right2_chartArea'));
        this.setState({ chartArea },function(){
            this.paint();
            $(window).on('resize', this.rePaint);
        });
    }
    componentWillUnmount(){
        $(window).off('resize',this.rePaint);
    }
    render(){
        return (
            <div id="home_module_right2">
                <div className="module_home_containBox_title">风电机组状态统计</div>
                <div id="home_module_right2_chartArea" className="chartArea">
                </div>
                <div className="info">
                    <Row gutter={20}>
                        <Col span={12}>
                            <div className="info_title">
                                <strong className="module_home_right2_subTitle">总装机容量</strong>
                                <span className="module_home_right2_subVal">99MW</span>
                            </div>
                            <ShowInfo color="#05D064" name="运行" val="210" percent="70%" />
                            <ShowInfo color="#666666" name="停机" val="3" percent="1%" />
                            <ShowInfo color="#9F9B10" name="检修" val="3" percent="1%" />
                            <ShowInfo color="#763F90" name="限运" val="30" percent="10%" />
                        </Col>
                        <Col span={12}>
                            <div className="info_title">
                                <strong className="module_home_right2_subTitle">总装机台数</strong>
                                <span className="module_home_right2_subVal">300台</span>
                            </div>
                            <ShowInfo color="#B2620D" name="待机" val="0" percent="0%" />
                            <ShowInfo color="#952523" name="故障" val="15" percent="5%" />
                            <ShowInfo color="#3D7FA3" name="中断" val="9" percent="3%" />
                            <ShowInfo color="#999999" name="限停" val="30" percent="10%" />
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export { Right2 }