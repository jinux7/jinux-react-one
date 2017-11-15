import React, { Component } from 'react';
import { Layout, Icon } from 'antd';
import './baselayout.less';
import logo from '../../../assets/images/logo.png';
import { MyMenu } from '../menu/menu.js';
import { MyBreadcrumb } from '../elements/myBreadcrumb/myBreadcrumb.js';

const { Header, Sider, Content } = Layout;
class BaseLayout extends Component {
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
				<div id="baseLayout">
					<Layout>
				        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
				            <div className="logo mainPageLogo">
				            	<img src={logo} alt="logo"/>
				            </div>
				            <MyMenu />
				        </Sider>
				        <Layout>
				          	<Header style={{ background: '#004C63', padding: 0, height: 45, }}>
					            <Icon
					              className="trigger"
					              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
					              onClick={this.toggle}
					            />
				          	</Header>
				          	<Content style={{ minHeight: 280 }}>
				          		<MyBreadcrumb />
				            	{ this.props.children }
				          	</Content>
				        </Layout>
				    </Layout>
				</div>
			)
	}
}

export { BaseLayout }