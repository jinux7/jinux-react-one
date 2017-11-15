import React,{ Component } from 'react';
import './index.less';
import { Pagination } from 'antd';

class PaginationCom extends Component {
    render(){
        return (
            <div className="elementPaginationCom">
                <Pagination 
                total={this.props.total} 
                pageSizeOptions={this.props.pageSizeOptions} 
                showSizeChanger
                onChange={this.props.onChange.bind(this)}
                onShowSizeChange={this.props.onShowSizeChange.bind(this)}
                />
            </div>
        )
    }
}

export { PaginationCom }