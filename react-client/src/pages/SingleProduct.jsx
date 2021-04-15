import { useEffect, useState } from 'react'
// Components
import Breadcrumb from "../components/Breadcrumb"
import Footer from "../components/Footer"
import RelatedProducts from "../components/RelatedProducts"
import SingleProductBody from "../components/SingleProductBody"
import SingleProductTab from "../components/SingleProductTab"


const SingleProduct = ({params}) => {

    
    
    useEffect(() => {
        console.log(params)
    }, [])
    
    return(
        <>
            <main id="content" role="main">
                <Breadcrumb />

                <div className="container">
                    <SingleProductBody />
                    <SingleProductTab />

                    <RelatedProducts />
                </div>
            </main>

            <Footer />
        </>
    )
}

export default SingleProduct



