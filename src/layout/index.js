import React from "react"
import "./index.css"
import SliderNav from "../common/sliderNav"
import { Layout} from 'antd';
import TopNav from "../common/topNav"
const { Content, Sider } = Layout;
// const { SubMenu } = Menu;
export default class LayoutCom extends React.Component{
    render(){
        return(
            <Layout style={{height:'100%'}} className="w">
                <TopNav/>
                <Layout>
                    <Sider width={200} style={{ background: '#fff' }}>
                   {/* 左边部分 */}
                   <SliderNav/>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                    <Content
                        style={{
                        background: '#fff',
                        padding: 24,
                        margin: 0,
                        minHeight: 280,
                        }}
                    >
                        {this.props.children}
                    </Content>
                    </Layout>
                </Layout>
                </Layout>
        )
    }
}