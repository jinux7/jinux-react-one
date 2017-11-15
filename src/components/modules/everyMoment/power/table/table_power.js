import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './table_power.less';
class PowerTable extends Component {
    constructor(props) {
        super(props);
    
    }

    render() {
        let table_body = '';
        // if(this.props.data.length>0){
        table_body = this
            .props
            .data
            .map((content, index) => 
               (
                    
                           <tr key={index}>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>
                                <td>1</td>

                            </tr>
                )
            )
        // }else{     table_body=<table><tr><td colSpan="13">没有返回数据</td></tr></table>; }

        return (
            <div id='power_table' className='theme_table_content_color' style={{
                marginTop: 60
            }}>
                <div>
                    <div
                        className='first_head'
                        style={{
                        width: '110px'
                    }}>
                        <div className='first_title theme_table_head_color'>场站名称</div>
                        <div>浑南风电场</div>
                        <div>苏家屯风电场</div>
                        <div>皇姑风电场</div>
                        <div>和平风电场</div>
                        <div>沈北风电场</div>
                        <div>辽中风电场</div>
                    </div>
                    <div className='theme_table_head_color'
                        style={{
                        width: '780px',
                        height: '88px',
                        borderLeft: 'none',
                        borderRight: 'none'
                    }}>
                        <p className='theme_big_font_size theme_table_head_color'>汇总数据</p>
                        <div className='title_2'>
                            <div>实时功率</div>
                            <div>平均风速</div>
                            <div>并网容量</div>
                            <div>AGC指标</div>
                            <div>预测功率</div>
                            <div>理论可发功率</div>
                            <div>受限功率</div>
                        </div>
                    </div>
                    <div className='theme_table_head_color'
                        style={{
                        width: '710px',
                        height: '88px',
                       
                    }}>
                        <p className='theme_big_font_size theme_table_head_color'>汇总数据</p>
                        <div className='title_2'>
                            <div>实时功率</div>
                            <div>并网容量</div>
                            <div>理论可发功率</div>
                            <div>限电影响出力</div>
                            <div>故障影响出力</div>
                            <div>性能影响出力</div>
                        </div>
                    </div>
                    <table >
                        <tbody>
                    {table_body}
                    </tbody>

                    </table>
                </div>

            </div>
        )
    }

}
PowerTable.propTypes  = {
    data: PropTypes.any.isRequired
};
export default PowerTable;