import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';
import { breadcrumb } from '@/redux/actions';
import './home.less';
import ContainBox from '../../public_ui/elements/containBox';
import { Left1 } from './components/left1';
import { Left2 } from './components/left2';
import { Left3 } from './components/left3';
import { Left4 } from './components/left4';
import { Middle1 } from './components/middle1';
import { Middle2 } from './components/middle2';
import { Right1 } from './components/right1';
import { Right2 } from './components/right2';

class HomeC extends Component {
	constructor(props){
		super(props);
		this.props.runBreadcrumb();
	}

	componentDidMount(){
		let h = document.documentElement.clientHeight;
		this.refs.home_module.style.height = (h - 70)+'px';
	}

	render(){
		return (
				<div id="home_module" ref="home_module">
					<Row type="flex" gutter={10}>
						<Col span={6} className="left">
							<div className="generate_electricity">
								<ContainBox>
									<Left1 />
								</ContainBox>
							</div>
							<div className="energy_conservation">
								<ContainBox>
									<Left2 />
								</ContainBox>
							</div>
							<div className="percentage_complete">
								<ContainBox>
									<Left3 />
								</ContainBox>
							</div>
							<div className="electricity_statistics">
								<ContainBox>
									<Left4 />
								</ContainBox>
							</div>
						</Col>
						<Col span={11} className="middle">
							<div className="map">
								<ContainBox>
									<Middle1/>
								</ContainBox>
							</div>
							<div className="power_comparison">
								<ContainBox>
									<Middle2 />
								</ContainBox>
							</div>
						</Col>
						<Col span={7} className="right">
							<div className="power">
								<ContainBox>
									<Right1 />
								</ContainBox>
							</div>
							<div className="status_statistics">
								<ContainBox>
									<Right2 />
								</ContainBox>
							</div>
						</Col>
					</Row>
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
											dispatch(breadcrumb([]));
										}
									}							  
							}
let Home = connect(mapStateToProps, mapDispatchToProps)(HomeC);
export { Home }