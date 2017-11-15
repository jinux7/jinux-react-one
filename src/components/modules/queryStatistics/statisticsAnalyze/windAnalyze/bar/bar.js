import React,{ Component } from 'react';
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
import  'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import $ from 'jquery';
let resizeFuc='';
class WindBar extends Component{
    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        const myChart = echarts.init(document.getElementById('wind_main_bar'));
        // 绘制图表
        const colors = ['rgb(49, 211, 218)'];
        myChart.setOption({
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                left:'right',
                data: ['直接访问'],
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
            xAxis:  {
                type: 'category',
                data: ['周一','周二','周三','周四','周五','周六','周日'],
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
                splitNumber: 8,
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
                    name: '直接访问',
                    type: 'bar',
                    stack: '总量',
                    barWidth : 70,
                    itemStyle: {  
                        normal:{
                            color:'rgb(49, 211, 218)' 
                        }
                       
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'insideTop',
                            
                        }

                    },
                   
                    data: [320, 302, 301, 334, 390, 330, 320]
                }
            ]
        })
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
            <div id="wind_main_bar"  style={{height:300}}></div>
        )
    }
}
export default WindBar