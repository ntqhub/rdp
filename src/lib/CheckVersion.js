import React, {Component} from 'react';
import {Alert, Linking} from 'react-native';
import axios from "./Axios";

export default () => {
    axios.get('v1/version.get')
        .then(response => {
            let verion_remote = response.version.split('.');
            let verion_app = response.version.split('.');
            if (
                parseInt(verion_app[0] + "" + verion_app[1] + "" + verion_app[2]) < parseInt(verion_remote[0] + "" + verion_remote[1] + "" + verion_remote[2])
            ) {
                Alert.alert(
                    "Доступно обновление",
                    response.description,
                    [
                        {
                            text: "Отмена", onPress: () => {
                            }
                        },
                        {
                            text: "Обновить", onPress: () => {
                                Linking.openURL(response.apk)
                            }
                        }
                    ]
                );
            }
        });
};
