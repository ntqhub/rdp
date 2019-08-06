export const Set = (value) => ({
    type: 'USER_SUMMARY_ADD_SET',
    payload: value,
});

export const Clear = () => ({
    type: 'USER_SUMMARY_ADD_CLEAR',
    payload: true,
});