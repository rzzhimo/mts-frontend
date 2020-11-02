export default {
  setTimeRangeIndex: (data) => ({ type: 'SET_TIME_RANGE_INDEX', payload: data }),
  setArticleOrderIndex: (data) => ({ type: 'SET_ARTICLE_ORDER_INDEX', payload: data }),
  setSensitiveAttributeIndex: (data) => ({ type: 'SET_SENSITIVE_ATTRIBUTE_INDEX', payload: data }),
  setSourceTypeIndex: (data) => ({ type: 'SET_SOURCE_TYPE_INDEX', payload: data }),
}