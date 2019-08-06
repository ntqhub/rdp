import axios from '../lib/Axios';

export const JobActiveGetData = () => {
    return (dispatch, getState) => {
        const {loading, page} = getState().Job;
        if (loading === true) return;
        dispatch({type: 'JOB_ACTIVE_GET_DATA_LOAD'});

        axios.get('v1/job.get_active', {params: {}})
            .then(response => {
                dispatch({type: 'JOB_ACTIVE_GET_DATA_SUCCESS', payload: {}});

                dispatch({type: 'JOB_ACTIVE_SET_TIME_START', payload: response.time_start});
            })
            .catch(error => {
                dispatch({type: 'JOB_ACTIVE_GET_DATA_ERROR', payload: {error}});
            });
    }
};