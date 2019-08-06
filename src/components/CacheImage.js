import React, {Component} from 'react'
import {Image, Platform, PermissionsAndroid} from 'react-native';

let RNFS = require('react-native-fs');
import shorthash from 'shorthash';

class CacheImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            source: null
        };
        PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE)
    }

    loadFile = (path) => {
        console.log(path);
        this.setState({source: {uri: path}});
    };

    downloadFile = (uri, path) => {
        RNFS.downloadFile({
            fromUrl: uri,
            toFile: path,
            background: false,
        }).promise
            .then(res => {
                this.loadFile(path)
            });
        this.loadFile(path)
    };

    componentDidMount() {
        const {uri} = this.props;
        if (!uri) return true;
        const name = shorthash.unique(uri);
        const extension = uri.split('.').pop();
        const dir = (Platform.OS === 'android') ? 'file://' : '';
        const path = `${dir}${RNFS.DocumentDirectoryPath}/${name}.${extension}`;
        RNFS.exists(path).then(exists => {
            if (exists) {
                this.loadFile(path);
            } else {
                this.downloadFile(uri, path);
            }
        })
    }

    static defaultProps = {
        style: {},
        resizeMode: 'cover'
    };

    render() {
        return (
            <Image style={[{backgroundColor: '#A1AABA'}, this.props.style]} source={this.state.source}
                   resizeMode={this.props.resizeMode}/>
        )
    }
}

export default CacheImage;