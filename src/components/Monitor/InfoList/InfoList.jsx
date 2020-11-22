import React, { Component } from 'react';
import { Button, Input, Table, Checkbox } from 'antd';
import {
  HeartOutlined,
  TagsOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import SearchCondition from '../../common/SearchCondition/SearchCondition';
import './InfoList.scss';

const columns = [
  {
    width: 600,
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
    render: (text) => (text.value)
  },
  {
    title: '时间',
    dataIndex: 'timestamp',
    key: 'timestamp',
    render: (text) => (text.format('lll')),
  },
];
class InfoList extends Component {
  constructor() {
    super();
    this.data = [];
    this.state = {
      filter: [],
      menu: null,
      subMenu: null,
    };
  }

  componentDidMount() {
    const { currentItem, currentSubItem } = this.props;
    console.log(currentSubItem.articles);
    this.data = currentSubItem.articles;
    this.setState({
      menu: currentItem.value,
      subMenu: currentSubItem.value,
      filter: currentSubItem.articles,
    });
  }

  handleChange = (condition) => {
    console.log(condition);
  }

  render() {
    const { filter, menu, subMenu } = this.state;
    return (
      <div>
        <div>
          <SearchCondition />
        </div>
        <div>
          <div id="searchButton">
            <Button
              type="primary"
              size="medium"
              block
            >
              查询
            </Button>
          </div>
          <div id="searchButton">
            <Button
              type="primary"
              size="medium"
              block
            >
              导出Excel
            </Button>
          </div>
          <div id="table">
            <Table
              columns={columns}
              dataSource={filter}
              footer={() => (
                <div className="info-list-footer">
                  <Checkbox
                    onChange={this.onChange}
                    className="info-list-checkbox"
                  >
                    批量操作：
                  </Checkbox>
                  <div id="iconButton">
                    <Button primary icon={<TagsOutlined />} />
                  </div>
                  <div id="iconButton">
                    <Button primary icon={<HeartOutlined />} />
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
              )}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default InfoList;
