import ACTION_TYPES from '../constants/actionTypes';


export const initUserAction = (user) => ({
    type : ACTION_TYPES.INIT_USER,
    payload : user
})

export const updateUserAction = (payload) => ({
    type : ACTION_TYPES.UPDATE_USER,
    payload : payload
})



