import { useContext } from 'react'
import UserContext from '../context/User/UserContext'




const Money = () => {

    const { money, ChangeMoney } = useContext(UserContext)

    return (
        <>
            <div className="money usa" style={ money == 'USD' ? {background: 'blue'} : {} }
                onClick={ChangeMoney}
            >
                <div className="flag">
                    <img src="./assets/img/flags/Bandera-USA-11.png" alt="" />
                </div>

                <div className="symbol">$</div>
            </div>

            <div className="money vnzla" style={ money == 'BS' ? {background: 'blue'} : {} }
                onClick={ChangeMoney}
            >
                <div className="flag">
                    <img src="./assets/img/flags/Bandera-Vzla.png" alt="" />
                </div>

                <div className="symbol">Bs.</div>
            </div>
        </>
    )
}

export default Money

