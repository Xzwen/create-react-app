//  异步函数的触发中间件
import thunk from 'redux-thunk'
import { applyMiddleware, createStore } from 'redux'
import todoApp from './reducers'

//  初始化state方法二  权重最高的初始化
let store = createStore(todoApp, {visibilityFilter: 'cc', todos: [{name: 'vinter', property: 'wealthiness'}]}, applyMiddleware(thunk))

export default store