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
import { tenMinutesDataQuery_api } from '@/ajax/queryStatistics/dataQuery';

const arr = ['测试1', '测试2', '测试3', '测试4'];
class TenMinutesDataQuery extends Component {
    constructor(...props){
        super(...props);
        this.state = {
            gridData_total: 0,
            gridData_titles: ['序号','时间','1#-定子有功功率','2#-定子有功功率','3#-定子有功功率','1#-瞬时功率','2#-瞬时功率','3#-瞬时功率','1#-环境温度','2#-环境温度','3#-环境温度'],
            gridData_objKey: ['key1','key2','key3','key4','key5','key6','key7','key8','key9','key10'],
            gridData_data: []
        }
    }
    
    componentDidMount(){
        let h = document.documentElement.clientHeight;
        this.refs.tenMinutesDataQuery.style.height = (h - 70)+'px';
        
        tenMinutesDataQuery_api().then((res)=>{
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
            <div id="tenMinutesDataQuery" ref="tenMinutesDataQuery" >
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
                                <Col span={6}>
                                    <DropDown retParams={()=>{}} value={'请选择'} 
                                                name={'模拟量:'} width={150} data={arr} />    
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

export { TenMinutesDataQuery }