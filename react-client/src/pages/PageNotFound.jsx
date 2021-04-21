import Breadcrumb from "../components/Breadcrumb"
import CarouselProducts from "../components/CarouselProducts"
import Footer from "../components/Footer"


const PageNotFound = () => {
    return (
        <>
            <main id="content" role="main">
                <Breadcrumb />



                <div className="container">
                    <div className="mb-5 text-center pb-3 border-bottom border-color-1">
                        
                        <h1 className="font-size-sl-72 font-weight-light mb-3">
                            404!
                        </h1>
                        
                        <p className="text-gray-90 font-size-20 mb-0 font-weight-light">
                            Nothing was found at this location. Try searching, or check out the links below.
                        </p>

                    </div>
                    <div className="d-flex mb-6">
                        {/* Search Jobs Form */}
                        <form className="d-block d-md-flex flex-horizontal-center w-100 w-lg-80 w-xl-50 mx-md-auto">
                            <div className="mb-3 mb-md-0 col px-md-2 px-0">
                                {/* Input */}
                                <div className="js-focus-state">
                                    <input type="text" className="form-control" placeholder="Search products…" aria-label="Search products…" aria-describedby="keywordInputAddon" />
                                </div>
                                {/* End Input */}
                            </div>
                            
                            <div className>
                                <button type="submit" className="btn btn-block btn-primary-dark-w px-5">
                                    Buscar
                                </button>
                            </div>

                            {/* End Checkbox */}
                        </form>
                        {/* End Search Jobs Form */}
                    </div>
                </div>


                


            </main>

            <Footer />
        </>
    )
}



export default PageNotFound




