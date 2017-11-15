import React, { Component } from 'react';
import './index.less';
import { Row, Col } from 'antd';
import echarts from 'echarts/lib/echarts';
import  'echarts/lib/chart/scatter';
import  'echarts/lib/chart/effectScatter';
import  'echarts/map/js/china';
import  'echarts/map/js/province/liaoning.js';
import { Button } from 'antd';
import $ from 'jquery';


class Middle1 extends Component {
    constructor(props){
        super(props);
        this.chinaOption = {
            backgroundColor: 'transparent',
            /*title: {
                text: '全国主要城市空气质量',
                subtext: 'data from PM25.in',
                sublink: 'http://www.pm25.in',
                left: 'center',
                textStyle: {
                    color: '#fff'
                }
            },*/
            tooltip : {
                trigger: 'item'
            },
            /*legend: {
                orient: 'vertical',
                y: 'bottom',
                x:'right',
                data:['pm2.5'],
                textStyle: {
                    color: '#fff'
                }
            },*/
            geo: {
                map: 'china',
                label: {
                    emphasis: {
                        show: false
                    }
                },
                roam: true,
                itemStyle: {
                    normal: {
                        areaColor: 'rgba(0,92,126,.2)',
                        borderColor: '#fff'
                    },
                    emphasis: {
                        areaColor: '#005C7E'
                    }
                },
                silent: true
            },
            series : [
                /*{
                    name: 'pm2.5',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    data: convertData(data),
                    symbolSize: function (val) {
                        return val[2] / 10;
                    },
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'right',
                            show: false
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#ddb926'
                        }
                    }
                },*/
                {
                    name: '风场',
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    data: [{"name":"黑龙江","value":[125.03,46.58,279]},{"name":"湖北","value":[114.31,30.52,273]},{"name":"安徽","value":[117.27,31.86,229]},{"name":"河南","value":[115.480656,35.23375,194]},{"name":"河北","value":[116.7,39.53,193]},{"name":"浙江","value":[118.88,28.97,177]}],
                    symbol: 'circle', //此处可以设置图片
                    symbolSize: function (val) {
                        return val[2] / 10;
                    },
                    showEffectOn: 'render',
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    hoverAnimation: true,
                    label: {
                        normal: {
                            color: '#fff',
                            formatter: '{b}',
                            position: 'right',
                            show: true
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#00CE53',
                            shadowBlur: 10,
                            shadowColor: '#333'
                        }
                    },
                    zlevel: 1,
                    tooltip: {
                     formatter: '{b}'
                    }
                }
            ]
        };
        this.provinceOption = {
            backgroundColor: 'transparent',
            tooltip : {
                trigger: 'item'
            },
            geo: {
                map: '辽宁',
                label: {
                    emphasis: {
                        show: false
                    }
                },
                roam: true,
                itemStyle: {
                    normal: {
                        areaColor: '#005C7E',
                        borderColor: '#fff'
                    },
                    emphasis: {
                        areaColor: '#005C7E'
                    }
                },
                silent: true
            },
            series : [
                {
                    name: '风场',
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    //data: [{"name":"大庆","value":[125.03,46.58,279]},{"name":"武汉","value":[114.31,30.52,273]},{"name":"合肥","value":[117.27,31.86,229]},{"name":"菏泽","value":[115.480656,35.23375,194]},{"name":"廊坊","value":[116.7,39.53,193]},{"name":"衢州","value":[118.88,28.97,177]}],
                    symbol: 'circle', //此处可以设置图片
                    symbolSize: function (val) {
                        return val[2] / 10;
                    },
                    showEffectOn: 'render',
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    hoverAnimation: true,
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'right',
                            show: true
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#fff',
                            shadowBlur: 10,
                            shadowColor: '#333'
                        }
                    },
                    zlevel: 1,
                    tooltip: {
                     formatter: '{b}'
                    }
                }
            ]
        };
        this.state = {
            showBtn:false,
            chartArea: null
        }
        this.rePaint = this.rePaint.bind(this); 
    }

    rePaint(){
        this.state.chartArea.resize();
    }
    
    paint(area){
         // 绘制图表    
        this.state.chartArea.clear();
        this.state.chartArea.setOption(area);
    }

    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        const chartArea = echarts.init(document.getElementById('home_module_middle1_chartArea'));
        this.setState({ chartArea },function(){
            this.paint(this.chinaOption);
            let _this = this;
            $(window).on('resize', this.rePaint);
            this.state.chartArea.on('click',function(ev){
                _this.paint(_this.provinceOption);
                _this.setState({
                    showBtn: !_this.state.showBtn
                });
            });
        });
    }
    componentWillUnmount(){
        $(window).off('resize',this.rePaint);
    }
    render(){
        return (
            <div id="home_module_middle1">
                <div id="home_module_middle1_chartArea" className="chartArea">
                </div>
                <div className="button" style={{display:this.state.showBtn?'block':'none'}} onClick={()=>{
                    this.paint(this.chinaOption);
                    this.setState({
                        showBtn: !this.state.showBtn
                    });
                }}>
                    <Button>返回</Button>
                </div>
            </div>
        );
    }
}

export { Middle1 }