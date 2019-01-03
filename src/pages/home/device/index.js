import React from 'react'
import axios from '@/api'
import HomeHeader from '@/components/homeHeader'
import './index.scss'

//  获取redux数据方式一
import store from '@/reduxs'

class Device extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
        this.dispatchHandle = this.dispatchHandle.bind(this)
    }

    dispatchHandle(){
        //  发送
        store.dispatch({type: 'SET_VISIBILITY_FILTER', filter: 'vinter'})
        //  接受        
        store.getState()
    }

    //  生命周期函数
    componentDidMount() {
        //  发送事件过程监听
        // const subscribe = store.subscribe(() => console.log(store.getState(), '========='))
        //  注销监听
        // subscribe()
    }

    render(){
        return (
            <div className='device-page'>
                <HomeHeader title={'设备页面'}/>                
                <span onClick={ this.dispatchHandle }>设备页面</span>
            </div>
        )
    }
}

export default Device