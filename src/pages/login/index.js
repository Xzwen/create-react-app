import React from 'react';
import LoginForm from './loginForm';
import './index.scss';

class Login extends React.Component{
    render() {
        return (
            <div className='login-page'>
                <div className='login-form-wrap'>
                    <LoginForm/>
                </div>
            </div>
        )
    }
}
export default Login;