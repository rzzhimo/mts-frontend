import React, { Component } from 'react';
import { Layout, Button, Radio,Card,Form,Input,Checkbox,Space } from 'antd';
import {
 
  UnlockOutlined,
  UserOutlined,
} from '@ant-design/icons';

const {Content,} = Layout;
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};


class Login extends Component {
   
    onFinish = values => {
      console.log('Success:', values);
    };
  
    onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };

  render() {
    return (
      <Layout>  
        
        <Content className="site-layout-background">
            <Card title="登录网情系统" style={{ width: 300 }} >
                      <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={this.onFinish}
                onFinishFailed={this.onFinishFailed}
              >
                <Form.Item
                  
                  name="username"
                  rules={[{ required: true, message: 'Please input your username!' }]}
                >
                  <Input placeholder="输入用户名"prefix={<UserOutlined />}/>
                </Form.Item>

                <Form.Item
                  
                  name="password"
                  rules={[{ required: true, message: 'Please input your password!' }]}
                >
                  <Input.Password placeholder="输入密码"prefix={<UnlockOutlined />}/>
                </Form.Item>

                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item {...tailLayout}>
                  <Button type="primary" htmlType="submit">
                  立即登录
                  </Button>
                </Form.Item>
              </Form>
            </Card>
        </Content>
      </Layout>
    )
  }
}

export default Login;
