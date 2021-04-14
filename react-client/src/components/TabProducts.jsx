

const TabProducts = ({ data }) => {
    return (
        <>
            <div className="col">
                {/* <!-- Features Section --> */}
                <div className="">
                    {/* <!-- Nav Classic --> */}
                    <div className="position-relative bg-white text-center z-index-2">
                        <ul className="nav nav-classic nav-tab justify-content-center" id="pills-tab"
                            role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active " id="pills-one-example1-tab" data-toggle="pill"
                                    href="#pills-one-example1" role="tab" aria-controls="pills-one-example1"
                                    aria-selected="true">
                                    <div className="d-md-flex justify-content-md-center align-items-md-center">
                                        Populares
                                    </div>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " id="pills-two-example1-tab" data-toggle="pill"
                                    href="#pills-two-example1" role="tab" aria-controls="pills-two-example1"
                                    aria-selected="false">
                                    
                                    <div className="d-md-flex justify-content-md-center align-items-md-center">
                                        Más vendidos
                                    </div>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " id="pills-three-example1-tab" data-toggle="pill"
                                    href="#pills-three-example1" role="tab"
                                    aria-controls="pills-three-example1" aria-selected="false">
                                    
                                    <div className="d-md-flex justify-content-md-center align-items-md-center">
                                        Recientes
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* <!-- End Nav Classic --> */}

                    {/* <!-- Tab Content --> */}
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade pt-2 show active" id="pills-one-example1" role="tabpanel"
                            aria-labelledby="pills-one-example1-tab">
                            <ul className="row list-unstyled products-group no-gutters">


                                {
                                    data.map(product => {
                                        return (
                                            <li className="col-6 col-md-3 col-xl-2 product-item">

                                                <div className="product-item__outer h-100 product">
                                                    <div className="product-item__inner px-xl-4 p-3">
                                                        <div className="product-item__body pb-xl-2">
                                                            <div className="mb-2">
                                                                <a
                                                                    href="../shop/product-categories-7-column-full-width.html"
                                                                    className="font-size-12 text-gray-5">
                                                                        {product.category}
                                                                </a>
                                                            </div>

                                                            <h5 className="mb-1 product-item__title">
                                                                <a
                                                                    href="../shop/single-product-fullwidth.html"
                                                                    className="text-blue font-weight-bold">
                                                                    {product.title}
                                                                </a>
                                                            </h5>

                                                            <div className="mb-2">
                                                                <a href="../shop/single-product-fullwidth.html"
                                                                    className="d-block text-center">

                                                                    <img className="img-fluid"
                                                                        src={product.image}
                                                                        alt="Image Description" />
                                                                </a>
                                                            </div>

                                                            <div className="flex-center-between mb-1">
                                                                <div className="prodcut-price">
                                                                    <div className="text-gray-100">
                                                                        {product.price + ".00$"}
                                                                    </div>
                                                                </div>
                                                            
                                                                <div className="d-none d-xl-block prodcut-add-cart">
                                                                    <a href="../shop/single-product-fullwidth.html"
                                                                        className="btn-add-cart btn-primary transition-3d-hover">
                                                                        <i className="ec ec-add-to-cart"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        
                                                        <div className="product-item__footer">
                                                            <div className="border-top pt-2 flex-center-between flex-wrap">
                                                                <a href="../shop/compare.html"
                                                                    className="text-gray-6 font-size-13"><i
                                                                        className="ec ec-compare mr-1 font-size-15"></i>
                                                                    Compare
                                                                </a>

                                                                <a href="../shop/wishlist.html"
                                                                    className="text-gray-6 font-size-13"><i
                                                                        className="ec ec-favorites mr-1 font-size-15"></i>
                                                                    Add to Wishlist
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </li>

                                        )
                                    })
                                }

                            </ul>
                        </div>

                        <div className="tab-pane fade pt-2" id="pills-two-example1" role="tabpanel"
                            aria-labelledby="pills-two-example1-tab">
                            <ul className="row list-unstyled products-group no-gutters">

                                {
                                    data.map(product => {
                                        return (
                                            <li className="col-6 col-md-3 col-xl-2 product-item">

                                                <div className="product-item__outer h-100 product">
                                                    <div className="product-item__inner px-xl-4 p-3">
                                                        <div className="product-item__body pb-xl-2">
                                                            <div className="mb-2"><a
                                                                href="../shop/product-categories-7-column-full-width.html"
                                                                className="font-size-12 text-gray-5">
                                                                {product.category}
                                                            </a>
                                                            </div>

                                                            <h5 className="mb-1 product-item__title">
                                                                <a
                                                                    href="../shop/single-product-fullwidth.html"
                                                                    className="text-blue font-weight-bold">
                                                                    {product.title}
                                                                </a>
                                                            </h5>

                                                            <div className="mb-2">
                                                                <a href="../shop/single-product-fullwidth.html"
                                                                    className="d-block text-center">

                                                                    <img className="img-fluid"
                                                                        src={product.image}
                                                                        alt="Image Description" />

                                                                </a>
                                                            </div>

                                                            <div className="flex-center-between mb-1">
                                                                <div className="prodcut-price">
                                                                    <div className="text-gray-100">
                                                                        {product.price + "$"}
                                                                    </div>
                                                                </div>
                                                                <div className="d-none d-xl-block prodcut-add-cart">
                                                                    <a href="../shop/single-product-fullwidth.html"
                                                                        className="btn-add-cart btn-primary transition-3d-hover">
                                                                        <i className="ec ec-add-to-cart"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="product-item__footer">
                                                            <div className="border-top pt-2 flex-center-between flex-wrap">
                                                                <a href="../shop/compare.html"
                                                                    className="text-gray-6 font-size-13"><i
                                                                        className="ec ec-compare mr-1 font-size-15"></i>
                                                                    Compare
                                                                </a>

                                                                <a href="../shop/wishlist.html"
                                                                    className="text-gray-6 font-size-13"><i
                                                                        className="ec ec-favorites mr-1 font-size-15"></i>
                                                                        Add to Wishlist
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </li>


                                        )
                                    })
                                }

                            </ul>
                        </div>

                        <div className="tab-pane fade pt-2" id="pills-three-example1" role="tabpanel"
                            aria-labelledby="pills-three-example1-tab">
                            <ul className="row list-unstyled products-group no-gutters">

                                {
                                    data.map(product => {
                                        return (
                                            <li className="col-6 col-md-3 col-xl-2 product-item">

                                                <div className="product-item__outer h-100 product">
                                                    <div className="product-item__inner px-xl-4 p-3">
                                                        <div className="product-item__body pb-xl-2">
                                                            <div className="mb-2"><a
                                                                href="../shop/product-categories-7-column-full-width.html"
                                                                className="font-size-12 text-gray-5">
                                                                {product.category}
                                                            </a>
                                                            </div>
                                                        
                                                            <h5 className="mb-1 product-item__title">
                                                                <a
                                                                    href="../shop/single-product-fullwidth.html"
                                                                    className="text-blue font-weight-bold">
                                                                    {product.title}
                                                                </a>
                                                            </h5>

                                                            <div className="mb-2">
                                                                <a href="../shop/single-product-fullwidth.html"
                                                                    className="d-block text-center">

                                                                    <img className="img-fluid"
                                                                        src={product.image}
                                                                        alt="Image Description" />

                                                                </a>
                                                            </div>

                                                            <div className="flex-center-between mb-1">
                                                                <div className="prodcut-price">

                                                                    <div v-if="money == 'bolivares'" className="text-gray-100">
                                                                        {product.price + ".00$"}
                                                                    </div>

                                                                </div>
                                                                <div className="d-none d-xl-block prodcut-add-cart">
                                                                    <a href="../shop/single-product-fullwidth.html"
                                                                        className="btn-add-cart btn-primary transition-3d-hover">
                                                                        <i className="ec ec-add-to-cart"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="product-item__footer">
                                                            <div className="border-top pt-2 flex-center-between flex-wrap">
                                                                <a href="../shop/compare.html"
                                                                    className="text-gray-6 font-size-13"><i
                                                                        className="ec ec-compare mr-1 font-size-15"></i>
                                                                        Compare
                                                                </a>
                                                                
                                                                <a href="../shop/wishlist.html"
                                                                    className="text-gray-6 font-size-13"><i
                                                                        className="ec ec-favorites mr-1 font-size-15"></i>
                                                                        Add to Wishlist
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </li>

                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    {/* <!-- End Tab Content --> */}
                </div>
                {/* <!-- End Features Section --> */}
            </div>
        </>
    )
}

export default TabProducts



