import React, { Component } from 'react';
import './index.less';
import ContainBox from '@/components/public_ui/elements/containBox';
import { Row, Col, DatePicker, Select, notification } from 'antd';
import moment from 'moment';
import DropDown from '@/components/public_ui/elements/dropDownV2/dropDown.js';
import CommonInput from '@/components/public_ui/elements/dropDown/dropDown.js';
import EveryMomentButton from '@/components/public_ui/elements/button/button';
import Grid from '@/components/public_ui/elements/gridHasPaginationByJinux';
import DateRange from '@/components/public_ui/elements/dateRange/dateRange';
import { closedownRecordQuery_api } from '@/ajax/queryStatistics/dataQuery';

const arr = ['测试1', '测试2', '测试3', '测试4'];
class ClosedownRecordQuery extends Component {
    constructor(...props){
        super(...props);
        this.state = {
            gridData_total: 0,
            gridData_titles: ['序号','风场名称','期次','开始时间','结束时间','设备名称','原始状态','标准状态','伴随报警'],
            gridData_objKey: ['key1','key2','key3','key4','key5','key6','key7','key8'],
            gridData_data: []
        }
    }
    
    componentDidMount(){
        let h = document.documentElement.clientHeight;
        this.refs.closedownRecordQuery.style.height = (h - 70)+'px';
        
        closedownRecordQuery_api().then((res)=>{
            try{
                this.setState({
                    gridData_total: res.total,
                    gridData_data: res.data
                });
            }catch(err){console.log(err);}
        });
    }

    render(){
        return (
            <div id="closedownRecordQuery" ref="closedownRecordQuery" >
                <div className="queryContain_wrap">
                    <ContainBox bright>
                        <div className="queryContain">     
                            <Row className="innerRow">
                                <Col span={6}>
                                    <DropDown retParams={()=>{}} value={'请选择'} 
                                                name={'风场名称:'} width={150} data={arr} />    
                                </Col>
                                <Col span={6}>
                                    <DropDown retParams={()=>{}} value={'请选择'} 
                                                name={'期次:'} width={150} data={arr} />    
                                </Col>
                                <Col span={6}>
                                    <DropDown retParams={()=>{}} value={'请选择'} 
                                                name={'标准状态:'} width={150} data={arr} />    
                                </Col>
                            </Row>
                            <Row className="innerRow">
                                <Col span={10}>
                                    <DateRange 
                                        startValue={'2016-01-01'} endValue={'2017-12-12'}
                                        showTime={()=>{}} />
                                </Col>
                                <Col span={10}></Col>
                                <Col span={4}>
                                    <EveryMomentButton type={'search'} buttonClick={()=>{}} className='cxBtn' name={'查询'} />
                                    <EveryMomentButton type={'reload'} buttonClick={()=>{}} name={'重置'} />
                                </Col>
                            </Row>                                                               
                           
                        </div>
                    </ContainBox>
                </div>
                <div className="tableContain_wrap">
                    <ContainBox bright>
                        
                        <div className="tableContain">
                            <Grid
                                titles={this.state.gridData_titles}
                                total={this.state.gridData_total}
                                objKey={this.state.gridData_objKey}
                                data={ this.state.gridData_data }
                             />
                        </div>
                    </ContainBox> 
                </div> 
            </div>
        );
    }
}

export { ClosedownRecordQuery }