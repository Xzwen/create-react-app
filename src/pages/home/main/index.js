import React from 'react'
import { browserHistory, Link } from 'react-router'
import HomeHeader from '@/components/homeHeader'
import axios from '@/api'
import { connect } from 'react-redux';
import './index.scss'

//  获取redux数据方式二
const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: () => {
            dispatch({type: 'SET_VISIBILITY_FILTER', filter: 'xzwen'})
        },
        todoClick: () => {
            dispatch({ type: 'ADD_TODO', text: 'vinter'})
        }
    }
}

const mapStateToProps = state => {
    return {
        value: state
    }
}

class Main extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            listData: []
        }
    }
    
    //  生命周期函数
    componentDidMount() {
        this.setState({
            listData: [
                {name: 'vinter', property: 'happiness', _id: '1'},
                {name: 'vinter', property: 'wealthiness', _id: '2'},
                {name: 'vinter', property: 'health', _id: '3'},
                {name: 'vinter', property: 'harmony', _id: '4'},
                {name: 'vinter', property: 'couple', _id: '5'}
            ]
        })
    }

    render(){
        // for 循环方法一
        // let list = (data) =>{
        //     let res = []
        //     for(let item of data){
        //         res.push(<p key={item._id}><span>name：{item.name}</span><span>属性：{item.property}</span></p>)
        //     }
        //     return res
        // }
        console.dir(this.props.todoClick)
        //  全局拿数据
        const { value, onTodoClick, todoClick } = this.props
        return (
            <div className='main-page'>
                <HomeHeader title={'系统主页'}/>
                {/* for循环方法二 */}
                <div>{ this.state.listData.map((item) => {
                    return <p key={item._id}><span>name：{item.name}</span><span>属性：{item.property}</span></p>
                }) }</div>
                <div onClick={ todoClick }>发送{value.visibilityFilter}</div>
                {/* 或 */}
                {/* <div onClick={ this.props.onTodoClick }>发送{this.props.value.visibilityFilter}</div> */}

                {/* for循环方式一 */}
                {/* <div>{list(this.state.listData)}</div> */}
            </div>
        )
    }
}

export default connect( mapStateToProps, mapDispatchToProps )(Main)

//  或只传第二参数
// export default connect( null, mapDispatchToProps )(Main)