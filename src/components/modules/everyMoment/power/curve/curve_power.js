import React, { Component } from 'react';

// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
import  'echarts/lib/chart/line';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import './curver_power.less';
import $ from 'jquery';
let resizeFuc='';
class CurvePower extends Component {
    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        const myChart = echarts.init(document.getElementById('power_main_curve'));
        // 绘制图表
        const colors = ['#5793f3', '#d14a61', '#675bba'];
        myChart.setOption({
            title: {
                text: '风速时时功率曲线',
                subtext:'功率(kw)',
                x: 'center',                 // 水平安放位置，默认为左对齐，可选为：
                // 'center' | 'left' | 'right'
        
                textStyle: {
                    fontSize: 18,
                    fontWeight: 'bolder',
                   
                    color: 'rgb(190,220,235)'          // 主标题文字颜色
                },
                subtextStyle: {
                    color: 'rgb(49, 211, 218)'          // 副标题文字颜色
                }
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                left:'right',
                data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎'],
                textStyle: {
                    color: 'white'          // 图例文字颜色
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['周一','周二','周三','周四','周五'],
                axisLine: {            // 坐标轴线
                    show: true,        // 默认显示，属性show控制显示与否
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: 'rgb(49, 211, 218)',
                        width: 2,
                        type: 'solid'
                    }
                },
            },
            yAxis: {
                type: 'value',
                splitNumber: 4,
                axisLine: {            // 坐标轴线
                    show: false,        // 默认显示，属性show控制显示与否
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: '#48b',
                        width: 2,
                        type: 'solid'
                    }
                }
            },

            
            series: [
                {
                    name:'邮件营销',
                    type:'line',
                    stack: '总量',
                    data:[120, 132, 101, 134]
                },
                {
                    name:'联盟广告',
                    type:'line',
                    stack: '总量',
                    data:[220, 182, 191, 234]
                },
                {
                    name:'视频广告',
                    type:'line',
                    stack: '总量',
                    data:[150, 232, 201, 154]
                },
                {
                    name:'直接访问',
                    type:'line',
                    stack: '总量',
                    data:[320, 332, 301, 334]
                },
                {
                    name:'搜索引擎',
                    type:'line',
                    stack: '总量',
                    data:[820, 932, 901, 934]
                }
            ]
           
        });
        resizeFuc=()=>{
            //重置容器高宽
            myChart.resize();           
            };
            $(window).on('resize',resizeFuc);
    }
    componentWillUnmount(){
        $(window).off('resize',resizeFuc);
    }
    render() {
        return (
            <div id="power_main_curve"></div>
        );
    }
}

export default CurvePower;