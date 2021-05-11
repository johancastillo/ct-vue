import { useEffect, useState, useContext } from 'react'


// Components
import Ads from "../components/Ads"
import CarouselProducts from "../components/CarouselProducts"
import Footer from "../components/Footer"
import FullBanner from "../components/FullBanner"
import Header from "../components/Header"
import Slider from "../components/Slider"
import TabProducts from '../components/TabProducts'
import TopBar from "../components/TopBar"
import BrandsCarousel from '../components/BrandsCarousel'
import GoToTop from '../components/GoToTop'
// Data
import data from './../data.json'
import MoneyTwo from '../components/MoneyTwo'
// Context
import UserContext from '../context/User/UserContext'



const Home = () => {

    const [products, setProducts] = useState(data)
    const [productsTab, setProductsTab] = useState(data.populars.slice(0, 12))

    


    useEffect(() => {
        
    }, [])

    return (
        <>
            

            <main id="content" role="main">
                <Slider device="600" />

                
                <MoneyTwo />
                
                <br/>
                <br/>

                <div className="container">

                    {/* <!-- Banner --> */}
                    

                    <Ads />

                    {/* <!-- End Banner --> */}

                    {/* <!-- Deals-and-tabs --> */}
                    <div className="mb-5">
                        <div className="row">


                            {/* <!-- <Offer></Offer> --> */}



                            <TabProducts data={productsTab}></TabProducts>
                        </div>
                    </div>
                    {/* <!-- End Deals-and-tabs --> */}

                    <FullBanner />

                    <CarouselProducts 
                        category="Tecnología"
                        products={products.populars}
                    />

                    <FullBanner />

                    <CarouselProducts 
                        category="Tecnología"
                        products={products.populars}
                    />

                    <FullBanner />

                    <CarouselProducts 
                        category="Tecnología"
                        products={products.populars}
                    />

                    <FullBanner />

                    <CarouselProducts 
                        category="Tecnología"
                        products={products.populars}
                    />

                    <BrandsCarousel />

                </div>



                

            </main>
            
            <Footer />


            <GoToTop />
        </>
    )
}

export default Home

