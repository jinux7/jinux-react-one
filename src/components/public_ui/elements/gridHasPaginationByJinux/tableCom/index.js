import React, { Component } from 'react';
import './index.less';
import $ from 'jquery';

class TableCom extends Component {
    constructor(...props){
        super(...props);
        this.state = {
            width: 100 / this.props.titles.length + '%',
            keys: this.props.objKey
        }
    }

    componentWillReceiveProps(nextProps){
        setTimeout(()=>{
            let oUl = $(this.refs.ulRef), ulH = oUl.css('height');
            oUl.find('li').css('height',ulH);
            
        },0);
        
    }

    render(){
        if(this.props.data.length===0) return (<div></div>);
        let _this = this;
        return (
            <div id="table_component_historyAlarmQuery">
                <ul className="head" ref="ulRef" >
                    {
                        this.props.titles.map((ele,index)=>(
                                <li key={index}>{ele}</li>                            
                        ))
                    }
                </ul>
                <ul className="body">
                    {   
                        this.props.data.map(function(wele,windex){
                            return (
                                <div className={windex % 2 !== 0?'wrap':'wrap bg'} key={windex}>
                                    <li>{(_this.props.current-1)*_this.props.pageSize+windex+1}</li>
                                    {
                                        _this.state.keys.map((iele,iindex)=>{
                                            return (
                                                <li key={iindex}>{wele[iele]}</li>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </ul>
                <style>{`
                    #table_component_historyAlarmQuery li {
                        width:${this.state.width}
                    }
                `}
                </style>
            </div>
        );
    }
}

export { TableCom };