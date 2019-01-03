import React from 'react'
import axios from '@/api'
import HomeHeader from '@/components/homeHeader'
import './index.scss'

class Users extends React.Component {
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
            <div className='users-page'>
                <HomeHeader title={'人员页面'}/>
                人员页面
            </div>
        )
    }
}

export default Users