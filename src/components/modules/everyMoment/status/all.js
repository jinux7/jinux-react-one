import React,{ Component } from 'react';
import  PieStatus from './pie/pie_status';
import StatusTable from './table/table_status';
import ColorTable from './colorTable/colorTable_status'; 
import DropDownWarning from '@/components/public_ui/elements/dropDown/dropDown'
import './all.less';
import Grid from '@/components/public_ui/elements/gridHasPaginationByJinux';
import { getPaginationTest } from '@/ajax/index.js';
const titles = ['序号','风场名称','开始时间','结束时间','设备名称','报警ID','报警中文描述','报警英文描述','报警模块','设备类型','报警等级','报警代码','报警类型','确认时间','确认用户','状态','操作'];
const singleData = {'key2':'双辽风场','key3':'2017-9-14 11:13','key4':'2017-9-18 14:09','key5':'33#','key6':'E076','key7':'0度风向标','key8':'hello','key9':'变流系统','key10':'歌美飒G58-850风机','key11':'严重','key12':'0','key13':'error','key14':'2017-9-18 10:47','key15':'SuperMan','key16':'已确认','key17':'对号'};
let dataLi = [], index =0;
while(index < 10){
    dataLi.push(singleData);
    index++;
}
class everyMomentStatus extends Component{
    constructor(prop){
        super(prop);
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
    render(){
        return(
            <div id='wrap_status_all'>
                 <div className='wrap_status_PieStatus'>
                 <PieStatus/>
                 </div>
                 <div className='wrap_status_ColorTable'>
                 <ColorTable/>
                 </div>
                 <div className='wrap_status_StatusTable'>
                 <Grid
                            titles={titles}
                            total={this.total}
                            objKey={this.state.gridData_objKey}
                            data={ this.state.gridData_data } />
                 </div>
            </div>
        )
    }
}
export default everyMomentStatus;