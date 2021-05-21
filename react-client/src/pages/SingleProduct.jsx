import { useEffect, useState } from 'react'
// Components
import Breadcrumb from "../components/Breadcrumb"
import Footer from "../components/Footer"
import RelatedProducts from "../components/RelatedProducts"
import SingleProductBody from "../components/SingleProductBody"
import SingleProductTab from "../components/SingleProductTab"
import axios from "axios"

const SingleProduct = ({params}) => {

    const [product, setProduct] = useState({})
    
    
    useEffect(() => {
        // Position page top
        window.scrollTo(0,0)

        axios.get(`http://localhost:3004/products/${params.id}`)
        .then(response => setProduct(response.data))
        .catch(err => console.log(err))

        // Test
        console.log(params)

    }, [])
    
    return(
        <>
            <main id="content" role="main">
                <Breadcrumb />

                <div className="container">
                    <SingleProductBody data={product} />

                    <SingleProductTab />

                    <RelatedProducts />
                </div>
            </main>

            <Footer />
        </>
    )
}

export default SingleProduct



