import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Table, Icon, Switch, Radio, Form} from 'antd';
import './table_warning.less'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a href="#">{text}</a>
  }, {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    width: 70
  }, {
    title: 'Address',
    dataIndex: 'address',
    key: 'address'
  }, {
    title: 'Action',
    key: 'action',

    render: (text, record) => (
      <span>
        <a href="#">Action 一 {record.name}</a>
        <span className="ant-divider"/>
        <a href="#">Delete</a>
        <span className="ant-divider"/>
        <a href="#" className="ant-dropdown-link">
          More actions
        </a>
      </span>
    )
  }
];
const data = [];
for (let i = 1; i <= 10; i++) {
  data.push({key: i, name: 'John Brown', age: `${i}2`, address: `New York No. ${i} Lake Park`, description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`});
}

const expandedRowRender = record => <p>{record.description}</p>;
const title = () => 'Here is title';
const showHeader = true;
const footer = () => 'Here is footer';
const scroll = {
  y: 240
};

class TableWarning extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    const size = this.props.size
    this.state.table = {
      pagination: true,
      size: size,
      bordered: true,
      showHeader,
      rowSelection: {},
      scroll: undefined
    }
  }

  render() {
    return (

      <div id='wrap_warning_table'>
        <Table {...this.state.table} columns={columns} dataSource={data}/>
      </div>
    )
  }

}
export default TableWarning
