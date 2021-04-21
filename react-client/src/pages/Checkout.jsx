import Accordion from "../components/Accordion"
import BrandsCarousel from "../components/BrandsCarousel"
import Breadcrumb from "../components/Breadcrumb"
import CheckoutForm from "../components/CheckoutForm"
import Footer from "../components/Footer"


const Checkout = () => {
    return (
        <>

            <main id="content" role="main" class="checkout-page">
                <Breadcrumb />

                <div class="container">
                    <div class="mb-5">
                        <h1 class="text-center">Checkout</h1>
                    </div>

                    <Accordion name="one" />
                    <Accordion name="two" />

                    <CheckoutForm />

                    <BrandsCarousel />


                </div>


            </main>

            <Footer />
        </>
    )
}



export default Checkout





