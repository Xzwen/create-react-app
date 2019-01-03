
import axios from '@/api'
//  异步函数
export function getMeetingData(data) {
    return ( dispatch, getState ) => {
        axios.meeting()
        .then(res => {    
            dispatch({type: 'GET_MEETING_DATA', data: res.data})
        })
    }
}