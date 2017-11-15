import React, {Component} from 'react';
import ContainBox from '@/components/public_ui/elements/containBox';
import DateRange from '@/components/public_ui/elements/dateRange/dateRange';
import './index.less';
import Pies from './pie';
import CommonInput from '@/components/public_ui/elements/search/input';
import EveryMomentButton from '@/components/public_ui/elements/button/button';
import DropDownWarning from '@/components/public_ui/elements/dropDown/dropDown'
import WindBar from '../windAnalyze/bar/bar'
const monthArr=['一月','二月','三月','四月','五月','六月','七月','八月','九月','十一月','十二月'];
const times=['一次','俩次','三次','四次','五次','六次','八次','九次','十次','十一次','十二次'];
class FaultStatistics extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.state.select = {
            tt: '风场名称',
            arr: ['测试1', '测试2', '测试3', '测试4']
        };
    }
    receivePar = (par) => {
        console.log(par)
    }
    render() {
        const table=monthArr.map((val,index)=>{
               return(
                  <div key={index}>
                      <div className='table_title theme_big_font_size'>{val}</div>
                      <div className='table_content  theme_table_content_color'>{times[index]}</div>
                  </div>   
               )
        })
        return (
            <div className='wrap_fault'>
                <ContainBox>
                    <div className='head_party'>
                        <DateRange
                            showTime
                            ={(value) => {
                            console.log(value)
                        }}/>
                    </div>
                    <div className='head_party'>
                        <div>
                            <DropDownWarning
                                retParams={this.receivePar}
                                code={'c'}
                                name={'场站名称'}
                                data={this.state.select.arr}/>
                        </div>
                    </div>
                    <div
                        className='head_party'
                        style={{
                        width: 200,
                        float: 'right'
                    }}>
                        <EveryMomentButton name={'查询'} type={'search'}/>
                        <div
                            style={{
                            display: 'inlineBlock',
                            float: 'right'
                        }}>
                            <EveryMomentButton name={'分析建议'} type={''}/>
                        </div>

                    </div>
                </ContainBox>
                <div className='wrap_charts'>
                    <ContainBox>
                        <div className='wrap_party'>
                            <div className='party'>
                                <div className='title theme_big_font_size'>浑南风电场机组故障组成</div>
                                <Pies/>
                            </div>
                            <div className='party'>
                                <div className='title theme_big_font_size'>浑南风电场机组故障按月分部</div>
                                <WindBar/>
                                <div className='wrap_table'>
                                    {table}
                                </div>
                            </div>
                        </div>

                    </ContainBox>
                </div>

            </div>
        )
    }
}
export default FaultStatistics