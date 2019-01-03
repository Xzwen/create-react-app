
import React from 'react'
import { browserHistory, Link } from 'react-router'
import axios from '@/api'
import './index.scss'

class SiderBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            activeStyle: 0
        }  
    }

    routeLink(params){
        this.setState({
            activeStyle: params.state.sign
        })
        browserHistory.push({
            pathname: params.path
        })
        this.getPageName = this.getPageName.bind(this)
    }

    getPageName(){
        let routeName = browserHistory.getCurrentLocation().pathname
        let pageName = routeName.split('/')[2]
        let pageNameHandle = params => {
            switch(params) {
                case 'main':
                    return 0
                case 'meeting':
                    return 1
                case 'device':
                    return 2
                case 'users':
                    return 3
                default:
                    return 0
            }        
        }
        this.setState({
            activeStyle: pageNameHandle(pageName)
        })

    }

    //  生命周期函数  相当于vue mounted(改变state会触发两次render)
    componentDidMount() {
    }
    
    //  之前渲染  相当于vue created
    componentWillMount() {
        this.getPageName()
    }

    render(){
        return (
            <div className='siderbar-component'>
                <ul>
                    {/* <li><Link to='/home/meeting'>会议页面</Link></li>
                    <li><Link to='/home/device'>设备页面</Link></li>
                    <li><Link to='/home/users'>人员页面</Link></li> */}
                    <li className={`sider-tab ${this.state.activeStyle===0?'active-tab-style':null}`} onClick={this.routeLink.bind(this, {path: '/home/main', state: {sign: 0}})}>系统主页</li>
                    <li className={`sider-tab ${this.state.activeStyle===1?'active-tab-style':null}`} onClick={this.routeLink.bind(this, {path: '/home/meeting', state: {sign: 1}})}>会议页面</li>
                    <li className={`sider-tab ${this.state.activeStyle===2?'active-tab-style':null}`} onClick={this.routeLink.bind(this, {path: '/home/device', state: {sign: 2}})}>设备页面</li>
                    <li className={`sider-tab ${this.state.activeStyle===3?'active-tab-style':null}`} onClick={this.routeLink.bind(this, {path: '/home/users', state: {sign: 3}})}>人员页面</li>
                </ul>
            </div>
        )
    }
}

export default SiderBar