import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from 'react-router-dom';
import { connect } from 'react-redux';
import { BaseLayout } from '../components/public_ui/layout/baselayout.js';
import { BaselayoutMonitoring } from '../components/public_ui/layout/baselayoutMonitoring.js';
import { Home } from '@/components/modules/home/home.js';
import { Monitoring } from '@/components/modules/monitoring/monitoring.js';
import EveryMomentPower from '@/components/modules/everyMoment/power/all.js';
import EveryMomentStatus from '@/components/modules/everyMoment/status/all.js';
import EveryMomentWarning from '@/components/modules/everyMoment/warning/all.js';
import EveryMomentStop from '@/components/modules/everyMoment/stop/all.js';
import { Page1 } from '@/components/modules/page1/page1.js';
import { HistoryAlarmQuery } from '@/components/modules/queryStatistics/dataQuery/historyAlarmQuery';
import { TenMinutesDataQuery } from '@/components/modules/queryStatistics/dataQuery/tenMinutesDataQuery';
import { HistoryDataQuery } from '@/components/modules/queryStatistics/dataQuery/historyDataQuery';
import { ClosedownRecordQuery } from '@/components/modules/queryStatistics/dataQuery/closedownRecordQuery';
import WindAnalyze from '@/components/modules/queryStatistics/statisticsAnalyze/windAnalyze/windAnalyze';
import LightAnalyze from '@/components/modules/queryStatistics/statisticsAnalyze/lightAnalyze/lightAnalyze';
import PowerContrast from '@/components/modules/queryStatistics/statisticsAnalyze/powerContrast';
import FaultStatistics from '@/components/modules/queryStatistics/statisticsAnalyze/fault';



class JkRouterC extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <Router>
                <div style={{height:'100%'}}>    
                        <Switch>
                            <Route exact path="/main/:id" render={({match})=>{
                                switch(match.params.id){
                                    case 'page1': //测试用
                                    return <BaseLayout><Page1 /></BaseLayout>;

                                    case 'home': //首页
                                        return <BaseLayout><Home /></BaseLayout>;
                                    case 'lpower': //实时信息
                                        setTimeout(()=>{this.props.runBreadcrumb([{'name':'实时信息'},{'name':'实时功率'}]);},0);                                      
                                        return <BaseLayout><EveryMomentPower /></BaseLayout>;
                                    case 'lStatus': //实时信息
                                        setTimeout(()=>{this.props.runBreadcrumb([{'name':'实时信息'},{'name':'机组状态'}]);},0);
                                        return <BaseLayout><EveryMomentStatus /></BaseLayout>;
                                    case 'lWarning': //实时信息
                                        setTimeout(()=>{this.props.runBreadcrumb([{'name':'实时信息'},{'name':'实时告警'}]);},0);
                                        return <BaseLayout><EveryMomentWarning /></BaseLayout>;
                                    case 'lStop': //实时信息
                                        setTimeout(()=>{this.props.runBreadcrumb([{'name':'//实时信息'},{'name':'实时停机'}]);},0);
                                    return <BaseLayout><EveryMomentStop /></BaseLayout>;
                                    case 'historyAlarmQuery': //查询统计-数据查询-历史告警查询
                                        setTimeout(()=>{this.props.runBreadcrumb([{'name':'查询统计'},{'name':'数据查询'},{'name':'历史告警查询'}]);},0);
                                        return <BaseLayout><HistoryAlarmQuery /></BaseLayout>;
                                    case 'tenMinutesDataQuery': //查询统计-数据查询-10分钟数据查询
                                        setTimeout(()=>{this.props.runBreadcrumb([{'name':'查询统计'},{'name':'数据查询'},{'name':'10分钟数据查询'}]);},0);
                                        return <BaseLayout><TenMinutesDataQuery /></BaseLayout>;
                                    case 'historyDataQuery': //查询统计-数据查询-历史数据查询
                                        setTimeout(()=>{this.props.runBreadcrumb([{'name':'查询统计'},{'name':'数据查询'},{'name':'历史数据查询'}]);},0);
                                        return <BaseLayout><HistoryDataQuery /></BaseLayout>;
                                    case 'closedownRecordQuery': //查询统计-数据查询-停机记录查询
                                        setTimeout(()=>{this.props.runBreadcrumb([{'name':'查询统计'},{'name':'数据查询'},{'name':'停机记录查询'}]);},0);
                                        return <BaseLayout><ClosedownRecordQuery /></BaseLayout>;                                   
                                    case 'windAnalyze': //风
                                        setTimeout(()=>{this.props.runBreadcrumb([{'name':'查询统计'},{'name':'数据查询'},{'name':'风资源分析'}]);},0);
                                        return <BaseLayout><WindAnalyze /></BaseLayout>;
                                    case 'lightAnalyze': //光
                                        setTimeout(()=>{this.props.runBreadcrumb([{'name':'查询统计'},{'name':'数据查询'},{'name':'光资源分析'}]);},0);
                                        return <BaseLayout><LightAnalyze /></BaseLayout>;
                                    case 'powerContrast': //电量
                                        setTimeout(()=>{this.props.runBreadcrumb([{'name':'查询统计'},{'name':'数据查询'},{'name':'电量统计对比'}]);},0);
                                        return <BaseLayout><PowerContrast /></BaseLayout>;
                                    case 'faultStatistics': //故障
                                        setTimeout(()=>{this.props.runBreadcrumb([{'name':'查询统计'},{'name':'数据查询'},{'name':'故障统计'}]);},0);
                                    return <BaseLayout><FaultStatistics/></BaseLayout>;

                                      
                                    default:
                                        window.location.href = '/main/home';
                                }                                                                                         
                            }} />
                            <Route exact path="/monitor/:id" render={(prop)=>{
                                    return <Monitoring params={prop.location} />                                                        
                            }} />

                            <Redirect from="/" to="/main/home" />
                        </Switch>    
                            
                </div>                
            </Router>
        );
    }
}

const mapStateToProps = ()=>{
	return {};
};
const mapDispatchToProps = (dispatch, ownProps) => {	
									return {
										runBreadcrumb: (breadData)=>{
											dispatch({
										        type: 'BREADCRUMB',
										        data: breadData
										   	});
										}
									}							  
							}
let JkRouter = connect(mapStateToProps, mapDispatchToProps)(JkRouterC);

export default JkRouter;

