import axios from 'axios'

// 请求拦截器
axios.interceptors.request.use(function(config){
    config.headers.common.Authorization = `Bearer ${window.localStorage.getItem('authToken')}`
    return config
}, function(error) {    
    return Promise.reject(error)
});

export default {
    //  用户登录
    login(params) {
        return axios.post('/api/users/login', params)
    },
    me(){
        return axios.get('/api/users/me')
    },    
    register(params){
    	return axios.post('/api/users', params)
    },
    meeting(params){
        return axios.get('/api/meeting', params)
    },
    createMeeting(params){
        return axios.post('/api/meeting', params)
    },
    getSingleMeeting(id){
        return axios.get(`/api/meeting/${id}`)
    },
    delMeeting(id){
        return axios.delete(`/api/meeting/${id}`)
    },
    editMeeting(id, params){
        return axios.put(`/api/meeting/${id}`, params)
    },
    //  编辑部分
    // editPatch(id, params){
    //     return axios.patch(`/api/meeting/${id}`, params)
    // }
    device(params){
        return axios.get('/api/device', params)
    },
    createDevice(params){
        return axios.post('/api/device', params)
    },
    getSingleDevice(id){
        return axios.get(`/api/device/${id}`)
    },
    delDevice(id){
        return axios.delete(`/api/device/${id}`)
    },
    editDevice(id, params){
        return axios.put(`/api/device/${id}`, params)
    },

    //  用户
    users(){
        return axios.get(`/api/users`)
    },
    delUsers(id){
        return axios.delete(`/api/users/${id}`)
    },
    getSingleUsers(id){
        return axios.get(`/api/users/${id}`)
    },
    editUsers(id, params){
        return axios.put(`/api/users/${id}`, params)
    },

    //  阿里云
    aliyunSts(){
        return axios.get(`/api/acl/aliyunSts`)
    }
}