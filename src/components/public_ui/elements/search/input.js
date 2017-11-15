import React, {Component} from 'react';
import {Input} from 'antd';
import PropTypes from 'prop-types';
import './input.less'
const Search = Input.Search;
class CommonInput extends Component{
    constructor(props){
      super(props);
    }
    show=(value)=>{
      this.props.showValue(value)
    }
    render(){
        return(
            <div className='wrap_input'>
            <span className='farm'>{this.props.name}</span>
            <Search
                placeholder="请输入..."
                style={{
                    width: 200,
                    height:40,
            
            }}
                onSearch={this.show}/>
        </div>
        )
    }
}
CommonInput.prototypes={
    name:PropTypes.string.isRequired,
    showValue:PropTypes.func.isRequired
}
export default CommonInput