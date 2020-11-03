import React, { Component } from 'react';
import { Space, Input, Button, Table } from 'antd';
import './Manager.css'

class Manager extends Component {
    constructor () {
        super();
        this.state = {
          searchKeyword: '',
        };
        this.loginname = React.createRef();
        this.username = React.createRef();
      }
    
      handleKeywordChange (event) {
        this.setState({
          searchKeyword: event.target.value
        })
      }
    
      query() {
        this.loginname.current.state.value = '';
        this.username.current.state.value = '';
        this.setState({})
      }
      modify() {
        this.loginname.current.state.value = '';
        this.username.current.state.value = '';
        this.setState({})
      }
      delete() {
        this.loginname.current.state.value = '';
        this.username.current.state.value = '';
        this.setState({})
      }
  render () {
    const columns = [
        {
          title: '登录名',
          dataIndex: 'loginname',
          render: text => <a>{text}</a>,
        },
        {
          title: '用户名',
          dataIndex: 'username',
          render: text => <a>{text}</a>,
        },
        {
          title: '手机',
          dataIndex: 'phone',
        },
        {
            title: '邮箱',
            dataIndex: 'email',
          },
       
        {
            title: '方案数',
            dataIndex: 'projectNum',
        },
        {
            title: '有效期',
            dataIndex: 'validDate',
        },
        {
            title: '状态',
            dataIndex: 'state',
            render: text => <span>{text===1?"可用":"不可用"}</span>,
        },
        {
            title: '操作',
            dataIndex: 'operation',
            render: () => (
              <Space size="middle">
                <a onClick={ this.modify.bind(this) }>修改 </a>
                <a onClick={ this.delete.bind(this) }>删除</a>
              </Space>
              ),
        },
      ];
      const data = [
        {
          key: '1',
          loginname: '11111',
          username: '11111',
          phone: '17890893765',
          email:'hutest@163.com',
          projectNum:34,
          validDate:'2099-12-31 23:59:59.0',
          state:1,
        },
        {
            key: '2',
            loginname: 'twst09',
            username: '123',
            phone: '17890893765',
            email:'hutest@163.com',
            projectNum:344,
            validDate:'2099-12-31 23:59:59.0',
            state:1,
        },
        {
            key: '3',
            loginname: '11111',
            username: '11111',
            phone: '17890893765',
            email:'hutest@163.com',
            projectNum:3454,
            validDate:'2099-12-31 23:59:59.0',
            state:1,
        },
    ];
    return (
      <div>
        <h1> Manager </h1>
        <div id="inputArea">
          <Space>
            <span>登录名：</span>
            <Input 
                placeholder=""
                onChange={ this.handleKeywordChange.bind(this) }
                ref={ this.loginname }/>
            <span>用户名：</span>
            <Input 
                placeholder=""
                onChange={ this.handleKeywordChange.bind(this) }
                ref={ this.username }/>
            <Button 
              type="primary"
              onClick={ this.query.bind(this) }>
              查询</Button>
          </Space>
        </div>
        <div id="searchButtonWrapper">
          <Button 
              type="primary"
              size="large"
              block>
            添加用户</Button>
        </div>
        <div id="tableWrapper">
          <Table
          columns={ columns }
          dataSource={ data }
          />
        </div>
      </div>
    )
  }
}

export default Manager