import axios from '../lib/Axios';

export const JobGetData = (append = false) => {
    return (dispatch, getState) => {
        const {loading, page} = getState().Job;
        if (loading === true) return;
        dispatch({type: 'JOB_GET_DATA_LOAD'});

        axios.get('v1/job.get', {
            params: {
                page: (append === true) ? page + 1 : 1
            }
        })
            .then(response => {
                dispatch({type: 'JOB_GET_DATA_SUCCESS', payload: {items: response.items, append: append,}});
            })
            .catch(error => {
                dispatch({type: 'JOB_GET_DATA_ERROR', payload: {error}});
            });
    }
};