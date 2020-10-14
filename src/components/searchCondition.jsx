import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
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
  setCurrentIndex(event) {
      var currentIndex = parseInt(event.currentTarget.getAttribute('index'), 10);
      let categoryArr = [ '今日', '24小时', '2天', '3天', '7天', '10天', '自定义' ];
      actionCreator.changeSearchTime(categoryArr[ currentIndex ])
      console.log(store.getState())
  }
  render() {
      let categoryArr = [ '今日', '24小时', '2天', '3天', '7天', '10天', '自定义' ];
      let itemList = [];
      for(let i = 0; i < categoryArr.length; i++) {
          itemList.push(<li key={ i }
                            index={ i } onClick={ this.setCurrentIndex }
                        >{ categoryArr[ i ] }</li>);
      }
      return <ul className="category">{itemList}</ul>
  }
}

export default connect(

)(SearchCondition) 