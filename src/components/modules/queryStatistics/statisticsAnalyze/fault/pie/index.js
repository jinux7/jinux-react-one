import React,{ Component } from 'react';
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
import  'echarts/lib/chart/pie';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import $ from 'jquery';
import './index.less'
let resizeFuc='';
var data = genData(30);
function genData(count) {
    var nameList = [
     '齐', '康', '伍', '余', '元', '卜', '顾', '孟', '平', '黄', '和', '穆', '萧', '尹', '姚', '邵', '湛', '汪', '祁', '毛', '禹', '狄', '米', '贝', '明', '臧', '计', '伏', '成', '戴', '谈', '宋', '茅', '庞', '熊', '纪', '舒', '屈', '项', '祝', '董', '梁', '杜', '阮', '蓝', '闵', '席', '季', '麻', '强', '贾', '路', '娄', '危'
    ];
    var legendData = [];
    var seriesData = [];
    for (var i = 0; i < 20; i++) {
        legendData.push(nameList[i]);
        seriesData.push({
            name: nameList[i],
            value: Math.round(Math.random() * 100000)
        });
    }

    return {
        legendData: legendData,
        seriesData: seriesData
    };

    function makeWord(max, min) {
        var nameLen = Math.ceil(Math.random() * max + min);
        var name = [];
        for (var i = 0; i < nameLen; i++) {
            name.push(nameList[Math.round(Math.random() * nameList.length - 1)]);
        }
        return name.join('');
    }
}

class Pies extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        const myChart = echarts.init(document.getElementById('wrap_pies'));
        // 绘制图表
        const colors = ['rgb(49, 211, 218)'];
        myChart.setOption({
           
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                type: 'scroll',
                orient: 'vertical',
                right: 10,
                top: 20,
                bottom: 20,
                data: data.legendData,
                textStyle: {
                    color: 'rgb(49, 211, 218)'          // 图例文字颜色
                }
            },
            series : [
                {
                    name: '姓名',
                    type: 'pie',
                    radius : '55%',
                    center: ['40%', '50%'],
                    data: data.seriesData,
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
            <div id='wrap_pies' style={{width:'100%',height:'90%'}}>>

            </div>  
        )
    }
} 
export default Pies