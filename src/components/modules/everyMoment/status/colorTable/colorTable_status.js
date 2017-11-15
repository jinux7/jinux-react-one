import React,{ Component } from'react';
import './colorTable_status.less';
class ColorTable extends Component{
    constructor(props) {
        super(props);
    }
    render(){
         return(
            <div id='wrap_status_color_table'>
                <div className='left_title theme_normal_font_size theme_table_head_color'>
                    <p className='left_title_first'></p>
                    <div>苏家屯风场</div>
                    <div>皇姑风场</div>
                    <div>和平风场</div>
                    <div>辽中风场</div>
                    <div>新民风场</div>
                    <div>沈河风场</div>
                    <div>铁西风场</div>
                    <div>于洪风场</div>
                    <div>大东风场</div>
                </div>
                <div className="top_title">
                    <div>
                    <div><span style={{background:'rgb(49,141,47)'}}>运行</span></div>
                    <div><span style={{background:'rgb(9,62,74)'}}>限停</span></div>
                    <div><span style={{background:'rgb(160,38,44)'}}>故障</span></div>
                    <div><span style={{background:'rgb(36,127,159)'}}>中断</span></div>
                    <div><span style={{background:'rgb(170,170,170)'}}>停机</span></div>
                    <div><span style={{background:'rgb(124,62,139)'}}>限运</span></div>
                    <div><span style={{background:'rgb(159,155,46)'}}>检修</span></div>
                    <div><span style={{background:'rgb(181,98,37)'}}>待机</span></div> 
                    </div>
                    <div>
                    <div><span style={{background:'rgb(49,141,47)'}}>运行</span></div>
                    <div><span style={{background:'rgb(9,62,74)'}}>限停</span></div>
                    <div><span style={{background:'rgb(160,38,44)'}}>故障</span></div>
                    <div><span style={{background:'rgb(36,127,159)'}}>中断</span></div>
                    <div><span style={{background:'rgb(170,170,170)'}}>停机</span></div>
                    <div><span style={{background:'rgb(124,62,139)'}}>限运</span></div>
                    <div><span style={{background:'rgb(159,155,46)'}}>检修</span></div>
                    <div><span style={{background:'rgb(181,98,37)'}}>待机</span></div> 
                    </div>
                    
                              
                </div>
            </div>
        )
    }
}
export default ColorTable