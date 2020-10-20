import store from './store'
export default {
  setTimeRangeIndex (data) { // 修改name的方法
    const action = { // action对象
      type: 'SET_TIME_RANGE_INDEX', // type 标识: 必须的属性, 固定属性只能是type
      payload: data // 这是传递数据的参数
    }
    /* 
    store.dispatch 是 View 发出 Action 的唯一方法。
    接受一个 Action 对象作为参数，将它发送出去。
    */
    store.dispatch(action)
  },
  setArticleOrderIndex (data) {
    const action = {
      type: 'SET_ARTICLE_ORDER_INDEX',
      payload: data
    }
    store.dispatch(action)
  },
  setSensitiveAttributeIndex (data) {
    const action = {
      type: 'SET_SENSITIVE_ATTRIBUTE_INDEX',
      payload: data
    }
    store.dispatch(action)
  },
  setSourceTypeIndex (data) {
    const action = {
      type: 'SET_SOURCE_TYPE_INDEX',
      payload: data
    }
    store.dispatch(action)
  }
}