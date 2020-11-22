import React, { Component } from 'react';
import { Layout, Menu, Button, Input, Divider } from 'antd';
import Modify from './Modify/Modify';
import Warning from './Warning/Warning';
import InfoList from './InfoList/InfoList';
import Direction from './Direction/Direction';
import payload from './payload';
import './Monitor.scss';

const { Content, Sider } = Layout;

class Monitor extends Component {
  constructor() {
    super();
    this.state = {
      menu: [],
      results: [],
      currentForm: null,
      currentMenu: null,
      currentSubMenu: null,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      const { results, menu } = payload;
      this.setState({
        results,
        menu,
        currentForm: 'info',
        currentMenu: results[0]?.value,
        currentSubMenu: results[0]?.subMenu[0]?.value,
      });
    }, 0);
  }

  handleClick = (type, value) => {
    switch (type) {
      case 'categoryMenu':
      {
        const [subMenu, menu] = value.keyPath;
        this.setState({
          currentMenu: menu,
          currentSubMenu: subMenu,
        });
        break;
      }
      case 'formMenu':
      {
        this.setState({ currentForm: value.key });
        break;
      }
      default:
        break;
    }
  }

  render() {
    const { currentMenu, currentSubMenu, currentForm, menu, results } = this.state;
    const currentItem = results.filter(item => item.value === currentMenu).pop();
    const currentSubItem = currentItem?.subMenu.filter(item => item.value === currentSubMenu).pop();
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider>
          <div className="side-bar">
            <Button className="side-bar-btn"> 添加分类 </Button>
            <Button className="side-bar-btn"> 添加方案 </Button>
            <Input.Search placeholder="search by label" />
            <Divider />
            <Menu
              onClick={(value) => this.handleClick('categoryMenu', value)}
              mode="inline"
              selectedKeys={[currentSubMenu]}
            >
              {menu.map((item) => (
                <Menu.SubMenu
                  // eslint-disable-next-line react/no-array-index-key
                  key={item.value}
                  title={item.label}
                >
                  {item.subMenu.map((subItem) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <Menu.Item key={subItem.value}>
                      {subItem.label}
                    </Menu.Item>
                  ))}
                </Menu.SubMenu>
              ))}
            </Menu>
          </div>
        </Sider>
        <Layout className="content">
          <div className="sub-menu-title">
            <a>{`${currentItem?.label} > ${currentSubItem?.label}`}</a>
          </div>
          <Menu
            theme="light"
            defaultSelectedKeys={['1']}
            mode="horizontal"
            onClick={(value) => this.handleClick('formMenu', value)}
          >
            <Menu.Item key="info">信息列表</Menu.Item>
            <Menu.Item key="track">定向监测</Menu.Item>
            <Menu.Item key="alert">预警设置</Menu.Item>
            <Menu.Item key="modify">修改方案</Menu.Item>
          </Menu>
          <Content className="site-layout-background">
            {currentForm === 'info' && (
              <InfoList
                currentItem={currentItem}
                currentSubItem={currentSubItem}
              />
            )}
            {currentForm === 'track' && (<Direction />)}
            {currentForm === 'alert' && (<Warning />)}
            {currentForm === 'modify' && (<Modify />)}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Monitor;
