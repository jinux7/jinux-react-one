import React, { Component } from 'react';
import './page1.less';
import { connect } from 'react-redux';
import { Button, message } from 'antd';
import { getData } from '@/ajax';

class Page1Class extends Component {
	constructor(props){
		super(props);
		this.props.runBreadcrumb();
	}

	componentWillMount(){
		getData().then((res)=>{
			message.success(res);
		});
	}

	render(){
		return (
				<div id="page1">
					<span>page1页面...</span>
					<Button type="primary">Primary</Button>
				</div>
			)
	}
}

const mapStateToProps = ()=>{
	return {};
};
const mapDispatchToProps = (dispatch, ownProps) => {	
									return {
										runBreadcrumb: ()=>{
											dispatch({
										        type: 'BREADCRUMB',
										        data: [{'name':'page2'}]
										   	});
										}
									}							  
							}
let Page1 = connect(mapStateToProps, mapDispatchToProps)(Page1Class);
export { Page1 }