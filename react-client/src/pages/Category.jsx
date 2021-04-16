import Breadcrumb from "../components/Breadcrumb"
import CarouselProductsTwo from "../components/CarouselProductsTwo"
import ContentCategory from "../components/ContentCategory"
import Footer from "../components/Footer"
import LatestProducts from "../components/LatestProducts"
import ListCategory from "../components/ListCategory"
import Subcategory from "../components/Subcategory"


const Category = () => {
    return (
        <>
            <main id="content" role="main">

                <Breadcrumb />

                <div class="container">
                    <div class="row">
                        <div class="d-none d-xl-block col-xl-3 col-wd-2gdot5">

                            <div class="mb-8 border border-width-2 border-color-3 borders-radius-6">

                                <ListCategory />


                            </div>


                            <LatestProducts />



                        </div>

                        <div className="col-xl-9 col-wd-9gdot5">

                            <Subcategory />

                            
                            <CarouselProductsTwo />

                            <CarouselProductsTwo />
                            


                        </div>
                    </div>
                </div>

            </main>

            <Footer />
        </>
    )
}

export default Category




