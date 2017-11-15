import React, { Component } from 'react';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './myBreadcrumb.less';

class MyBreadcrumbClass extends Component {
	constructor(props){
		super(props);
		this.state = {
			data: this.props.breadcrumb
		}
	}

	render(){
		return (
			<div id='elementsBreadcrumb'>
				<Breadcrumb style={{marginBottom:2}}>
				<Breadcrumb.Item>
					<Link to="/main/home">首页</Link>
				</Breadcrumb.Item>
						{
							this.props.breadcrumb.map(function(ele,index){
								return (
									<Breadcrumb.Item key={index}>
										<span>{ele.name}</span>
									</Breadcrumb.Item>
									)
							})
						}
				</Breadcrumb>
			</div>
		);
	}
} 

const mapStateToProps = (state,ownProps) => {
    const breadcrumb = state.breadcrumb;
    return { breadcrumb };
};
let MyBreadcrumb = connect(mapStateToProps)(MyBreadcrumbClass);
export { MyBreadcrumb }