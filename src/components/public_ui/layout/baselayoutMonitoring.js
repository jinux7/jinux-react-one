import React, { Component } from 'react';
import { Layout, Icon } from 'antd';
import logo from '../../../assets/images/logo.png';
import { MyMenu } from '../menu/menu.js';
import { MyBreadcrumb } from '../elements/myBreadcrumb/myBreadcrumb.js';
import './baselayoutMonitoring.less';

const { Header, Sider, Content } = Layout;
class BaselayoutMonitoring extends Component {
	constructor(props){
		super(props);
		this.state = {
			collapsed: false
		}
	}

	toggle = () => {
	    this.setState({
	      collapsed: !this.state.collapsed,
	    });
	  }

	render(){
		return (
				<div id="baselayoutMonitoring" style={{ height: '100%'}}>
					<Layout>
				        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
				            <div className="logo mainPageLogo">
				            	<img src={logo} alt="logo"/>
				            </div>
										<span style={{color:"white",marginTop:"50px",fontSize:"32px"}}>
												实时监控系统！
										</span>
				        </Sider>
				        <Layout>
				          	<Header style={{ background: '#fff', padding: 0 }}>
					            <Icon
					              className="trigger"
					              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
					              onClick={this.toggle}
					            />
				          	</Header>
				          	<Content style={{ margin: '5px 2px', padding: 24, background: '#fff', minHeight: 280 }}>
				          		<MyBreadcrumb />
				            	{ this.props.children }
				          	</Content>
				        </Layout>
				    </Layout>
				</div>
			)
	}
}

export { BaselayoutMonitoring }