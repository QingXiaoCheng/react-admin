import React, { Component } from "react"
import './login.css'
import { Form, Input, Icon,  Button, Checkbox, message } from 'antd';



const users = [
    {
        userName: 'admin',
        password: '123456',
        roles: ['admin', 'editor'],
        Auth_Token: 'admin'
    },
    {
        userName: 'editor',
        password: '123456',
        roles: ['editor'],
        Auth_Token: 'editor'
    },
    {
        userName: 'animate',
        password: '123456',
        roles: ['animate'],
        Auth_Token: 'animate'
    }
]


class Login extends Component {
 
    handleSubmit = e=>{
       
        e.preventDefault();  
        this.props.form.validateFields(async(err, values)=>{
           
            if(err) { 
                let { username, password } = err
                if(username) {
                    message.error(username.errors[0].message) 
                }
                if(password) {
                    message.error(password.errors[0].message) 
                }
                return
            } 
            let { username, password } = values
           
            try{
               let user = users.find(v=> v.userName === username)
               if(!user) {
                    message.error('用户名错误')
                    return 
               }
               if(user.password !== password) {
                    message.error('密码错误')
                    return
               }
                
               localStorage.setItem('Auth_Token', user.Auth_Token)
               this.props.history.push( '/home' || '/')
            }catch(e){
                message.error(e)
                return
            }
           
        })
      
    };
    render() { 
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="login">
                <div className="login-box">
                    <h1>后台管理系统</h1>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                    <Form.Item className="form-item">
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Username"
                        />,
                    )}
                       
                    </Form.Item>
                    <Form.Item className="form-item">
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        placeholder="Password"
                        />,
                    )}
                    </Form.Item>
                    <Form.Item className="form-item">
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(<Checkbox>Remember me</Checkbox>)}
                        <a className="login-form-forgot" href="javascript:void(0);">
                            忘记密码
                        </a>
                    </Form.Item>
                    <Button type="primary" htmlType="submit" className="submit">
                        Log in
                    </Button>
                </Form>

                </div>
            </div>
        )
    }
}


export default Form.create()(Login)