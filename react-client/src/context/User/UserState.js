import {useReducer} from "react"
import UserReducer from "./UserReducer"
import UserContext from "./UserContext"
import axios from "axios"

const UserState = props => {
    
    const initialState = {
        users: [],
        selectedUser: null,
        money: 'USD'
    }

    const [state, dispatch] = useReducer(UserReducer, initialState)


    const getUsers = async() => {
        const response = await axios.get("https://reqres.in/api/users")
        
        dispatch({
            type: "GET_USERS",
            payload: response.data.data
        })
    }

    const ChangeMoneyUSD = async () => {
        dispatch({
            type: "CHANGE_MONEY_USD",
            payload: 'USD'
        })
    }

    const ChangeMoneyBS = async () => {
        dispatch({
            type: "CHANGE_MONEY_BS",
            payload: 'BS'
        })
    }

    const getProfile = async(id) => {
        const response = await axios.get("https://reqres.in/api/users/" + id)
        
        dispatch({
            type: "GET_PROFILE",
            payload: response.data.data
        })
    }

    return(
        <UserContext.Provider value={{
            users: state.users,
            selectedUser: state.selectedUser,
            money: state.money,
            ChangeMoneyUSD,
            ChangeMoneyBS,
            getUsers,
            getProfile
        }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState
