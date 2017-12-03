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
    Image,
    TouchableOpacity,
    ListView
} from 'react-native';

const url_api = "http://192.168.31.131:8081/NetData.json";
const key_word = 'T1348647853363';

// 导入本地数据
let LocalData = require('../LocalData.json');

class Home extends Component<{}> {

    constructor() {
        super();

        this.state = {
            // ListView头部数据源
            headerDataArr: [],
            // cell的数据源
            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            })
        }
    }

    // 请求网络数据
    componentDidMount() {
        this.loadDataFromNet()
    }

    loadDataFromNet() {
        fetch(url_api)
            .then((response) => response.json())
            .then((responseData) => {
                this.dealWithData(responseData);
            })
            .catch((error) => {
                if (error) {
                    // 特殊处理
                    this.dealWithData(LocalData)
                }
            })
    }

    dealWithData(responseData) {
        let jsonData = responseData[key_word];
        let headerArr = [], listDataArr = [];
        for (let i = 0; i < jsonData.length; i++) {
            let data = jsonData[i];

            if (data.hasAD === 1) {
                // 取出头部
                headerArr = data.ads;
            } else {
                // 取出list数据
                listDataArr.push(data)
            }
        }

        // 更新状态机
        this.setState({
            headerDataArr: headerArr,
            dataSource: this.state.dataSource.cloneWithRows(listDataArr)
        })
    }


    renderRow(){
        return(
            <TouchableOpacity activeOpacity={0.5}>
                <View>
                    <Image/>
                    <View>
                        <Text style={styles.titleStyle}>xxx</Text>
                        <Text>xxx</Text>
                        <Text>xxx</Text>
                    </View>

                </View>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow()}
            />
        );
    }
}

Home.getDefaultProps = {};


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
module.exports = Home;
