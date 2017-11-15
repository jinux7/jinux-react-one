import React, { Component } from 'react';
import './index.less';


class ProcessBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            percent: this.props.percent || 0

        }
    }
    render(){
        return (
            <div id="elementsProcessBar">
               <div className="inner" style={{ width: this.state.percent*100+'%'}}></div>
               <span>{this.state.percent*100+'%'}</span>
            </div>
        );
    }
}

export default ProcessBar;