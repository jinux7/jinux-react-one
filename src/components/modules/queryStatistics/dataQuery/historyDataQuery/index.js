import React, { Component } from 'react';
import './index.less';
import ContainBox from '@/components/public_ui/elements/containBox';
import { Row, Col, DatePicker, Select, notification } from 'antd';
import moment from 'moment';
import DropDown from '@/components/public_ui/elements/dropDownV2/dropDown.js';
import EveryMomentButton from '@/components/public_ui/elements/button/button';
import Grid from '@/components/public_ui/elements/gridHasPaginationByJinux';
import DateRange from '@/components/public_ui/elements/dateRange/dateRange';
import { historyDataQuery_api } from '@/ajax/queryStatistics/dataQuery';

const arr = ['测试1', '测试2', '测试3', '测试4'];
class HistoryDataQuery extends Component {
    constructor(...props){
        super(...props);
        this.state = {
            gridData_total: 0,
            gridData_titles: ['序号','时间','1#-发电机滑环温度','2#-发电机滑环温度','3#-发电机滑环温度','1#-发电机额定无功功率','2#-发电机额定无功功率','3#-发电机额定无功功率',
            '1#-手动时间(检修/维护时间)','2#-手动时间(检修/维护时间)','3#-手动时间(检修/维护时间)','1#-齿轮油温报警值','2#-齿轮油温报警值','3#-齿轮油温报警值'],
            gridData_objKey: ['key1','key2','key3','key4','key5','key6','key7','key8','key9','key10','key11','key12','key13'],
            gridData_data: []
        }
    }
    
    componentDidMount(){
        let h = document.documentElement.clientHeight;
        this.refs.historyDataQuery.style.height = (h - 70)+'px';
        
        historyDataQuery_api().then((res)=>{
            try{
                this.setState({
                    gridData_total: res.total,
                    gridData_data: res.data
                });
            }catch(err){
                console.log(err);
            }
        });
    }

    render(){
        return (
            <div id="historyDataQuery" ref="historyDataQuery" >
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
                                                name={'设备名称:'} width={150} data={arr} />    
                                </Col>
                                <Col span={10}>
                                    <DateRange 
                                        startValue={'2016-01-01'} endValue={'2017-12-12'}
                                        showTime={()=>{}} />
                                </Col>
                            </Row>
                            <Row className="innerRow">
                                <Col span={6}>
                                    <DropDown retParams={()=>{}} value={'请选择'} 
                                                name={'　模拟量:'} width={150} data={arr} />    
                                </Col>
                                <Col span={6}>
                                    <DropDown retParams={()=>{}} value={'请选择'} 
                                                name={'　开关量:'} width={150} data={arr} />    
                                </Col>
                                <Col span={6}>
                                    <DropDown retParams={()=>{}} value={'请选择'} 
                                                name={'　模拟量:'} width={150} data={arr} />    
                                </Col>
                                <Col span={4} push={2}>
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

export { HistoryDataQuery }