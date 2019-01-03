// import React, {Component} from 'react';
import { browserHistory } from 'react-router'
import React from 'react'
import axios from '@/api'
import './index.scss'

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isToggleOn: true,
            username: ''
        }  
        //  官方推荐
        this.getUserInfo = this.getUserInfo.bind(this);
        this.exit = this.exit.bind(this)
    }
    //  实验性写法
    // getUserInfo = () => {
    //     this.setState((value) => ({
    //         isToggleOn: !value.isToggleOn
    //     }))
    // }


    getUserInfo(){
        //  方式一
        // this.setState({
        //     isToggleOn: !this.state.isToggleOn
        // })
        //  方式二
        this.setState((value) => ({
            isToggleOn: !value.isToggleOn
        }))        
    }

    exit(){
        browserHistory.push('/')
    }

    //  生命周期函数
    componentDidMount() {
        axios.me()
        .then(res => {
            this.setState({
                username: res.data.username
            })
        })
    }

    render(){
        return (
            <div className='header-component'>
                <span>用户名：{this.state.username}</span>
                <span onClick={this.exit} className='header-exit'>退出</span>
            </div>
        )
    }
}

export default Header