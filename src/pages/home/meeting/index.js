import React from 'react'
import axios from '@/api'
import HomeHeader from '@/components/homeHeader'
import { connect } from 'react-redux';
import { getMeetingData } from '@/reduxs/handle'
import './index.scss'

const mapStateToProps = state => {
    return {
        value: state
    }
}

// mapDispatchToProps：将dispatch映射到组件的props中
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getMeetingDatas (data) {
            dispatch(getMeetingData(data))
        }
        // 上行代码相当于
        /*dispatch(( dispatch, getState ) => {
            axios.meeting()
            .then(res =>
                dispatch({type: 'GET_MEETING_DATA', data: res.data})
            })
        )*/
    }
}

class Meeting extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    //  生命周期函数
    componentDidMount() {
        this.props.getMeetingDatas()
    }

    render(){
        return (
            <div className='meeting-page'>
                <HomeHeader title={'会议页面'}/>
                会议页面{this.props.value.visibilityFilter}
            </div>
        )
    }
}

export default connect( mapStateToProps, mapDispatchToProps )(Meeting)