import axios from '../lib/Axios';

export const MessageGetData = () => {
    return (dispatch, getState) => {
        const {loading} = getState().Message;
        if (loading === true) return;
        dispatch({type: 'MESSAGE_GET_DATA_LOAD'});
        axios.get('v1/message.getChat', {params: {}})
            .then(response => {
                dispatch({type: 'MESSAGE_GET_DATA_SUCCESS', payload: response});
            })
            .catch(error => {
                dispatch({type: 'MESSAGE_GET_DATA_ERROR', payload: {error}});
            });
    }
};