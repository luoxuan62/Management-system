import React from "react"
import {Layout, Menu,Row, Col } from 'antd';
import logo from "../../static/logo.png"
const {Header} = Layout;
// const { SubMenu } = Menu;
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
                   <Menu className="tuichu"
                   defaultSelectedKeys={['login']}>
                       {/* <SubMenu
                       title={
                           <span className="submenu-title-wrapper">
                           <Icon type="setting" />
                               Admin
                           </span>
                       }
                       >
                       <Menu.ItemGroup title="Item 1">
                           <Menu.Item key="setting:1">退出登录</Menu.Item>
                           <Menu.Item key="setting:2">Option 2</Menu.Item>
                       </Menu.ItemGroup>
                       </SubMenu> */}
                       
                       <Menu.Item key="login">退出登录</Menu.Item>
                   </Menu>
               </Col>
             </Row>
           </Header>
        )
    }
}