//import React, {Component} from 'react';
import {Toast} from 'native-base';

export default (title = '') => {
    if (title !== '') {
        Toast.show({
            text: title,
            duration: 3000,
            type: "danger"
        });
    }
};