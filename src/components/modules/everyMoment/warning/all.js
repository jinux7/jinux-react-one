import React, {Component} from 'react'
import PropTypes from 'prop-types'
import DropDownWarning from '@/components/public_ui/elements/dropDown/dropDown'
import ContainBox from '@/components/public_ui/elements/containBox'
import EveryMomentButton from '@/components/public_ui/elements/button/button'
import {Button} from 'antd';
import './all.less'
import TableWarning from './table/table_warning'
import SwitchWarning from './switch/switch_warning'
import Grid from '@/components/public_ui/elements/gridHasPaginationByJinux';
import { getPaginationTest } from '@/ajax/index.js';
let arr = ['测试1', '测试2', '测试3', '测试4'];
let arr1 = ['测试1', '测试2', '测试3', '测试4', '测试5'];
const titles = ['序号','风场名称','开始时间','结束时间','设备名称','报警ID','报警中文描述','报警英文描述','报警模块','设备类型','报警等级','报警代码','报警类型','确认时间','确认用户','状态','操作'];
const singleData = {'key2':'双辽风场','key3':'2017-9-14 11:13','key4':'2017-9-18 14:09','key5':'33#','key6':'E076','key7':'0度风向标','key8':'hello','key9':'变流系统','key10':'歌美飒G58-850风机','key11':'严重','key12':'0','key13':'error','key14':'2017-9-18 10:47','key15':'SuperMan','key16':'已确认','key17':'对号'};
let dataLi = [], index =0;
while(index < 10){
    dataLi.push(singleData);
    index++;
}
class everyMomentWarning extends Component {
    constructor(props) {
        super(props);
        this.state = {};

       
        this.total = 0;
        this.totalData = [];
        this.state= {
            selectDefaultVal: '请选择', //下拉菜单提示语
            style: {
                selectWidth: 150
            },
            selectFarmName: '请选择', //风场名称
            selectMachineName: '请选择', //设备名称
            selectMachineType: '请选择', //设备类型
            warningLevel: '请选择', //报警等级
            warningModule: '请选择', //报警模块
            warningType: '请选择', //报警类型
            confirmState: '请选择', //确认状态
            continueTime: '', //持续时间
            //grid数据
            gridData_total: 0,  
            gridData_pageSize: 10,
            gridData_current: 1,
            gridData_objKey: ['key2','key3','key4','key5','key6','key7','key8','key9','key10','key11','key12','key13','key14','key15','key16','key17'],
            gridData_data: []            
        }
        this.state.select = {
            tt: '风场名称',
            arr: ['测试1', '测试2', '测试3', '测试4']
        };
    }
    componentWillMount(){
        getPaginationTest().then((res)=>{
            if(!res) return;
            this.totalData = res.data; 
            this.total = res.total;
            this.setState({           
                gridData_total: this.total,
                gridData_data: this.totalData          
            });
        });
    }
    handleClick(par) {
        if (par == '刷新') {
            window.location.href = window.location.href;
        }
    }
    receivePar = (par) => {
        console.log(par);

    }
    render() {
        return (
            <div id='wrap_warning_all'>
                <div style={{
                    marginTop: 20
                }}>
                    <ContainBox >

                        <div id='wrap_warning_top'>
                            <div
                                className='wrap_select'
                                onClick={() => {
                                console.log(this)
                            }}>
                                <div>
                                    <DropDownWarning
                                        retParams={this.receivePar}
                                        code={'a'}
                                        name={this.state.select.tt}
                                        data={this.state.select.arr}/>
                                </div>
                                <div>
                                    <DropDownWarning
                                        retParams={this.receivePar}
                                        code={'b'}
                                        name={'报警模块'}
                                        data={arr}/>
                                </div>
                            </div>
                            <div className='wrap_select'>
                                <div>
                                    <DropDownWarning
                                        retParams={this.receivePar}
                                        code={'c'}
                                        name={'设备名称'}
                                        data={arr}/>
                                </div>
                                <div>
                                    <DropDownWarning
                                        retParams={this.receivePar}
                                        code={'d'}
                                        name={'报警类型'}
                                        data={arr}/>
                                </div>
                            </div>
                            <div className='wrap_select'>
                                <div>
                                    <DropDownWarning
                                        retParams={this.receivePar}
                                        code={'e'}
                                        name={'设备类型'}
                                        data={arr}/>
                                </div>
                                <div>
                                    <DropDownWarning
                                        retParams={this.receivePar}
                                        code={'f'}
                                        name={'确认状态'}
                                        data={arr}/>
                                </div>
                            </div>
                            <div className='wrap_select'>
                                <div>
                                    <DropDownWarning
                                        retParams={this.receivePar}
                                        code={'g'}
                                        name={'报警等级'}
                                        data={arr}/>
                                </div>
                                <div
                                    style={{
                                    marginLeft: 160
                                }}>
                                <EveryMomentButton type={'search'} buttonClick={(val)=>{ console.log(val)}} name={'查询'} />
                                    
                               <EveryMomentButton type={'reload'} buttonClick={(val)=>{ console.log(val)}} name={'重置'} />
                                </div>
                            </div>
                        </div>
                    </ContainBox>
                </div>
                <div style={{
                    marginTop: 80
                }}>
                    <ContainBox >
                        <div id='wrap_table'>
                            <div className="wrap_button">
                                <Button
                                    onClick={this
                                    .handleClick
                                    .bind(this, '确认')}
                                    style={{
                                        height:40,
                                    background: 'rgb(29,113,142)',
                                    border: 'none',
                                    color: 'white'
                                }}>全部确认</Button>
                            </div>
                            <div style={{padding:10}}>
                            <SwitchWarning/>
                            </div>
                            
                            <Grid
                            titles={titles}
                            total={this.total}
                            objKey={this.state.gridData_objKey}
                            data={ this.state.gridData_data }
                         />
                        </div>

                    </ContainBox>
                </div>

            </div>
        )
    }
}
export default everyMomentWarning