import React, { Component } from 'react';
import './index.less';
import { Row, Col } from 'antd';
import echarts from 'echarts/lib/echarts';
import  'echarts/lib/chart/line';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import $ from 'jquery';


class Middle2 extends Component {
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
            title: {
                textStyle: {
                    color: '#ffffff',
                    fontWeight: 'normal',
                    fontSize: 12
                },
                padding: [0,0,0,30],
                text: ''
            },
            color: ['#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'],
            tooltip : {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            legend: {
                textStyle: {
                    color: '#ffffff'
                },
                data:['理论功率','调动功率','预测功率','实际功率','平均功率']
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            /*grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },*/
            xAxis : {
                    type : 'category',
                    boundaryGap : false,
                    data : ['10-11','10-12','10-13','10-14','10-15','10-16','10-17'],
                    axisLine: {
                        lineStyle: {
                            color: '#fff'
                        }
                    }
                    
            },
            yAxis : [
                {
                    name: '功率(MW)',
                    type : 'value',
                    axisLine: {
                        lineStyle: {
                            color: '#fff'
                        }
                    }
                },
                {
                    name: '风速(m/s)',
                    position: 'right',
                    nameGap: 0,
                    max: 8,
                    type: 'value',
                    nameTextStyle: {
                        padding: [0,0,10,0]
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#ffffff'
                        }
                    }
                }
            ],
            series : [
                {
                    name:'理论功率',
                    type:'line',
                    yAxisIndex: 1,
                    //stack: '总量',
                    //areaStyle: {normal: {}},
                    data:[100, 120, 150, 120, 150, 160,120]
                },
                {
                    name:'调动功率',
                    type:'line',
                   //stack: '总量',
                    //areaStyle: {normal: {}},
                    data:[130, 150, 170, 150, 190, 180, 200]
                },
                {
                    name:'预测功率',
                    type:'line',
                    //stack: '总量',
                    //areaStyle: {normal: {}},
                    data:[150,170, 200, 220, 180, 160, 230]
                },
                {
                    name:'实际功率',
                    type:'line',
                    //stack: '总量',
                    //areaStyle: {normal: {}},
                    data:[180, 220, 250, 200, 180, 300,320]
                },
                {
                    name:'平均功率',
                    type:'line',
                    //stack: '总量',
                    //areaStyle: {normal: {}},
                    data:[220, 260, 320, 270, 300, 350, 330]
                }
            ]
        };
        this.state.chartArea.setOption(option);
    }

    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        const chartArea = echarts.init(document.getElementById('home_module_middle_chartArea'));
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
            <div id="home_module_middle2">
                <div className="module_home_containBox_title">节能减排</div>
                <div id="home_module_middle_chartArea" className="chartArea">
                </div>
            </div>
        );
    }
}

export { Middle2 }