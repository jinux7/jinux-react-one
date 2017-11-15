import React, { Component } from 'react';
import './index.less';
import { Row, Col } from 'antd';
import echarts from 'echarts/lib/echarts';
import  'echarts/lib/chart/pictorialBar';
import $ from 'jquery';

class Left4 extends Component {
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
        var category = ['9/10','9/11','9/12','9/13','9/14','9/15','9/16',];
        var dottedBase = +new Date();
        var lineData = [150,250,250,200,250,350,200];
        var barData = [100,200,200,150,200,300,150];
        var option = {};
        // option
        option = {
            title: {
                text: '',
                textStyle: {
                    fontSize: 12,
                    fontWeight: 'normal',
                    color: '#ffffff'          // 主标题文字颜色
                },        
            },
            backgroundColor: '',
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            /*legend: {
                data: ['line', 'bar'],
                textStyle: {
                    color: '#ccc'
                }
            },*/
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                data: category,
                axisLine: {
                    lineStyle: {
                        color: '#ffffff'
                    }
                }
            },
            yAxis: {
                name: '发电量(万kwh)',
                splitLine: {show: false},
                axisLine: {
                    lineStyle: {
                        color: '#ffffff'
                    }
                },
                nameTextStyle: {
                    padding: [0,0,0,20]
                }
            },
            series: [{
                name: 'line',
                type: 'line',
                smooth: true,
                showAllSymbol: true,
                symbol: 'emptyCircle',
                symbolSize: 15,
                data: lineData
            }, {
                name: 'bar',
                type: 'bar',
                barWidth: 10,
                itemStyle: {
                    normal: {
                        barBorderRadius: 5,
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#14c8d4'},
                                {offset: 1, color: '#43eec6'}
                            ]
                        )
                    }
                },
                data: barData
            }, {
                name: 'line',
                type: 'bar',
                barGap: '-100%',
                barWidth: 10,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: 'rgba(20,200,212,0.5)'},
                                {offset: 0.2, color: 'rgba(20,200,212,0.2)'},
                                {offset: 1, color: 'rgba(20,200,212,0)'}
                            ]
                        )
                    }
                },
                z: -12,
                data: lineData
            }, {
                name: 'dotted',
                type: 'pictorialBar',
                symbol: 'rect',
                itemStyle: {
                    normal: {
                        color: '#0f375f'
                    }
                },
                symbolRepeat: true,
                symbolSize: [12, 4],
                symbolMargin: 1,
                z: -10,
                data: lineData
            }]
        };
        this.state.chartArea.setOption(option);
    }

    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        const chartArea = echarts.init(document.getElementById('home_module_left4_chartArea'));
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
            <div id="home_module_left4">
                <div className="module_home_containBox_title">七日发电量统计</div>
                <div id="home_module_left4_chartArea" className="chartArea">
                    
                </div>
            </div>
        );
    }
}

export { Left4 }