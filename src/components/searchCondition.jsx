import React, { Component } from 'react';
import { connect } from 'react-redux'
import store from '../redux/store'
import actionCreator from '../redux/actionCreator'
import '../style/searchCondition.css'

class SearchCondition extends React.Component {
  componentDidMount() {
    // 使用subscribe监听reducer的改动.只要reducer中数据改变就会触发
    store.subscribe(() => {
      // 使用setState中只放一个空对象会更新所有的数据
      // 目的就是触发render的执行, 来重新渲染页面, 让页面的数据发生改变
      this.setState({})
    })
  }
  setCurrentTimeRangeIndex(event) {
    actionCreator.setTimeRangeIndex(parseInt(event.currentTarget.getAttribute('index'), 10));
  }
  setCurrentArticleOrderIndex(event) {
    actionCreator.setArticleOrderIndex(parseInt(event.currentTarget.getAttribute('index'), 10));
  }
  setCurrentSensitiveAttributeIndex(event) {
    actionCreator.setSensitiveAttributeIndex(parseInt(event.currentTarget.getAttribute('index'), 10));
  }
  setCurrentSourceTypeIndex(event) {
    actionCreator.setSourceTypeIndex(parseInt(event.currentTarget.getAttribute('index'), 10));
  }
  render() {
      const timeRangeArr = [ '今日', '24小时', '2天', '3天', '7天', '10天', '自定义' ];
      const articleOrderArr = [ '时间降序', '时间升序' ];
      const sensitiveAttributeArr = [ '全部', '敏感', '非敏感' ];
      const sourceTypeArr = [ '全部', '网站', '论坛', '微博', '微信', '博客', '新闻' ];
      const timeRangeList = [];
      for(let i = 0; i < timeRangeArr.length; i++) {
        timeRangeList.push(<li key={ i }
                            index={ i } 
                            className={ store.getState().timeRangeIndex === i ? 'active' : '' }
                            onClick={ this.setCurrentTimeRangeIndex }
                        >{ timeRangeArr[ i ] }</li>);
      }
      const articleOrderList = [];
      for(let i = 0; i < articleOrderArr.length; i++) {
        articleOrderList.push(<li key={ i }
                            index={ i } 
                            className={ store.getState().articleOrderIndex === i ? 'active' : '' }
                            onClick={ this.setCurrentArticleOrderIndex }
                        >{ articleOrderArr[ i ] }</li>);
      }
      const sensitiveAttributeList = [];
      for(let i = 0; i < sensitiveAttributeArr.length; i++) {
        sensitiveAttributeList.push(<li key={ i }
                            index={ i } 
                            className={ store.getState().sensitiveAttributeIndex === i ? 'active' : '' }
                            onClick={ this.setCurrentSensitiveAttributeIndex }
                        >{ sensitiveAttributeArr[ i ] }</li>);
      }
      const sourceTypeList = [];
      for(let i = 0; i < sourceTypeArr.length; i++) {
        sourceTypeList.push(<li key={ i }
                            index={ i } 
                            className={ store.getState().sourceTypeIndex === i ? 'active' : '' }
                            onClick={ this.setCurrentSourceTypeIndex }
                        >{ sourceTypeArr[ i ] }</li>);
      }
      return <div>
        <div>
          <ul className="timeRange">{timeRangeList}</ul>
        </div>
        <div>
          <ul className="articleOrder">{articleOrderList}</ul>
        </div>
        <div>
          <ul className="sensitiveAttribute">{sensitiveAttributeList}</ul>
        </div>
        <div>
          <ul className="sourceType">{sourceTypeList}</ul>
        </div>
      </div>
  }
}

export default connect(

)(SearchCondition) 