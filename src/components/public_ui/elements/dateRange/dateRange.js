import React,{Component} from 'react';
import Proptypes from 'prop-types';
import { DatePicker } from 'antd';
import Monment from 'moment';
import './dateRange.less';

class DateRange extends Component {
 state = {
    startValue: null,
    endValue: null,
    endOpen: false,
   
  };
  disabledStartDate = (startValue) => {
    const endValue = this.state.endValue;
    if (!startValue || !endValue) {
      return false;
    }
    return startValue.valueOf() > endValue.valueOf();
  }
  componentDidMount(){
    let timeValue={};
    timeValue.startValue=Monment(this.state.startValue).format("YYYY-MM-DD HH:mm:ss");
    timeValue.endValue=Monment(this.state.endValue).format("YYYY-MM-DD HH:mm:ss");
    this.props.showTime(timeValue);

  }
  disabledEndDate = (endValue) => {
    const startValue = this.state.startValue;
    if (!endValue || !startValue) {
      return false;
    }
    return endValue.valueOf() <= startValue.valueOf();
  }

  onChange = (field, value) => {
    this.setState({
      [field]: value,
    });
    
  }

  onStartChange = (value) => {
    this.onChange('startValue', value);
  }

  onEndChange = (value) => {
    this.onChange('endValue', value);
  }

  handleStartOpenChange = (open) => {
    if (!open) {
      this.setState({ endOpen: true });
    }
  }

  handleEndOpenChange = (open) => {
    this.setState({ endOpen: open });
      let timeValue={};
      timeValue.startValue=Monment(this.state.startValue).format("YYYY-MM-DD HH:mm:ss");
      timeValue.endValue=Monment(this.state.endValue).format("YYYY-MM-DD HH:mm:ss");
      this.props.showTime(timeValue);
  
  }

  render() {
    if(this.props.startValue!=null&&this.props.startValue!=undefined){
    
        this.state.startValue=new Monment(this.props.startValue);
    
    };
    if(this.props.endValue!=null&&this.props.endValue!=undefined){
     
        this.state.endValue=new Monment(this.props.endValue);

     
    };
    const { startValue, endValue, endOpen } = this.state;
    let  widthStyle={width:140};
    if(this.props.width!=undefined){
      widthStyle.width=this.props.width;
    }
    return (
      <div id='wrap_dateRange'>
          <span className='title'>时间范围:</span>
        <DatePicker
        style={widthStyle}
          disabledDate={this.disabledStartDate}
          showTime
          format="YYYY-MM-DD HH:mm:ss"
          value={startValue}
          placeholder="开始时间"
          onChange={this.onStartChange}
          onOpenChange={this.handleStartOpenChange}
           
        />
        <DatePicker
        style={widthStyle}
          disabledDate={this.disabledEndDate}
          showTime
          format="YYYY-MM-DD HH:mm:ss"
          value={endValue}
          placeholder="结束时间"
          onChange={this.onEndChange}
          open={endOpen}
          onOpenChange={this.handleEndOpenChange}
        />
      </div>
    );
  }
}
DateRange.proptypes={
  showTime:Proptypes.func.isRequired
}
export default DateRange