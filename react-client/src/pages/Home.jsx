import { useEffect } from 'react'
import $ from 'jquery'
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

const products = {
    populars: [
        { id: 1, category: "Redes", title: "Tarjeta LAN con Antena Netpro 150 Mts", price: 12.00, image: "https://d13lnhwm7sh4hi.cloudfront.net/wp-content/uploads/2020/09/25172522/6315825193672_tarjeta-lan-antena-netpro-150-mts-01-300x300.jpg" },
        { id: 2, category: "Accesorios", title: "Mouse Inalámbrico Premium Rojo – IME", price: 11.00, image: "https://d13lnhwm7sh4hi.cloudfront.net/wp-content/uploads/2019/10/18170133/ime-26436-mouse-inalambrico-premium-rojo-1-300x300.jpg" },
        { id: 3, category: "Accesorios", title: "Mousepad Rubber Azul con Logo – IME", price: 1.00, image: "https://d13lnhwm7sh4hi.cloudfront.net/wp-content/uploads/2019/10/18170206/ime-25837-mousepad-rubber-azul-logo-1-300x300.jpg" },
        { id: 4, category: "Audio", title: "Earbuds Wireless White", price: 25.00, image: "https://d13lnhwm7sh4hi.cloudfront.net/wp-content/uploads/2020/12/01154924/501108016-earbuds-wireless-white-01-300x300.jpg" },
        { id: 5, category: "Audio", title: "Earbuds Wireless White", price: 250, image: "https://d13lnhwm7sh4hi.cloudfront.net/wp-content/uploads/2020/12/01154924/501108016-earbuds-wireless-white-01-300x300.jpg" },
        { id: 6, category: "Audio", title: "Earbuds Wireless White", price: 250, image: "https://d13lnhwm7sh4hi.cloudfront.net/wp-content/uploads/2020/12/01154924/501108016-earbuds-wireless-white-01-300x300.jpg" },
        { id: 7, category: "Audio", title: "Earbuds Wireless White", price: 250, image: "https://d13lnhwm7sh4hi.cloudfront.net/wp-content/uploads/2020/12/01154924/501108016-earbuds-wireless-white-01-300x300.jpg" },
        { id: 8, category: "Audio", title: "Earbuds Wireless White", price: 250, image: "https://d13lnhwm7sh4hi.cloudfront.net/wp-content/uploads/2020/12/01154924/501108016-earbuds-wireless-white-01-300x300.jpg" },
    ],
    bestSellers: [
        { id: 1, category: "Audio", title: "Earbuds Wireless White", price: 25.00, image: "https://d13lnhwm7sh4hi.cloudfront.net/wp-content/uploads/2020/12/01154924/501108016-earbuds-wireless-white-01-300x300.jpg" },
        { id: 2, category: "Accesorios", title: "Mouse Inalámbrico Premium Rojo – IME", price: 11.00, image: "https://d13lnhwm7sh4hi.cloudfront.net/wp-content/uploads/2019/10/18170133/ime-26436-mouse-inalambrico-premium-rojo-1-300x300.jpg" },
        { id: 3, category: "Accesorios", title: "Mousepad Rubber Azul con Logo – IME", price: 1.00, image: "https://d13lnhwm7sh4hi.cloudfront.net/wp-content/uploads/2019/10/18170206/ime-25837-mousepad-rubber-azul-logo-1-300x300.jpg" },
        { id: 4, category: "Audio", title: "Earbuds Wireless White", price: 250, image: "https://d13lnhwm7sh4hi.cloudfront.net/wp-content/uploads/2020/12/01154924/501108016-earbuds-wireless-white-01-300x300.jpg" },
        { id: 5, category: "Audio", title: "Earbuds Wireless White", price: 250, image: "https://d13lnhwm7sh4hi.cloudfront.net/wp-content/uploads/2020/12/01154924/501108016-earbuds-wireless-white-01-300x300.jpg" },
        { id: 6, category: "Audio", title: "Earbuds Wireless White", price: 250, image: "https://d13lnhwm7sh4hi.cloudfront.net/wp-content/uploads/2020/12/01154924/501108016-earbuds-wireless-white-01-300x300.jpg" },
        { id: 7, category: "Audio", title: "Earbuds Wireless White", price: 250, image: "https://d13lnhwm7sh4hi.cloudfront.net/wp-content/uploads/2020/12/01154924/501108016-earbuds-wireless-white-01-300x300.jpg" },
        { id: 8, category: "Audio", title: "Earbuds Wireless White", price: 250, image: "https://d13lnhwm7sh4hi.cloudfront.net/wp-content/uploads/2020/12/01154924/501108016-earbuds-wireless-white-01-300x300.jpg" },
    ]
}



const Home = () => {

    useEffect(() => {
        
    }, [])

    return (
        <>
            

            <main id="content" role="main">
                <Slider device="600" />
                
                <br/>
                <br/>

                <div className="container">

                    {/* <!-- Banner --> */}
                    

                    <Ads />

                    {/* <!-- End Banner --> */}

                    {/* <!-- Deals-and-tabs --> */}
                    <div className="mb-5">
                        <div className="row">

                            {/* <!-- Deal --> */}

                            {/* <!-- <Offer></Offer> --> */}

                            {/* <!-- End Deal --> */}

                            {/* <!-- Tab Prodcut --> */}

                            <TabProducts data={products.populars}></TabProducts>
                            {/* <!-- End Tab Prodcut --> */}
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

