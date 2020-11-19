import { Layout, Button, Radio,Card } from 'antd';
import React, { Component } from 'react';
import './InfoList.css';
const {Content,} = Layout;


class Warning extends Component {
    state = {
        radiovalue: 1,
      };
    onChange = (e) => {
        this.setState({
            radiovalue: e.target.value,
          });
      }
  render() {
    return (
      <Layout>  
        
        <Content className="site-layout-background">
            <Card title="预警开关"  >
            <span id="searchButton">预警开关：</span>
                <Radio.Group onChange={this.onChange} defaultValue="1" buttonStyle="solid">
                <Radio.Button value="1" id="searchButton">打开</Radio.Button>
                <Radio.Button value="0" id="searchButton">关闭</Radio.Button>
                </Radio.Group>
            <p></p>
            <Button type="primary" size="large">
                    保存
              </Button>
            </Card>
        </Content>
      </Layout>
    )
  }
}

export default Warning;