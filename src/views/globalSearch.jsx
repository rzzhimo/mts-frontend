import React, { Component } from 'react';
import { Input } from 'antd';
import '../style/globalSearch.css'
import SearchCondition from '../components/searchCondition';

const { Search } = Input;

class GlobalSearch extends Component {
  render () {
    return (
      <div>
        <div id="searchInput">
          <Search
            placeholder="input search text"
            enterButton="Search"
            size="large"
          />
        </div>
        <div>
          <SearchCondition/>
        </div>
      </div>
    )
  }
}

export default GlobalSearch