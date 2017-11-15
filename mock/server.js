const Koa = require('koa');
const route = require('koa-route');
const app = new Koa();

//查询统计-数据查询-10分钟数据查询测试接口
const tenMinutesDataQuery = ctx => {
	const singleData = {'key1':'','key2':'16.07','key3':'20.36','key4':'','key5':'','key6':'','key7':'','key8':'','key9':'','key10':''};
    let dataLi = [], index =1;
    while(index < 2001){
        let obj = {};
        for(var key in singleData){
            if(key === 'key1') {
                obj[key] = new Date();
                continue ;
            }
            obj[key] = (Math.random()*100).toFixed(2);
        }
        dataLi.push(obj);
        index++;
    }
    var obj = {
        total: 2000,
        data: dataLi
    }

    ctx.response.body = obj;
}

//查询统计-数据查询-历史数据查询测试接口
const historyDataQuery = ctx => {
	const singleData = {'key1':'','key2':'16.07','key3':'20.36','key4':'','key5':'','key6':'','key7':'','key8':'','key9':'','key10':'','key11':'','key12':'','key13':''};
    let dataLi = [], index =1;
    while(index < 2001){
        let obj = {};
        for(var key in singleData){
            if(key === 'key1') {
                obj[key] = new Date();
                continue ;
            }
            obj[key] = (Math.random()*100).toFixed(2);
        }
        dataLi.push(obj);
        index++;
    }
    var obj = {
        total: 2000,
        data: dataLi
    }

    ctx.response.body = obj;
}

//查询统计-数据查询-停机记录查询测试接口
const closedownRecordQuery = ctx => {
	const singleData = {'key1':'','key2':'16.07','key3':'20.36','key4':'','key5':'','key6':'','key7':'','key8':'','key9':'','key10':'','key11':'','key12':'','key13':''};
    let dataLi = [], index =1;
    while(index < 2001){
        let obj = {};
        for(var key in singleData){
            if(key === 'key1') {
                obj[key] = new Date();
                continue ;
            }
            obj[key] = (Math.random()*100).toFixed(2);
        }
        dataLi.push(obj);
        index++;
    }
    var obj = {
        total: 2000,
        data: dataLi
    }

    ctx.response.body = obj;
}

//一些临时的数据请求接口
const paginationdata = ctx => {
	const singleData = {'key2':'双辽风场','key3':'2017-9-14 11:13','key4':'2017-9-18 14:09','key5':'33#','key6':'E076','key7':'0度风向标','key8':'hello','key9':'变流系统','key10':'歌美飒G58-850风机','key11':'严重','key12':'0','key13':'error','key14':'2017-9-18 10:47','key15':'SuperMan','key16':'已确认','key17':'对号'};
    let dataLi = [], index =1;
    while(index < 2001){
        let obj = {};
        for(var key in singleData){
            obj[key] = singleData[key]+(index);
        }
        dataLi.push(obj);
        index++;
    }
    var obj = {
        total: 2000,
        data: dataLi
    }

    ctx.response.body = obj;
}
app.use(route.post('/tenMinutesDataQuery', tenMinutesDataQuery)); //查询统计-数据查询-10分钟数据查询
app.use(route.post('/historyDataQuery', historyDataQuery)); //查询统计-数据查询-历史数据查询
app.use(route.post('/closedownRecordQuery', closedownRecordQuery)); //查询统计-数据查询-停机记录查询
app.use(route.post('/paginationdata', paginationdata));//一些临时的数据请求
app.listen(3008);