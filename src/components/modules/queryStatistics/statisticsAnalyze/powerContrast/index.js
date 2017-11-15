// 电量统计对比
import React, {Component} from 'react';
import ContainBox from '@/components/public_ui/elements/containBox';
import DateRange from '@/components/public_ui/elements/dateRange/dateRange';
import CommonInput from '@/components/public_ui/elements/search/input';
import EveryMomentButton from '@/components/public_ui/elements/button/button';
import PieStatus from '@/components/modules/everyMoment/status/pie/pie_status';
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/gauge';
import 'echarts/lib/chart/pie';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import './index.less';
import WindBar from '../windAnalyze/bar/bar'
class PowerContrast extends Component {
    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        const myChart = echarts.init(document.getElementById('wrap_contrast_chart'));
        // 绘制图表
        const colors = ['#5793f3', '#d14a61', '#675bba'];
        myChart.setOption({

            ooltip: {
                formatter: "{a} <br/>{b} : {c}%"
            },
            toolbox: {
                feature: {
                    restore: {},
                    saveAsImage: {}
                }
            },
            series: [
                {
                    name: '业务指标',
                    type: 'gauge',
                    detail: {
                        formatter: '{value}%'
                    },
                    data: [
                        {
                            value: 50,
                            name: '完成率'
                        }
                    ],
                    detail: {
                        textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            color: 'white',
                            fontSize: 12
                        }
                    },
                    title: {
                        textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            fontWeight: 'bolder',
                            fontSize: 12,
                            fontStyle: 'italic',
                            color: 'white'
                        }
                    }

                }
            ]
        });
               // 基于准备好的dom，初始化echarts实例
               const myChart_1 = echarts.init(document.getElementById('wrap_pie_chart'));
               // 绘制图表
              
               myChart_1.setOption({
       
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
               });


    }
    render() {
        return (
            <div id='wrap_powerContrast'>
                <div>
                <ContainBox>
                    <div className='head_party'>
                        <DateRange
                            showTime
                            ={(value) => {
                            console.log(value)
                        }}/>
                    </div>
                    <div className='head_party'>
                        <CommonInput
                            name={'单位名称'}
                            showValue={(value) => {
                            console.log(value)
                        }}/>>
                    </div>
                    <div
                        className='head_party'
                        style={{
                        float: 'right'
                    }}>
                        <EveryMomentButton name={'查询'} type={'search'}/>
                    </div>
                </ContainBox>
                </div>
               <div >
               <ContainBox>
                    <div style={{
                        minWidth:1440,
                        overflow: 'hidden',
                        }}>
                        <div className='chart_title_1'>沈阳分公司月发电量完成率</div>
                        <div id='wrap_contrast_chart'></div>
                        <div className='wrap_table theme_table_content_color theme_normal_font_size'>
                            <div>
                                <div className='theme_table_head_color theme_big_font_size '>指标</div>
                                <div className='odd'>1</div>
                                <div>1</div>
                                <div className='odd'>1</div>
                            </div>
                            <div>
                                <div className='theme_table_head_color theme_big_font_size'>数值</div>
                                <div className='odd'>1</div>
                                <div>1</div>
                                <div className='odd'>1</div>
                            </div>
                        </div>
                        <div id='wrap_pie_chart'>
                       
                        </div>
                        <div className='wrap_table_1 theme_table_content_color theme_normal_font_size'>
                            <div>
                                <div className='theme_table_head_color theme_big_font_size '>指标</div>
                                <div className='odd'>1</div>
                                <div>1</div>
                                <div className='odd'>1</div>
                            </div>
                            <div>
                                <div className='theme_table_head_color theme_big_font_size'>数值</div>
                                <div className='odd'>1</div>
                                <div>1</div>
                                <div className='odd'>1</div>
                            </div>
                            <div>
                                <div className='theme_table_head_color theme_big_font_size'>数值</div>
                                <div className='odd'>1</div>
                                <div>1</div>
                                <div className='odd'>1</div>
                            </div>
                        </div>
                    </div>
                    <div className='wrap_bar'>
                    <WindBar/>>
                    </div>
                </ContainBox>
               </div>
           
            </div>)
    }
}
export default PowerContrast