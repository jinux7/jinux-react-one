import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Menu, Icon, Button, Tabs } from 'antd';
import './monitoring.less';
import Btn from '@/components/public_ui/elements/button/button';
import $ from 'jquery';
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;

class Monitoring extends Component {
	constructor(props){
		super(props);
		console.log(this.props.params.state);		
	}

	btnClick(){
		console.log(this.tab);
		$('.tabbox').css('display','none').filter('.'+this.tab).css('display','block');
	}

	render(){
		return (
				<div id="monitoring">
					<div className='menu' style={{ width: 200 }}>
						<Menu
						defaultSelectedKeys={['1']}
						defaultOpenKeys={[]}
						mode="inline"
						theme="dark"
						inlineCollapsed={false}
						>
							<SubMenu key="sub2" title={<span><Icon type="appstore" /><span>总公司</span></span>}>
								<SubMenu key="sub3" title="省级区域">
									<Menu.Item key="11">
										<Link to={{
													pathname: '/monitor/farm1',
													state: { farm: 'farm1' }
													}} replace>
											风场1
										</Link>
									</Menu.Item>
									<Menu.Item key="12">
										<Link to={{
													pathname: '/monitor/farm2',
													state: { farm: 'farm2' }
													}} replace>
											风场2
										</Link>
									</Menu.Item>
									<Menu.Item key="13">
										<Link to={{
													pathname: '/monitor/farm3',
													state: { farm: 'farm3' }
													}} replace>
											风场3
										</Link>
									</Menu.Item>
									<Menu.Item key="14">
										<Link to={{
													pathname: '/monitor/farm4',
													state: { farm: 'farm4' }
													}} replace>
											风场4
										</Link>
									</Menu.Item>
								</SubMenu>
							</SubMenu>
						</Menu>
					</div>

					<div className="contain">
						<div className="tapArea">
							<ul>
								<li>
									<Btn buttonClick={this.btnClick} tab={'tab1'} name={'分布视图'}></Btn>
								</li>
								<li>
									<Btn buttonClick={this.btnClick} tab={'tab2'} name={'矩阵试图'}></Btn>
								</li>
								<li>
									<Btn buttonClick={this.btnClick} tab={'tab3'} name={'列表视图'}></Btn>
								</li>
								<li>
									<Btn buttonClick={this.btnClick} tab={'tab4'} name={'对比试图'}></Btn>
								</li>
								<li>
									<Btn buttonClick={this.btnClick} tab={'tab5'} name={'负荷曲线'}></Btn>
								</li>
								<li>
									<Btn buttonClick={this.btnClick} tab={'tab6'} name={'成组控制'}></Btn>
								</li>
								<li>
									<Btn buttonClick={this.btnClick} tab={'tab7'} name={'主接线图'}></Btn>
								</li>
								<li>
									<Btn buttonClick={this.btnClick} tab={'tab8'} name={'AGC/AVC'}></Btn>
								</li>
								<li>
									<Btn buttonClick={this.btnClick} tab={'tab9'} name={'测风塔'}></Btn>
								</li>
								<li>
									<Btn buttonClick={this.btnClick} tab={'tab10'} name={'电度表'}></Btn>
								</li>
							</ul>
						</div>
						<div className="showArea">
							<div className="tabbox tab1">
								{this.props.params.state.farm+'->分布视图'}
								<iframe src="http://182.92.84.156/zsdjk/ht/fjfbt?farmCode=P_BEILIKE1" style={{"width":"100%","height":"100%","border":"none"}}></iframe>
							</div>
							<div className="tabbox tab2">
								{this.props.params.state.farm+'->矩阵试图'}
							</div>
							<div className="tabbox tab3">
								{this.props.params.state.farm+'->列表视图'}
							</div>
							<div className="tabbox tab4">
								{this.props.params.state.farm+'->对比试图'}
							</div>
							<div className="tabbox tab5">
								{this.props.params.state.farm+'->负荷曲线'}
							</div>
							<div className="tabbox tab6">
								{this.props.params.state.farm+'->成组控制'}
							</div>
							<div className="tabbox tab7">
								{this.props.params.state.farm+'->主接线图'}
							</div>
							<div className="tabbox tab8">
								{this.props.params.state.farm+'->AGC/AVC'}
							</div>
							<div className="tabbox tab9">
								{this.props.params.state.farm+'->测风塔'}
							</div>
							<div className="tabbox tab10">
								{this.props.params.state.farm+'->电度表'}
							</div>
						</div>
					</div>
				</div>
			)
	}
}

export { Monitoring }