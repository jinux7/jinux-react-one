import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './menu.less';
import { Menu, Icon, Button } from 'antd';
const SubMenu = Menu.SubMenu;

class MyMenu extends React.Component {
  state = {
    collapsed: false,
  }
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    return (
      <div style={{ width: 200 }}>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={[]}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item key="1">
            <Link to={'/main/home'}>
            	<Icon type="home" />
            	<span>首页</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
          	<Link to={{
													pathname: '/monitor/heheha',
													state: { farm: '#1' }
													}}>
            	<Icon type="eye-o" />
            	<span>实时监控</span>
            </Link>
          </Menu.Item>
          <SubMenu key="sub1" title={<span><Icon type="notification" /><span>实时信息</span></span>}>     
            <Menu.Item key="5">
              <Link to={'/main/lpower'}>实时功率 </Link>
            </Menu.Item>            
            <Menu.Item key="6">
              <Link to={'/main/lStatus'}>机组状态 </Link>
            </Menu.Item>
            <Menu.Item key="7">
              <Link to={'/main/lWarning'}>实时告警</Link>
            </Menu.Item>
            <Menu.Item key="8">
              <Link to={'/main/lStop'}>实时停机</Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="3">
          	<Link to={'/page1'}>
            	<Icon type="file-text" />
            	<span>报表中心</span>
            </Link>
          </Menu.Item>
          <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>查询统计</span></span>}>
            <SubMenu key="sub3" title="数据查询">
              <Menu.Item key="11">
                <Link to={'/main/historyAlarmQuery'}>
                  历史告警查询
                </Link>
              </Menu.Item>
              <Menu.Item key="12">
                <Link to={'/main/tenMinutesDataQuery'}>
                  10分钟数据查询
                </Link>
              </Menu.Item>
              <Menu.Item key="13">
                <Link to={'/main/historyDataQuery'}>
                  历史数据查询
                </Link>
              </Menu.Item>
              <Menu.Item key="14">
                <Link to={'/main/closedownRecordQuery'}>
                  停机记录查询
                </Link>
              </Menu.Item>
              <Menu.Item key="15">操作记录查询</Menu.Item>
            </SubMenu>
            <SubMenu key="sub4" title="统计分析">
              <Menu.Item key="16">
              <Link to={'/main/windAnalyze'}>
                风资源分析
                </Link>
                </Menu.Item>
              <Menu.Item key="17">
              <Link to={'/main/lightAnalyze'}>
                光资源分析
                </Link>
                </Menu.Item>
              <Menu.Item key="18">
              <Link to={'/main/powerContrast'}>
                电量统计对比
                </Link>
                </Menu.Item>
              <Menu.Item key="19">
              <Link to={'/main/faultStatistics'}>
                故障统计
                </Link>
                </Menu.Item>
              <Menu.Item key="20">可利用率对比</Menu.Item>
              <Menu.Item key="21">逆变器转换率</Menu.Item>
              <Menu.Item key="22">功率曲线</Menu.Item>
              <Menu.Item key="23">功率预测</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu key="sub5" title={<span><Icon type="setting" /><span>系统管理</span></span>}>     
            <Menu.Item key="25">
              用户管理
            </Menu.Item>            
            <Menu.Item key="6">
              权限管理
            </Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}

export { MyMenu }





















/*import React, { Component } from 'react';
import './menu.less';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class MyMenu extends React.Component {
	constructor(props){
		super(props);
		this.state = {

		}
	}
	handleClick = (e) => {
	console.log('click ', e);
	}

	render() {
	return (
		<div id="myMenu">
			<Menu
		        onClick={this.handleClick}
		        /*defaultSelectedKeys={['1']}
		        defaultOpenKeys={['sub1']}*/
		        /*mode="inline"
		      	>
		        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
		            	<Menu.Item key="1">Option 1</Menu.Item>
		            	<Menu.Item key="2">Option 2</Menu.Item>		      
		            	<Menu.Item key="3">Option 3</Menu.Item>
		            	<Menu.Item key="4">Option 4</Menu.Item>
		        </SubMenu>
		        <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
		        	<Menu.Item key="5">Option 5</Menu.Item>
		          	<Menu.Item key="6">Option 6</Menu.Item>
		          	<SubMenu key="sub3" title="Submenu">
		            	<Menu.Item key="7">Option 7</Menu.Item>
		            	<Menu.Item key="8">Option 8</Menu.Item>
		       		</SubMenu>
		        </SubMenu>
		        <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
		          	<Menu.Item key="9">Option 9</Menu.Item>
		          	<Menu.Item key="10">Option 10</Menu.Item>
		          	<Menu.Item key="11">Option 11</Menu.Item>
		          	<Menu.Item key="12">Option 12</Menu.Item>
		        </SubMenu>
		    </Menu>		
		</div>
	);
	}
}

export { MyMenu }*/