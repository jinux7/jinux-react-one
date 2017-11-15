import React,{Component} from 'react';
import './input.less';
class CommontextInput extends Component {
    constructor(props){
       super(props);
    }
    show=()=>{
        let nodeValue=this.refs.input.value;
        this.props.showEndValue(nodeValue);
    }
    render(){
        let style={};
        if(this.props.width){
           style={width:this.props.width,height:40};
        }else{
            style={width:200,height:40};
        }
        
        return(
            <div className='wrap_CommonInput'>
                <input ref='input' type="text" onChange={this.show} style={style}/>
             </div> 
        )
        
    }
}
export default CommontextInput