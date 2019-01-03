import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router'
// import PropTypes from "prop-types";
import {Form, Icon, Input, Button, Checkbox} from 'antd';
import md5 from 'md5'

import './index.scss';
  
class LoginForm extends React.Component {
    // static contextTypes = {
    //     router: PropTypes.object.isRequired
    // }

    handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
          if (!err) {
            let params = {username: values.userName, password: md5(`${values.password}salt`)}
            window.$api.login(params)
            .then(res => {
                window.localStorage.setItem('authToken', res.data.token)
                browserHistory.push("/home");
            })
            // this.context.router.push("/home");
        }
      });
    }
  
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <div className='form-title'>电子书包教学平台</div>
                <Form.Item>
                    {getFieldDecorator('userName', {
                    rules: [{ required: true, message: '请输入用户名！' }],
                    })(
                    <Input size='large' prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                    rules: [{ required: true, message: '请输入密码！' }],
                    })(
                    <Input size='large' prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
                    )}
                </Form.Item>
                <div className='form-operation'>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                    <Checkbox>下次直接登录</Checkbox>
                    )}
                    <span>注册新用户</span>
                </div>
                <div className='login-form-button'>
                    <Button type="primary" htmlType="submit">登录</Button>
                </div>
            </Form>
        );
    }
}

const WrappedNormalLoginForm = Form.create()(LoginForm);

export default WrappedNormalLoginForm