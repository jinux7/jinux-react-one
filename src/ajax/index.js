import { baseUrl } from './config';
import axios from 'axios';
import { message } from 'antd';

export const getData = ()=>axios.get(baseUrl+'/get')
                                .then((res)=>res.data)
                                .catch((err)=>{
                                    message.error('网络请求出现错误:'+err);
                                });

export const getPaginationTest = ()=>axios.post(baseUrl+'/paginationdata')
                                .then((res)=>res.data)
                                .catch((err)=>{
                                    message.error('网络请求出现错误:'+err);
                                });