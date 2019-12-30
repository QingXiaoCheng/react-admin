import React , {Component} from 'react'
import {Layout, Menu, Icon } from 'antd';

import './home.css'

const { SubMenu } = Menu; 
const { Header, Sider, Content } = Layout;
class Home extends Component{
   
    
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render(){
        return (
            <div id="home-root">
                 <Layout>
                    <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className="logo" >
                        <a target="_blank" href="https://github.com/cd-dongzi"></a>
                    </div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                        <Icon type="user" />
                        <span>首页</span>
                        </Menu.Item>


                        <SubMenu
                            key="sub1"
                            title={
                            <span>
                                <Icon type="calendar" />
                                <span>React知识点</span>
                            </span>
                            }
                        >
                            <Menu.Item key="5">常用语法</Menu.Item>
                            <Menu.Item key="6">生命周期</Menu.Item>
                            <Menu.Item key="7">组件写法</Menu.Item>
                            <Menu.Item key="8">双向绑定</Menu.Item>
                        </SubMenu>


                        <SubMenu
                            key="sub2"
                            title={
                            <span>
                                <Icon type="calendar" />
                                <span>组件</span>
                            </span>
                            }
                        >
                            <Menu.Item key="5">Option 5</Menu.Item>
                            <Menu.Item key="6">Option 6</Menu.Item>
                            <Menu.Item key="7">Option 7</Menu.Item>
                            <Menu.Item key="8">Option 8</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub3"
                            title={
                            <span>
                                <Icon type="calendar" />
                                <span>React动画</span>
                            </span>
                            }
                        >
                            <Menu.Item key="5">Option 5</Menu.Item>
                            <Menu.Item key="6">Option 6</Menu.Item>
                            <Menu.Item key="7">Option 7</Menu.Item>
                            <Menu.Item key="8">Option 8</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub4"
                            title={
                            <span>
                                <Icon type="calendar" />
                                <span>CSSModule</span>
                            </span>
                            }
                        >
                            <Menu.Item key="5">Option 5</Menu.Item>
                            <Menu.Item key="6">Option 6</Menu.Item>
                            <Menu.Item key="7">Option 7</Menu.Item>
                            <Menu.Item key="8">Option 8</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub5"
                            title={
                            <span>
                                <Icon type="calendar" />
                                <span>图表</span>
                            </span>
                            }
                        >
                            <Menu.Item key="5">Option 5</Menu.Item>
                            <Menu.Item key="6">Option 6</Menu.Item>
                            <Menu.Item key="7">Option 7</Menu.Item>
                            <Menu.Item key="8">Option 8</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub6"
                            title={
                            <span>
                                <Icon type="calendar" />
                                <span>ErrorPage</span>
                            </span>
                            }
                        >
                            <Menu.Item key="5">Option 5</Menu.Item>
                            <Menu.Item key="6">Option 6</Menu.Item>
                            <Menu.Item key="7">Option 7</Menu.Item>
                            <Menu.Item key="8">Option 8</Menu.Item>
                        </SubMenu>
                    </Menu>
                    </Sider>
                    <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                        className="trigger"
                        type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                        onClick={this.toggle}
                        />
                    </Header>
                    <Content
                        style={{
                        margin: '24px 16px',
                        padding: 24,
                        background: '#fff',
                        minHeight: 280,
                        }}
                    >
                        Content
                    </Content>
                    </Layout>
                </Layout>
            </div>
        )
    }
}


export default Home;