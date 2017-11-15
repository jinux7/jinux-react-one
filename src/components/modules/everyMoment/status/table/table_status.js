import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './table_status.less';
class StatusTable extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let table_body = '';

        // if(this.props.data.length>0){
        table_body = this
            .props
            .data
            .map((content, index) => {
                return (

                    
                        <td key={index}>{content}</td>
                    
                )

            })
        let head= this.props.arr.map((content,index)=>{
                return(
                    <th key={index}>{content}</th>
                )
            })
           
        let table = <table >
            <thead>
                <tr>
                    {head}
                </tr>
            </thead>
            <tbody >
                <tr>
                {table_body}
                </tr>
               
            </tbody>
        </table>
        // }else{     table_body=<table><tr><td colSpan="13">没有返回数据</td></tr></table>; }

        return (
            <div id='wrap_status_table' className='theme_table_content_color' style={{
                marginTop: 60
            }}>

                <div
                    className='first_head theme_table_content_color theme_normal_font_size'
                    style={{
                    width: '110px'
                }}>
                    <div className='first_title  theme_big_font_size theme_table_head_color'>场站名称</div>
                    <div>浑南风电场</div>
                    <div>苏家屯风电场</div>
                    <div>皇姑风电场</div>
                    <div>和平风电场</div>
                    <div>沈北风电场</div>
                    <div>辽中风电场</div>
                </div>
                {table}
            </div>
        )
    }

}
StatusTable.PropTypes = {
    data: PropTypes.any.isRequired
};
export default StatusTable;