import React from "react"
import {Layout, Menu,Row, Col ,Icon} from 'antd';
import logo from "../../static/logo.png"
import "./index.css"
const {Header} = Layout;
const { SubMenu } = Menu;
export default class TopNav extends React.Component{
    render(){
        return(
            <Header className="header">
            <Row>
               <Col span={8}>
                   <div className="logo" >
                       <img src={logo} alt="" />
                   </div>
               </Col>
               <Col span={14}>
                   <Menu
                   theme="dark"
                   mode="horizontal"
                   defaultSelectedKeys={['1']}
                   style={{ lineHeight: '64px' }}
                   >
                   <Menu.Item key="1">招生系统</Menu.Item>
                   <Menu.Item key="2">教学管理</Menu.Item>
                   <Menu.Item key="3">工单系统</Menu.Item>
                   </Menu>
               </Col>
               <Col span={2}>
                   <Menu mode="horizontal" className="adminInfo">
                       <SubMenu
                       title={
                           <span className="submenu-title-wrapper">
                           <Icon type="setting" />
                               admin
                           </span>
                       }
                       >
                        <Menu.Item key="setting:1">退出登录</Menu.Item>
                       {/* <Menu.ItemGroup title="Item 1">
                           
                       </Menu.ItemGroup> */}
                       </SubMenu>
                   </Menu>
               </Col>
             </Row>
           </Header>
        )
    }
}