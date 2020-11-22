import React, { Component } from 'react';
import { Input, Button, Table } from 'antd';
import './GlobalSearch.css';
import SearchCondition from '../common/SearchCondition/SearchCondition';

class GlobalSearch extends Component {
  constructor() {
    super();
    this.state = {
      searchKeyword: '',
    };
    this.textInput = React.createRef();
  }

  handleKeywordChange(event) {
    this.setState({
      searchKeyword: event.target.value,
    });
  }

  clearInput() {
    this.textInput.current.state.value = '';
    this.setState({});
  }

  render() {
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        render: (text) => <a>{text}</a>,
      },
      {
        title: 'Age',
        dataIndex: 'age',
      },
      {
        title: 'Address',
        dataIndex: 'address',
      },
    ];
    const data = [
      {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
      },
      {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
      },
      {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
      },
      {
        key: '4',
        name: 'Disabled User',
        age: 99,
        address: 'Sidney No. 1 Lake Park',
      },
    ];

    return (
      <>
        <div id="inputArea">
          <Input
            placeholder="请输入关键字"
            onChange={this.handleKeywordChange.bind(this)}
            ref={this.textInput}
          />
          <Button
            type="primary"
            onClick={this.clearInput.bind(this)}
          >
            清空
          </Button>
        </div>
        <div>
          <SearchCondition />
        </div>
        <div id="searchButtonWrapper">
          <Button
            type="primary"
            size="large"
            block
          >
            查询
          </Button>
        </div>
        <div id="tableWrapper">
          <Table
            columns={columns}
            dataSource={data}
          />
        </div>
      </>
    );
  }
}

export default GlobalSearch;
