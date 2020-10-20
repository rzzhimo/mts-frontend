import React, { Component } from 'react';
import { Input, Button } from 'antd';
import '../style/globalSearch.css'
import SearchCondition from '../components/searchCondition';

class GlobalSearch extends Component {
  constructor () {
    super();
    this.state = {
      searchKeyword: '',
    };
    this.textInput = React.createRef();
  }

  handleKeywordChange (event) {
    this.setState({
      searchKeyword: event.target.value
    })
  }

  clearInput() {
    this.textInput.current.state.value = '';
    this.setState({})
  }

  render () {
    return (
      <div>
        <div id="inputArea">
          <Input 
            placeholder="请输入关键字"
            onChange={ this.handleKeywordChange.bind(this) }
            ref={ this.textInput }/>
          <Button 
            type="primary"
            onClick={ this.clearInput.bind(this) }>
            清空</Button>
        </div>
        <div>
          <SearchCondition/>
        </div>
      </div>
    )
  }
}

export default GlobalSearch