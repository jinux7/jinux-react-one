// 风资源分析
import React,{ Component }from 'react';
import DateRange from '@/components/public_ui/elements/dateRange/dateRange';
import ContainBox from '@/components/public_ui/elements/containBox';
import CommonInput from '@/components/public_ui/elements/search/input';
import EveryMomentButton from '@/components/public_ui/elements/button/button';
import './windAnalyze.less';
import WindBar from  './bar/bar';
import Grid from '@/components/public_ui/elements/gridHasPaginationByJinux';
import { getPaginationTest } from '@/ajax/index.js';
const titles = ['序号','风场名称','开始时间','结束时间','设备名称','报警ID','报警中文描述','报警英文描述','报警模块','设备类型','报警等级','报警代码','报警类型','确认时间','确认用户','状态','操作'];
const singleData = {'key2':'双辽风场','key3':'2017-9-14 11:13','key4':'2017-9-18 14:09','key5':'33#','key6':'E076','key7':'0度风向标','key8':'hello','key9':'变流系统','key10':'歌美飒G58-850风机','key11':'严重','key12':'0','key13':'error','key14':'2017-9-18 10:47','key15':'SuperMan','key16':'已确认','key17':'对号'};
let dataLi = [], index =0;
while(index < 10){
    dataLi.push(singleData);
    index++;
}
class WindAnalyze extends Component{
    constructor(props){
        super(props);
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
    
    timeValue=(value)=>{
        console.log(value)
        
    }
    componentWillMount(){
        // getPaginationTest().then((res)=>{
        //     if(!res) return;
        //     this.totalData = res.data; 
        //     this.total = res.total;
        //     this.setState({           
        //         gridData_total: this.total,
        //         gridData_data: this.totalData          
        //     });
        // });
    }
    render(){
        return(
            <div id='wrap_windAnalyze'>
                <ContainBox>
                    <div className='head_party'>
                     <DateRange  showTime={this.timeValue} />
                     </div>
                     <div className='head_party'>
                     <CommonInput name={'风场名称'} showValue={(value)=>{ console.log(value)}}/>>
                     </div>
                     <div className='head_party' style={{float:'right'}}>
                       <EveryMomentButton name={'查询'} type={'search'}/>
                     </div>
                </ContainBox>
                <ContainBox>
                    <div style={{padding:50,marginTop:20}}>
                    <div style={{height:300}}>
                        <WindBar/>                    
                    </div>
                    <div  style={{marginTop:30,width:'100%'}}>
                    <Grid
                            titles={titles}
                            total={this.total}
                            objKey={this.state.gridData_objKey}
                            data={ this.state.gridData_data } />
                    </div>
                    </div>
                   
                </ContainBox>

            
            </div> 
            
        )
    }
}
export default WindAnalyze