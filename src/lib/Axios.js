import React, {Component} from 'react';
import axios from "axios";
import DeviceInfo from 'react-native-device-info';
import {Platform} from 'react-native';
import {Toast} from 'native-base';
import storage from 'redux-persist/lib/storage';

const ReturnAxiosInstance = () => {
    const AxiosInstance = axios.create({
        baseURL: 'https://api.client.manana.life/',
        timeout: 10000,
        responseType: "json",
        headers: {
            'Content-Type': 'application/json',
        },
    });

    AxiosInstance.interceptors.request.use(
        async (config) => {
            config.headers.token = await storage.getItem('token');
            config.headers.fcntoken = await storage.getItem('fcntoken');
            //config.headers.geo = JSON.stringify( await GEO() ),
            config.headers.device = JSON.stringify({
                Platform: Platform.OS,
                Version: Platform.Version,
                BatteryLevel: await DeviceInfo.getBatteryLevel(),
                Brand: DeviceInfo.getBrand(),
                Carrier: DeviceInfo.getCarrier(),
                DeviceId: DeviceInfo.getDeviceId(),
                VersionApp: DeviceInfo.getVersion(),
                SystemVersion: DeviceInfo.getSystemVersion(),
                Timezone: DeviceInfo.getTimezone(),
            });
            return config;
        },
        response => response,
        error => error, //Promise.reject(error)
    );

    AxiosInstance.interceptors.response.use(
        response => {
            console.log({
                url: response.config.url,
                data: response.data,
                headers: response.config.headers,
                params: response.config.params,
            });
            if(
                typeof response.data.auth !== 'undefined' &&
                response.data.auth === 0
            ){
                storage.removeItem('token');
            }else{
                if( typeof response.data.error !== 'undefined' ){
                    console.log(response.data.error);
                    Toast.show({
                        text: response.data.error,
                        duration: 1500,
                        type: "danger",
                        textStyle: {
                            //fontSize: verticalScale(12),
                            fontFamily: 'PFBeauSansPro-Regular',
                            paddingLeft: 10,
                            paddingRight: 10,
                        }
                    });
                }
            }

            if( typeof response.data.response === 'undefined' || typeof response.data.response === null || response.data.response === '' ){
                response = {};
            }else{
                response = response.data.response;
            }
            return response;
        },
        error => {
            console.log(error);
            if( typeof error !== 'undefined' ){
                if (error.code === 'ECONNABORTED')
                    Toast.show({
                        text: 'Время запроса истекло',
                        duration: 1500,
                        type: "danger"
                    });
                else {
                    Toast.show({
                        text: error.code,
                        duration: 1500,
                        type: "danger"
                    });
                }
            }
            return error;
        },
    );

    return AxiosInstance;
};
export default ReturnAxiosInstance();