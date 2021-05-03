
import { useState, useContext } from 'react'
import UserContext from '../context/User/UserContext'

const MoneyTwo = () => {

    const [active, setActive] = useState(false)

    const { money, ChangeMoneyUSD, ChangeMoneyBS } = useContext(UserContext)

    return (
        <div class="money-container">

            <div class={active ? "select-money active" : "select-money"} id="select-money">
                <div class="option" onClick={ChangeMoneyUSD}>
                    <img src="./assets/img/flags/Bandera-USA.png" alt="" width="100%" />
                </div>

                <div class="option" onClick={ChangeMoneyBS}>
                    <img src="./assets/img/flags/Bandera-Vzla.png" alt="" width="100%" />
                </div>
            </div>

            <div class="money" id="money" onClick={ () => setActive(!active) }
                style={ money === 'USD' ? {background: 'blue'} : {background: 'red'} }
            >
                <div class="flat">
                    {
                        money === 'USD' ?
                        <img src="./assets/img/flags/Bandera-USA.png" alt="" />
                        :
                        <img src="./assets/img/flags/Bandera-Vzla.png" alt="" />
                    }
                </div>
            </div>

        </div>
    )
}


export default MoneyTwo