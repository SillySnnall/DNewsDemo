/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TabBarIOS,
    NavigatorIOS,
    Image
} from 'react-native';

let Home = require('../Component/XMGHome');
let Find = require('../Component/XMGFind');
let Message = require('../Component/XMGMessage');
let Mine = require('../Component/XMGMine');

class Main extends Component<{}> {

    constructor() {
        super();
        this.state = {
            selectedItem: 'home'
        }
    }

    render() {
        return (
            <TabBarIOS
                tintColor='orange'
            >
                {/*首页*/}
                <TabBarIOS.Item
                    icon={{uri: 'tabbar_home'}}
                    title='首页'
                    selectedIcon={{uri: 'tabbar_home_highlighted'}}
                    selected={this.state.selectedItem === 'home'}
                    onPress={() => {
                        this.setState({selectedItem: 'home'})
                    }}
                >
                    <NavigatorIOS
                        initialRoute={
                            {
                                component: Home,// 具体板块
                                title: '首页',// 标题
                                leftButtonIcon: {uri: 'navigationbar_friendattention'},
                                rightButtonIcon: {uri: 'navigationbar_pop'},
                            }
                        }
                        style={{flex: 1}}
                        tintColor='orange'
                    />
                </TabBarIOS.Item>
                {/*发现*/}
                <TabBarIOS.Item
                    icon={{uri: 'tabbar_discover'}}
                    title='发现'
                    selectedIcon={{uri: 'tabbar_discover_highlighted'}}
                    selected={this.state.selectedItem === 'discover'}
                    onPress={() => {
                        this.setState({selectedItem: 'discover'})
                    }}
                >
                    <NavigatorIOS
                        initialRoute={
                            {
                                component: Find,// 具体板块
                                title: '发现',// 标题
                            }
                        }
                        style={{flex: 1}}
                    />

                </TabBarIOS.Item>
                {/*消息*/}
                <TabBarIOS.Item
                    icon={{uri: 'tabbar_message_center'}}
                    title='消息'
                    selectedIcon={{uri: 'tabbar_message_center_highlighted'}}
                    selected={this.state.selectedItem === 'message'}
                    onPress={() => {
                        this.setState({selectedItem: 'message'})
                    }}
                >
                    <NavigatorIOS
                        initialRoute={
                            {
                                component: Message,// 具体板块
                                title: '消息',// 标题
                            }
                        }
                        style={{flex: 1}}
                    />

                </TabBarIOS.Item>
                {/*我的*/}
                <TabBarIOS.Item
                    icon={{uri: 'tabbar_profile'}}
                    title='我的'
                    selectedIcon={{uri: 'tabbar_profile_highlighted'}}
                    selected={this.state.selectedItem === 'profile'}
                    onPress={() => {
                        this.setState({selectedItem: 'profile'})
                    }}
                >
                    <NavigatorIOS
                        initialRoute={
                            {
                                component: Mine,// 具体板块
                                title: '我的',// 标题
                            }
                        }
                        style={{flex: 1}}
                    />

                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

// 输出类
module.exports = Main;
