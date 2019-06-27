import React from "react"
import {Form, Icon, Input, Button } from 'antd'
import {connect} from "react-redux"
class FormCon extends React.Component{
    render(){
        console.log(this.props)
        let {data}=this.props
        return(
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item
                    label="商家ID"
                    validateStatus="success"
                >
                    <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Username"
                    value={data.id}
                    />
                </Form.Item>
                <Form.Item
                    label="商家名称"
                    validateStatus="success"
                >
                    <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Username"
                    value={data.name}
                    />
                </Form.Item>
                <Form.Item
                    label="商家地址"
                    validateStatus="success"
                >

                    <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Username"
                    value={data.address}
                    />
                </Form.Item>
                <Form.Item
                    label="商家电话"
                    validateStatus="success"
                >
                    <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Username"
                    value={data.tel}
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        点击
                    </Button>
                </Form.Item>
        </Form>
        )
    }
}
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(FormCon);
const mapStateToProps=(state)=>({
    data:state.tab.data
})
export default connect(mapStateToProps)(WrappedNormalLoginForm)