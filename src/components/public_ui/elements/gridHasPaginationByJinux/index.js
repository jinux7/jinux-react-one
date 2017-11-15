import React,{ Component } from 'react';
import { TableCom } from './tableCom';
import { PaginationCom } from '@/components/public_ui/elements/paginationCom';
import './index.less';

class GridHasPaginationByJinux extends Component {
    constructor(...props){
        super(...props);
        this.propsData = [];
        this.state= {
            gridData_total: this.props.total,  
            gridData_pageSize: 10,
            gridData_current: 1,
            gridData_data: []      
        }
    }

    pageChange(page, pageSize){ //翻页改变页码的回调函数
        this.setState({
            gridData_current: page,
            gridData_pageSize: pageSize,
        },function(){
            this.setState({
                gridData_data: this.propsData.slice(this.state.gridData_pageSize*(this.state.gridData_current-1),this.state.gridData_pageSize*(this.state.gridData_current-1)+this.state.gridData_pageSize)            
                
            });
        });
    }

    onShowSizeChange(page, pageSize){ //改变每页显示数据条数的回调函数
        this.setState({
            gridData_current: page,
            gridData_pageSize: pageSize,
        },function(){
            this.setState({
                gridData_data: this.propsData.slice(this.state.gridData_pageSize*(this.state.gridData_current-1),this.state.gridData_pageSize*(this.state.gridData_current-1)+this.state.gridData_pageSize)            
                
            });
        });
    }

    componentWillReceiveProps(nextProps){
        this.propsData = nextProps.data;
        let d = this.propsData.slice(this.state.gridData_pageSize*(this.state.gridData_current-1),this.state.gridData_pageSize*(this.state.gridData_current-1)+this.state.gridData_pageSize);
        this.setState({           
            gridData_data: d          
        });
    }
    
    render(){
        return (
            <div className="gridHasPaginationByJinux">
                <TableCom titles={this.props.titles} objKey={this.props.objKey} 
                            pageSize={this.state.gridData_pageSize}
                            current={this.state.gridData_current}
                            data={ this.state.gridData_data }
                />
                <div className="fenye">
                    <PaginationCom 
                            total={this.props.total}
                            pageSizeOptions={['10','15','20']}
                            onChange={this.pageChange.bind(this)}
                            onShowSizeChange={this.onShowSizeChange.bind(this)}
                    />
                </div>
            </div>
        )
    }
}

export default GridHasPaginationByJinux;