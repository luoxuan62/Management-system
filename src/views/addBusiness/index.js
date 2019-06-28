import React from "react"
import { Form, Icon, Input, Button} from 'antd';
import wangEditor from "wangeditor"
class AddBusiness extends React.Component{
    render(){
        const { getFieldDecorator } = this.props.form;
        return(
            <Form onSubmit={this.handleSubmit.bind(this)} className="login-form">
                <Form.Item>
                {getFieldDecorator('name', {
                    rules: [{ required: true, message: 'Please input your username!' }],
                })(
                    <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="商家名称"
                    />
                    
                )}
                </Form.Item>
                <Form.Item>
          {getFieldDecorator('address', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="address"
              placeholder="商家地址"
            />,
          )}
        </Form.Item>
            {/* 富文本编辑器 */}
        <Form.Item>
           {getFieldDecorator('content')(
              <div ref={content_editor=>this.content_editor = content_editor}></div>
           )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
           提交
          </Button>
        </Form.Item>
            </Form>
        )
    }
    // 富文本编辑器
    componentDidMount(){
      this.editor2 = new wangEditor(this.content_editor)
      //初始化的时候onChange绑定
      this.editor2.customConfig.onchange =(html)=>{
        // html 即变化之后的内容
        // console.log(html)
        this.props.form.setFieldsValue({
          content:html
        })
    }
    this.editor2.create()
    //在创建之后  不能放在前面
    this.editor2.txt.html('<p>商家简介</p>')
    }
    handleSubmit(e){
      e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
      })
    }
}
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(AddBusiness);
export default WrappedNormalLoginForm