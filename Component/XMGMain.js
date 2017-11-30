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

class Main extends Component<{}> {
    render() {
        return (
            <TabBarIOS>
                {/*首页*/}
                <TabBarIOS.Item
                    icon={{uri:'tabbar_home'}}
                    title='首页'
                >
                </TabBarIOS.Item>
                {/*消息*/}
                <TabBarIOS.Item>

                </TabBarIOS.Item>
                {/*发现*/}
                <TabBarIOS.Item>

                </TabBarIOS.Item>
                {/*我的*/}
                <TabBarIOS.Item>

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
