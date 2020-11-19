import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb,Button ,Row, Col,Divider,Input} from 'antd';
import {
  QuestionCircleOutlined,
  BarChartOutlined,
  PlusOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import Modify from './Modify'
import Warning from './Warning'
import InfoList from './InfoList'
import Direction from './Direction'
import './Monitor.css';
const sort =[
  {
    name:'默认',
    prject:['新冠病毒','DD','ETC','政策法规','专利'],

  },
  {
    name:'武器装备',
    prject:['新冠病毒','DD','ETC','政策法规','专利'],

  },
  {
    name:'CETC',
    prject:['测试','镇城远古','千户测试','理想公司','区块链'],

  },
  {
    name:'贸易',
    prject:['新冠病毒','DD','ETC','政策法规','专利'],

  },
];
const { Content, Sider } = Layout;
const { SubMenu } = Menu;

class Monitor extends Component {
  

  constructor() {
    super();
    this.state = {
      menuSelectedKey: '1',
      upmenuSelectedKey: '1',
    };
  }

  menuHandleClick = (e) => {
    this.setState({ menuSelectedKey: e.key })
  }
  upmenuHandleClick = (e) => {
    this.setState({ upmenuSelectedKey: e.key })
  }
  render() {
    return (
      <Layout style={ { minHeight: '100vh' } }>
        <Sider className="sider">
          <Divider plain/>
          
          <Row >
            <Col>
            <Button danger size="small" icon={<PlusOutlined />}>
              添加分类
            </Button>
            </Col>   
            <Col >
            <Button danger size="small" icon={<PlusOutlined />}>
            添加方案
            </Button>
            </Col>
            
          </Row>
          <Divider plain/>
    <Input placeholder="搜索" prefix={<SearchOutlined />}/>
          <Menu theme="light" defaultSelectedKeys={ [ '1' ] } mode="inline">
            <SubMenu icon={ <BarChartOutlined />} title="舆情分析">
              <Menu.Item key="1" icon={ <QuestionCircleOutlined /> }>全网分析</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="content">
        <Menu theme="light" defaultSelectedKeys={ [ '1' ] } mode="horizontal">    
            <Menu.Item key="1"  onClick={ this.upmenuHandleClick }>信息列表</Menu.Item>
            <Menu.Item key="2" onClick={ this.upmenuHandleClick }>定向监测</Menu.Item>
            <Menu.Item key="3" onClick={ this.upmenuHandleClick }>预警设置</Menu.Item>
            <Menu.Item key="4" onClick={ this.upmenuHandleClick }>修改方案</Menu.Item>
        </Menu>
          <Content className="site-layout-background">
            {this.state.upmenuSelectedKey === '1' && (<InfoList />)}
            {this.state.upmenuSelectedKey === '2' && (<Direction />)}
            {this.state.upmenuSelectedKey === '3' && (<Warning />)}
            {this.state.upmenuSelectedKey === '4' && (<Modify />)}
          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default Monitor