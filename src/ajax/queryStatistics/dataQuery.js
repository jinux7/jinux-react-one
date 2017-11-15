import { baseUrl } from '../config';
import axios from 'axios';
import { message } from 'antd';

//查询统计-数据查询-10分钟数据查询测试接口
export const tenMinutesDataQuery_api = ()=>axios.post(baseUrl+'/tenMinutesDataQuery')
                                .then((res)=>res.data)
                                .catch((err)=>{
                                    message.error('网络请求出现错误:'+err);
                                });
//查询统计-数据查询-历史数据查询测试接口
export const historyDataQuery_api = ()=>axios.post(baseUrl+'/historyDataQuery')
.then((res)=>res.data)
.catch((err)=>{
    message.error('网络请求出现错误:'+err);
});
//查询统计-数据查询-停机记录查询测试接口
export const closedownRecordQuery_api = ()=>axios.post(baseUrl+'/closedownRecordQuery')
.then((res)=>res.data)
.catch((err)=>{
    message.error('网络请求出现错误:'+err);
});