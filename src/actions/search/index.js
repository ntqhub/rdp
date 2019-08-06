export const SwitchMin = (value) => ({
    type: 'SWITCH_MIN_TOP',
    payload: value
});

export const SwitchMax = (value) => ({
    type: 'SWITCH_MAX_TOP',
    payload: value
});
export const SwitchMinBtm = (value) => ({
    type: 'SWITCH_MIN_BTM',
    payload: value
});

export const SwitchMaxBtm = (value) => ({
    type: 'SWITCH_MAX_BTM',
    payload: value
});

export const SwitchReserv = (reserv) => ({
    type: 'SWITCH_RESERV',
    payload: reserv
});
export const SwitchAnyTime = (reserv) => ({
    type: "SWITCH_ANY_TIME",
    payload: reserv
});
export const SwitchNoMatter = (reserv) => ({
    type: 'SWITCH_NO_MATTER',
    payload: reserv
});

export const Checked_F = (val) => ({
    type: 'CHECKED_F',
    payload: val
})
export const Checked_S = (val) => ({
    type: 'CHECKED_S',
    payload: val
})
export const Checked_T = (val) => ({
    type: 'CHECKED_T',
    payload: val
})