import React from "react"
import {Form, Icon, Input, Button } from 'antd'
import {connect} from "react-redux"
class FormCon extends React.Component{
    constructor(){
        super()
        this.state={
            validateStatus:"",
            msg:""
        }
    }
    render(){
        console.log(this.props)
        let {data}=this.props
        let {validateStatus,msg}=this.state
        const { getFieldDecorator } = this.props.form;
        return(
            <Form
            labelCol={{span:4}}
            wrapperCol={{span:20}}
             onSubmit={this.handleSubmit} 
             className="login-form">
                <Form.Item
                    label="商家ID"
                    validateStatus={validateStatus}
                >
                    {getFieldDecorator('id', {
                    rules: [{ required: true, message: 'Please input your id!' },
                    {validator:this.handleValidator.bind(this),message:{msg}}
                ],
                    
                  })(
                    <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="id"
                    // value={data.id}
                    />
                )}
                </Form.Item>
                <Form.Item
                    label="商家名称"
                    validateStatus="success"
                >
                    {getFieldDecorator('name', {
                    rules: [{ required: true, message: 'Please input your name!' }],
                  })(
                    <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="name"
                    // value={data.name}
                    />
                  )}
                </Form.Item>
                <Form.Item
                    label="商家地址"
                    validateStatus="success"
                >
                    {getFieldDecorator('address', {
                    rules: [{ required: true, message: 'Please input your address!' }],
                  })(
                    <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="address"
                    // value={data.address}
                    />
                  )}
                </Form.Item>
                <Form.Item
                    label="商家电话"
                    validateStatus="success"
                >
                    {getFieldDecorator('tel', {
                    rules: [{ required: true, message: 'Please input your tel!' }],
                  })(
                    <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="tel"
                    // value={data.tel}
                    />
                  )}
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        点击
                    </Button>
                </Form.Item>
        </Form>
        )
    }
    //自定义校验
    handleValidator(rule, value, callback){
        console.log(rule, value, callback)
        if(value!="123"){
            this.setState({
                validateStatus:"error",
                msg:"输入123"
            })
        }else{
            this.setState({
                validateStatus:"success",
                msg:"666"
            })
        }
        callback()
    }
}
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(FormCon);
const mapStateToProps=(state)=>({
    data:state.tab.data
})
export default connect(mapStateToProps)(WrappedNormalLoginForm)