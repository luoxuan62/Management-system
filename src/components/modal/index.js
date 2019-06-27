import React from "react"
import {Modal} from 'antd'
import WrappedNormalLoginForm from "../../components/formCom"
export default class ModalCom extends React.Component{
    constructor(){
        super()
        this.state={
            visible:""
        }
    }
    componentWillReceiveProps(nextProps,nextContext){
        this.state.visible=nextProps.modalStatus
    }
    showModal = () => {
      this.setState({
        visible: true
      });
    };
  
    render(){
        return(
            <Modal
            title="修改商家信息"
            visible={this.state.visible}
            onOk={this.handleOk.bind(this)}
            onCancel={this.handleCancel.bind(this)}
          >
            <WrappedNormalLoginForm/>
          </Modal>
        )
    }
    handleOk(){
        this.setState({
            visible: false,
          })
    }
    handleCancel(){
        this.setState({
            visible: false,
          })
    }
}