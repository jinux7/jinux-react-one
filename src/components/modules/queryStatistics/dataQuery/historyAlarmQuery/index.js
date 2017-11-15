//历史告警查询页面
import React,{ Component } from 'react';
import ContainBox from '@/components/public_ui/elements/containBox';
import './index.less';
import { Row, Col, DatePicker, Select, notification } from 'antd';
import moment from 'moment';
import DropDown from '@/components/public_ui/elements/dropDownV2/dropDown.js';
import CommonInput from '@/components/public_ui/elements/dropDown/dropDown.js';
import EveryMomentButton from '@/components/public_ui/elements/button/button';
import Grid from '@/components/public_ui/elements/gridHasPaginationByJinux';
import DateRange from '@/components/public_ui/elements/dateRange/dateRange';
import { getPaginationTest } from '@/ajax/index.js';
import $ from 'jquery';
import alarmBell_red from '@/assets/images/alarmBell_red.png';
import checkPass_blue from '@/assets/images/checkPass_blue.png';

const titles = ['序号','风场名称','开始时间','结束时间','设备名称','报警ID','报警中文描述','报警英文描述','报警模块','设备类型','报警等级','报警代码','报警类型','确认时间','确认用户','状态','操作'];

const InputGroup = (props)=> {
    return (
        <div className="inputGroup" refname={props.ref}>
            <label className="hint" htmlFor="">{props.name}:</label>
            <input type="text" />
        </div>  
    );
}

const SelectGroup = (props)=>{
    return (
        <div className="selectGroup" >
            <label htmlFor="">{props.name}:</label>
            <DropDown {...props} />
        </div>  
    );
}

const arr = ['测试1', '测试2', '测试3', '测试4'];

class HistoryAlarmQuery extends Component {
    constructor(...props){
        super(...props);
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
    }

    componentDidMount(){
		let h = document.documentElement.clientHeight;
		this.refs.historyAlarmQuery_module.style.height = (h - 70)+'px';
    }
    
    selectFarmName(val){ //风场名称选择回调函数
        this.setState({
            selectFarmName: val
        });
    }

    selectMachineName(val){ //设备名称选择回调函数
        this.setState({
            selectMachineName: val
        });
    }

    selectMachineType(val){ //设备类型选择回调函数
        this.setState({
            selectMachineType: val
        });
    }

    warningLevel(val){ //报警等级选择回调函数
        this.setState({
            warningLevel: val
        });
    }

    warningModule(val){ //报警模块选择回调函数
        this.setState({
            warningModule: val
        });
    }

    warningType(val){ //报警类型选择回调函数
        this.setState({
            warningType: val
        });
    }

    confirmState(val){ //确认状态选择回调函数
        this.setState({
            confirmState: val
        });
    }

    dateChange(ev){
        let d = new Date();
        d.setTime(ev[0]._d);
    }

