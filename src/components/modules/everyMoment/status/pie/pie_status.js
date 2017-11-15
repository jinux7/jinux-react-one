import React, { Component } from 'react';
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
import  'echarts/lib/chart/pie';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import $ from 'jquery';
let resizeFuc='';
class PieStatus extends Component{
    constructor(prop){
        super(prop);
    }
    componentDidMount(){
        const myChart = echarts.init(document.getElementById('status_main_pie'));
        myChart.setOption({
            title : {
                text: '某站点用户访问来源',
                subtext: '纯属虚构',
                x:'center',
                textStyle: {
                    fontSize: 18,
                    fontWeight: 'bolder',
                    color: 'white'          // 主标题文字颜色
                },
                subtextStyle: {
                    color: 'white'          // 副标题文字颜色
                }
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'centre',
                data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎'],
                textStyle: {
                    color: 'white'          // 图例文字颜色
                }
            },
            series : [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {value:335, name:'直接访问'},
                        {value:310, name:'邮件营销'},
                        {value:234, name:'联盟广告'},
                        {value:135, name:'视频广告'},
                        {value:1548, name:'搜索引擎'}
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
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
    render(){
        return(
            <div id='status_main_pie' style={{ width: '100%', height: 500}}></div>
        )
    }
}
export default PieStatus