/*
  reducer 本质是一个函数, 所以直接直接导出一个函数
  这个函数接受两个参数
  prevState: 修改前的数据
  actions: 是一个对象, 里面放着很多方法.
*/
import State from './state';
import {resetFilter, setFilter} from './reducer/filter';
import { actionTypes } from './actionCreator';
/* 给prevState一个默认值: State
为什么不直接把State作为参数?
  修改数据的时候只修改prevState, 不修改State中的数据
*/
export default (prevState = State, actions) => {
  // 创建一个新的数据, 赋值prevState
  let newState = { ...prevState };
  // 数据的修改
  // reducer 组件中接收到actionCreator中的action, 并解构出里面的属性
  const { type, data } = actions;
  // 使用switch方法, 判断调用的是哪个方法. 这时候就需要使用到type标识
  switch (type) {
    case actionTypes.SET_FILTER:
      newState = setFilter(newState, data);
      break;
    case actionTypes.RESET_FILTER:
      newState = resetFilter(newState, data);
      break;
    default:
      break;
  }
  // 返回的数据是修改后的数据, 也是getState()方法获取的数据
  return newState;
};
