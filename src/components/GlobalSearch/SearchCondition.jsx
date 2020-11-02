import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Divider } from 'antd';
import PropTypes from 'prop-types';
import actionCreator from '../../redux/actionCreator';
import './SearchCondition.css';

class SearchCondition extends Component {
  static propTypes = {
    timeRangeIndex: PropTypes.number,
    articleOrderIndex: PropTypes.number,
    sensitiveAttributeIndex: PropTypes.number,
    sourceTypeIndex: PropTypes.number,
    setTimeRangeIndex: PropTypes.func,
    setArticleOrderIndex: PropTypes.func,
    setSensitiveAttributeIndex: PropTypes.func,
    setSourceTypeIndex: PropTypes.func,
  };

  setCurrentTimeRangeIndex(event) {
    this.props.setTimeRangeIndex(parseInt(event.currentTarget.getAttribute('index'), 10));
    console.log(this.props);
  }

  setCurrentArticleOrderIndex(event) {
    this.props.setArticleOrderIndex(parseInt(event.currentTarget.getAttribute('index'), 10));
  }

  setCurrentSensitiveAttributeIndex(event) {
    this.props.setSensitiveAttributeIndex(parseInt(event.currentTarget.getAttribute('index'), 10));
  }

  setCurrentSourceTypeIndex(event) {
    this.props.setSourceTypeIndex(parseInt(event.currentTarget.getAttribute('index'), 10));
  }

  render() {
    const timeRangeArr = [ '今日', '24小时', '2天', '3天', '7天', '10天', '自定义' ];
    const articleOrderArr = [ '时间降序', '时间升序' ];
    const sensitiveAttributeArr = [ '全部', '敏感', '非敏感' ];
    const sourceTypeArr = [ '全部', '网站', '论坛', '微博', '微信', '博客', '新闻' ];
    const timeRangeList = [];
    for (let i = 0; i < timeRangeArr.length; i++) {
      timeRangeList.push(
        <li
          key={ i }
          index={ i }
          className={ this.props.timeRangeIndex === i ? 'active' : '' }
          onClick={ this.setCurrentTimeRangeIndex.bind(this) }
        >
          { timeRangeArr[ i ] }
        </li>,
      );
    }
    const articleOrderList = [];
    for (let i = 0; i < articleOrderArr.length; i++) {
      articleOrderList.push(
        <li
          key={ i }
          index={ i }
          className={ this.props.articleOrderIndex === i ? 'active' : '' }
          onClick={ this.setCurrentArticleOrderIndex.bind(this) }
        >
          { articleOrderArr[ i ] }
        </li>,
      );
    }
    const sensitiveAttributeList = [];
    for (let i = 0; i < sensitiveAttributeArr.length; i++) {
      sensitiveAttributeList.push(<li
        key={ i }
        index={ i }
        className={ this.props.sensitiveAttributeIndex === i ? 'active' : '' }
        onClick={ this.setCurrentSensitiveAttributeIndex.bind(this) }
      >
        { sensitiveAttributeArr[ i ] }
                                  </li>);
    }
    const sourceTypeList = [];
    for (let i = 0; i < sourceTypeArr.length; i++) {
      sourceTypeList.push(<li
        key={ i }
        index={ i }
        className={ this.props.sourceTypeIndex === i ? 'active' : '' }
        onClick={ this.setCurrentSourceTypeIndex.bind(this) }
      >
        { sourceTypeArr[ i ] }
                          </li>);
    }
    return (
      <div id="conditionDiv">
        <div className="conditionWrapper">
          <span>时间范围：</span>
          <ul className="conditionList timeRange">{timeRangeList}</ul>
        </div>
        <Divider className="divider" />
        <div className="conditionWrapper">
          <div className="articleOrderWrapper">
            <span>文章排序：</span>
            <ul className="conditionList articleOrder">{articleOrderList}</ul>
          </div>
          <div className="sensitiveAttributeWrapper">
            <span>敏感属性：</span>
            <ul className="conditionList sensitiveAttribute">{sensitiveAttributeList}</ul>
          </div>
        </div>
        <Divider className="divider" />
        <div className="conditionWrapper">
          <span>来源类型：</span>
          <ul className="conditionList sourceType">{sourceTypeList}</ul>
        </div>
        <Divider className="divider" />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  timeRangeIndex: state.timeRangeIndex,
  articleOrderIndex: state.articleOrderIndex,
  sensitiveAttributeIndex: state.sensitiveAttributeIndex,
  sourceTypeIndex: state.sourceTypeIndex,
})

const mapDispatchToProps = {
  setTimeRangeIndex: actionCreator.setTimeRangeIndex,
  setArticleOrderIndex: actionCreator.setArticleOrderIndex,
  setSensitiveAttributeIndex: actionCreator.setSensitiveAttributeIndex,
  setSourceTypeIndex: actionCreator.setSourceTypeIndex,
}

export default connect(mapStateToProps, mapDispatchToProps, null, { forwardRef: true })(SearchCondition)
