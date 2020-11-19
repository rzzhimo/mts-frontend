import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb,Button ,Row, Col,Divider,Input,Table,Checkbox} from 'antd';
import SearchCondition from '../GlobalSearch/SearchCondition';
import {
    HeartOutlined,
    TagsOutlined,
    SearchOutlined,
  } from '@ant-design/icons';
import './InfoList.css';
const columns = [
    {
      title: '标题',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: '相同文章',
      dataIndex: 'sameArticle',
      key: 'sameArticle',
    },
    {
      title: '来源',
      dataIndex: 'source',
      key: 'source',
    },
    {
        title: '时间',
        dataIndex: 'time',
        key: 'time',
    },
  ];
const data =[];
class InfoList extends Component {
    state = {
        checked: true,
        disabled: false,
      };
      onChange = (e) => {
        this.setState({
            checked: e.target.checked,
          });
      }
  render() {
    return (

      <div>
        <div>
            <SearchCondition />
        </div>
        <div>
            <div id="searchButton">
                <Button
                type="primary"
                size="large"
                block
                >
                查询
          </Button>
            </div>
         <div id="searchButton">
            <Button
                type="primary"
                size="large"
                block
            >
                导出Excel
            </Button>
         </div>
         <div id="table">
          <Table 
            columns={ columns } 
            dataSource={ data } 
            footer={() => {
                return (
              <div>
                <Checkbox 
                    onChange={this.onChange}
                    checked={this.state.checked}
                    disabled={this.state.disabled}
                >批量操作：</Checkbox>
                <div id="iconButton">
                    <Button primary icon={<TagsOutlined />}>
                    </Button>
                    
                </div>
                <div id="iconButton">
                <Button primary icon={<HeartOutlined />}>
                    </Button>
                </div>
                <div id="input">
                    <Input placeholder="在结果中搜索，支持单个单词" />
                </div>
                <div id="searchButton">
                    <Button type="primary" icon={<SearchOutlined />}>
                    搜索
                    </Button>
                </div>
              </div>
                )
                
            }}
            />
        </div>
            
        </div>
      </div>
    )
  }
}

export default InfoList;