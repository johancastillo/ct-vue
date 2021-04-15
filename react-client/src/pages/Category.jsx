import Breadcrumb from "../components/Breadcrumb"
import LatestProducts from "../components/LatestProducts"
import ListCategory from "../components/ListCategory"


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
                    </div>
                </div>

            </main>
        </>
    )
}

export default Category




