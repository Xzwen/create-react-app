import React from 'react'
import { Button } from 'antd'
import { Link } from 'react-router'
import axios from '@/api'
import './index.scss'

class HomeHeader extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    //  生命周期函数
    componentDidMount() {
    }

    render(){
        return (
            <div className='home-header-component'>
                <span>{this.props.title}</span>
            </div>
        )
    }
}

export default HomeHeader