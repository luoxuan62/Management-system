import React from "react"
import { Menu, Icon } from 'antd';
import { pageRoute } from "../../routers"
import {withRouter} from "react-router-dom"

const { SubMenu }  = Menu;
class SliderNav extends React.Component{
    handleTo({key}){
       this.props.history.push(key);
    }
    render(){
        return (
            <Menu
                mode="inline"
                defaultSelectedKeys={['/admin/home']}
                onClick={this.handleTo.bind(this)}
                style={{ height: '100%', borderRight: 0 }}
            >
                {
                    pageRoute.map((item)=>(
                        item.children?
                            <SubMenu
                                key={item.pathname}
                                title={
                                    <span>
                                        <Icon type={item.icon} />
                                        {item.title}
                                    </span>
                            }
                        >
                                {
                                    item.children.map((children)=>(
                                        <Menu.Item key={children.pathname}>{children.title}</Menu.Item>
                                    ))
                                }
                        </SubMenu>:<Menu.Item  key={item.pathname}><Icon type={item.icon} />{item.title}</Menu.Item>
                    ))
                }





            </Menu>
        )
    }
}

export default withRouter(SliderNav)