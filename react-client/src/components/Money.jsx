

const Money = () => {
    return(
        <>
            <div v-on:click="money = 'dollars'" className="money usa">
            <div className="flag">
                <img src="./assets/img/flags/Bandera-USA-11.png" alt="" />
            </div>
            
            <div className="symbol">$</div>
        </div>

        <div v-on:click="money = 'bolivares'" className="money vnzla">
            <div className="flag">
                <img src="./assets/img/flags/Bandera-Vzla.png" alt="" />
            </div>
            
            <div className="symbol">Bs.</div>
        </div>
        </>
    )
}

export default Money

