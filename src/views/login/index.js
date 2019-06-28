import React from "react"
import { Form, Icon, Input, Button } from 'antd';
import {connect} from "react-redux"
import "./index.css"
import logo from "../../static/logo.png"
import {loginActionAsync} from "../../action/user"
class Login extends React.Component{
    render(){
        const { getFieldDecorator } = this.props.form;
        return(
            <div className="login_container">
                <div className="logo">
                    <img src={logo}/>
                </div>
            <Form onSubmit={this.props.handleSubmit.bind(this)} className="login-form">
                <Form.Item label="用户名">
                
                {getFieldDecorator('username', {
                    rules: [{ required: true, message: 'Please input your username!' }],
                })(
                    <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Username"
                    />,
                )}
                </Form.Item>
                <Form.Item label="密码">
                
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
                <Form.Item>
                {getFieldDecorator('remember', {
                    valuePropName: 'checked',
                    initialValue: true,
                })}
                
                <Button type="primary" htmlType="submit" className="login-form-button">
                   登录
                </Button>
                
                </Form.Item>
            </Form>
            </div>
        )
    }
   
}

const mapDispatchToProps=(dispatch)=>({
    handleSubmit(e){
        e.preventDefault()   //阻止默认事件
        this.props.form.validateFields((err,values)=>{
            // console.log(values)
            dispatch(loginActionAsync(values))
        })
        console.log(this)
        this.props.history.push("/admin")
    }
})
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);
export default connect(null,mapDispatchToProps)(WrappedNormalLoginForm)