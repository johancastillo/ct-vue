import {useReducer} from "react"
import UserReducer from "./UserReducer"
import UserContext from "./UserContext"
import axios from "axios"

const UserState = props => {
    
    const initialState = {
        users: [],
        selectedUser: null,
        money: 'USD',
        cart: 0,
        cartProducts: [],
        cartTotal: 0
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

    const addCart = quantity => {
        dispatch({
            type: "ADD_CART",
            payload: quantity
        })
    }

    const addProductCart = product => {
        dispatch({
            type: "ADD_PRUDCT_CART",
            payload: product
        })
    }

    const changeTotal = newTotal => {
        dispatch({
            type: "CHANGE_TOTAL",
            payload: newTotal
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
            cart: state.cart,
            cartProducts: state.cartProducts,
            cartTotal: state.cartTotal,
            addProductCart,
            addCart,
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
