import {GET_USERS, GET_PROFILE, CHANGE_MONEY_USD, CHANGE_MONEY_BS} from "../types"

export default (state, action) => {
    const {payload, type} = action

    switch(type){
        case GET_USERS:
            return {
                ...state,
                users: payload
            }
        case GET_PROFILE:
            return {
                ...state,
                selectedUser: payload
            }
        case CHANGE_MONEY_USD:
            return {
                ...state,
                money: payload
            }
        case CHANGE_MONEY_BS:
            return {
                ...state,
                money: payload
            }
        default:
            return state
    }
} 
