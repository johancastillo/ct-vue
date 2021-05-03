
import { useState, useContext } from 'react'
import UserContext from '../context/User/UserContext'

// Images
import USA from './../images/USA.png'
import VNZLA from './../images/VNZLA.png'

const MoneyTwo = () => {

    const [active, setActive] = useState(false)

    const { money, ChangeMoneyUSD, ChangeMoneyBS } = useContext(UserContext)

    return (
        <div class="money-container">

            <div class={active ? "select-money active" : "select-money"} id="select-money">
                
                <div>
                    <div class="option" onClick={ChangeMoneyUSD}>
                        <img src={USA} alt="" width="100%" />
                    </div>
                    <span>USD</span>
                </div>

                <div>
                    <div class="option" onClick={ChangeMoneyBS}>
                        <img src={VNZLA} alt="" width="100%" />
                    </div>
                    <span>VE BS</span>
                </div>

            </div>

            <div class="money" id="money" onClick={() => setActive(!active)}
                style={money === 'USD' ? { background: '#fff' } : { background: '#fff' }}
            >
                <div class="flat">
                    {
                        money === 'USD' ?
                            <img src={USA} alt="" />
                            :
                            <img src={VNZLA} alt="" />
                    }
                </div>
            </div>

        </div>
    )
}


export default MoneyTwo