    queryData(){ //查询按钮点击回调函数
        notification.config({
            placement: 'topLeft'
          });
        notification.open({
            message: '查询所需要的参数值:',
            description: `风场名称 -> ${this.state.selectFarmName==="请选择"?"":this.state.selectFarmName}|
            设备名称 -> ${this.state.selectMachineName==="请选择"?"":this.state.selectMachineName}|
            设备类型 -> ${this.state.selectMachineType==="请选择"?"":this.state.selectMachineType}|
            报警等级 -> ${this.state.warningLevel==="请选择"?"":this.state.warningLevel}|
            报警模块 -> ${this.state.warningModule==="请选择"?"":this.state.warningModule}|
            报警类型 -> ${this.state.warningType==="请选择"?"":this.state.warningType}|
            确认状态 -> ${this.state.confirmState==="请选择"?"":this.state.confirmState}|
            持续时间 -> ${this.refs.continueTimeRef.value}`,
        });

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
    reset(){ //重置按钮点击回调函数
        this.setState({
            selectFarmName: '请选择', //风场名称
            selectMachineName: '请选择', //设备名称
            selectMachineType: '请选择', //设备类型
            warningLevel: '请选择', //报警等级
            warningModule: '请选择', //报警模块
            warningType: '请选择', //报警类型
            confirmState: '请选择', //确认状态
        });
        this.refs.continueTimeRef.value = '';
    }

    showTime(val){
        console.log(val);
    }

    componentDidMount(){
        let h = document.documentElement.clientHeight;
		this.refs.historyAlarmQuery_module.style.height = (h - 70)+'px';
        $('.cxBtn').trigger('click');
    }

    render(){
        return (
            <div id="historyAlarmQuery" ref="historyAlarmQuery_module">
                <div className="queryContain_wrap">
                    <ContainBox bright>
                        <div className="queryContain">
                                
                            <Row className="innerRow">
                                <Col span={4}>
                                    <DropDown retParams={this.selectFarmName.bind(this)} value={this.state.selectFarmName} 
                                                name={'风场名称:'} width={this.state.style.selectWidth} data={arr} />    
                                </Col>
                                <Col span={4}>
                                    <DropDown retParams={this.selectMachineName.bind(this)} value={this.state.selectMachineName} 
                                                name={'设备名称:'} width={this.state.style.selectWidth} data={arr} /> 
                                </Col>
                                <Col span={4}>
                                    <DropDown retParams={this.selectMachineType.bind(this)} value={this.state.selectMachineType} 
                                                name={'设备类型:'} width={this.state.style.selectWidth} data={arr} />
                                </Col>
                                <Col span={4}>
                                    <DropDown retParams={this.warningLevel.bind(this)} value={this.state.warningLevel} 
                                                name={'报警等级:'} width={this.state.style.selectWidth} data={arr} />
                                </Col>
                                <Col span={8}>
                                <DateRange 
                                        startValue={'2016-01-01'} endValue={'2017-12-12'}
                                        showTime={this.showTime.bind(this)} />
                                </Col>
                            </Row>
                            <Row className="innerRow">
                                <Col span={4}>
                                    <DropDown retParams={this.warningModule.bind(this)} value={this.state.warningModule} 
                                                name={'报警模块:'} width={this.state.style.selectWidth} data={arr} />
                                </Col>
                                <Col span={4}>
                                    <DropDown retParams={this.warningType.bind(this)} value={this.state.warningType} 
                                                name={'报警类型:'} width={this.state.style.selectWidth} data={arr} />
                                </Col>
                                <Col span={4}>
                                    <DropDown retParams={this.confirmState.bind(this)} value={this.state.confirmState} 
                                                name={'确认状态:'} width={this.state.style.selectWidth} data={arr} />
                                </Col>
                                <Col span={8}>
                                    <div className="inputGroup">
                                        <label className="hint" htmlFor="">持续时间:</label>
                                        <input type="text" ref='continueTimeRef' />
                                    </div>  
                                </Col>
                                <Col span={4}>
                                    <EveryMomentButton type={'search'} buttonClick={this.queryData.bind(this)} className='cxBtn' name={'查询'} />
                                    <EveryMomentButton type={'reload'} buttonClick={this.reset.bind(this)} name={'重置'} />
                                </Col>
                            </Row>                                                               
                           
                        </div>
                    </ContainBox>
                </div>
                <div className="tableContain_wrap">
                    <ContainBox bright>
                        <div className="tableControl">
                            <div className="qbqr">
                                <EveryMomentButton type={''} buttonClick={()=>{
                                    notification.open({
                                        message: '您已经触发了全部确认按钮',
                                        description: ''
                                    });
                                }} name={'全部确认'} />
                            </div>
                            <div className="showAlarmBell">
                                <p className="left">
                                    <img src={alarmBell_red} alt=""/>
                                    <span>1</span>
                                </p>
                                <p className="right">
                                    <img src={checkPass_blue} alt=""/>
                                    <span>32542</span>
                                </p>
                            </div>
                            
                        </div>
                        <div className="tableContain">
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

export { HistoryAlarmQuery }