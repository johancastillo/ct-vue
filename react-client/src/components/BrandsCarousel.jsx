

const BrandsCarousel = () => {
    return (
        <div className="mb-8">
            <div className="py-2 border-top border-bottom">
                <div className="js-slick-carousel u-slick my-1" data-slides-show={5} data-slides-scroll={1} data-arrows-classes="d-none d-lg-inline-block u-slick__arrow-normal u-slick__arrow-centered--y" data-arrow-left-classes="fa fa-angle-left u-slick__arrow-classic-inner--left z-index-9" data-arrow-right-classes="fa fa-angle-right u-slick__arrow-classic-inner--right" data-responsive="[{
                                &quot;breakpoint&quot;: 992,
                                &quot;settings&quot;: {
                                    &quot;slidesToShow&quot;: 2
                                }
                            }, {
                                &quot;breakpoint&quot;: 768,
                                &quot;settings&quot;: {
                                    &quot;slidesToShow&quot;: 1
                                }
                            }, {
                                &quot;breakpoint&quot;: 554,
                                &quot;settings&quot;: {
                                    &quot;slidesToShow&quot;: 1
                                }
                            }]">
              
                    <div className="js-slide">
                        <a href="#" className="link-hover__brand">
                            <img className="img-fluid m-auto max-height-50" src="../../assets/img/brands/alimentos-polar.png" alt="Image Description" />
                        </a>
                    </div>
              
                    <div className="js-slide">
                        <a href="#" className="link-hover__brand">
                            <img className="img-fluid m-auto max-height-50" src="../../assets/img/brands/android.png" alt="Image Description" />
                        </a>
                    </div>
              
                    <div className="js-slide">
                        <a href="#" className="link-hover__brand">
                            <img className="img-fluid m-auto max-height-50" src="../../assets/img/brands/hyundai.png" alt="Image Description" />
                        </a>
                    </div>
              
                    <div className="js-slide">
                        <a href="#" className="link-hover__brand">
                            <img className="img-fluid m-auto max-height-50" src="../../assets/img/brands/intel.png" alt="Image Description" />
                        </a>
                    </div>
              
                    <div className="js-slide">
                        <a href="#" className="link-hover__brand">
                            <img className="img-fluid m-auto max-height-50" src="../../assets/img/brands/lenovo.png" alt="Image Description" />
                        </a>
                    </div>
              
                    <div className="js-slide">
                        <a href="#" className="link-hover__brand">
                            <img className="img-fluid m-auto max-height-50" src="../../assets/img/brands/lg.png" alt="Image Description" />
                        </a>
                    </div>
              
                    <div className="js-slide">
                        <a href="#" className="link-hover__brand">
                            <img className="img-fluid m-auto max-height-50" src="../../assets/img/brands/ottima.png" alt="Image Description" />
                        </a>
                    </div>
              
                    <div className="js-slide">
                        <a href="#" className="link-hover__brand">
                            <img className="img-fluid m-auto max-height-50" src="../../assets/img/brands/samsung.png" alt="Image Description" />
                        </a>
                    </div>
              
                </div>
            </div>
        </div>
    )
}


export default BrandsCarousel


