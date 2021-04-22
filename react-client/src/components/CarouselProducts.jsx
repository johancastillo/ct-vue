
import { useContext } from 'react'
import UserContext from '../context/User/UserContext'



const CarouselProducts = ({ products, category }) => {

  const { money } = useContext(UserContext)

  return (
    <div class="mb-6">
      <div class="position-relative">

        <div class="border-bottom border-color-1 mb-2">
          <h3 class="section-title mb-0 pb-2 font-size-22">
            {category}
          </h3>
        </div>

        <div class="js-slick-carousel u-slick position-static overflow-hidden u-slick-overflow-visble pb-7 pt-2 px-1"
          data-pagi-classes="text-center right-0 bottom-1 left-0 u-slick__pagination u-slick__pagination--long mb-0 z-index-n1 mt-3 mt-md-0"
          data-slides-show="7" data-slides-scroll="1"
          data-arrows-classes="position-absolute top-0 font-size-17 u-slick__arrow-normal top-10"
          data-arrow-left-classes="fa fa-angle-left right-1"
          data-arrow-right-classes="fa fa-angle-right right-0" data-responsive='[{
                "breakpoint": 1400,
                "settings": {
                  "slidesToShow": 6
                }
              }, {
                  "breakpoint": 1200,
                  "settings": {
                    "slidesToShow": 4
                  }
              }, {
                "breakpoint": 992,
                "settings": {
                  "slidesToShow": 3
                }
              }, {
                "breakpoint": 768,
                "settings": {
                  "slidesToShow": 2
                }
              }, {
                "breakpoint": 554,
                "settings": {
                  "slidesToShow": 2
                }
              }]'>

          {
            products.map(product => {
              return (
                <div v-for="product in products" class="js-slide products-group">
                  <div class="product-item">
                    <div class="product-item__outer h-100">
                      <div class="product-item__inner px-wd-4 p-2 p-md-3">
                        <div class="product-item__body pb-xl-2">
                          <div class="mb-2">
                            <a class="font-size-12 text-gray-5">
                              {product.category}
                            </a>
                          </div>

                          <h5 class="mb-1 product-item__title">
                            <a class="text-blue font-weight-bold">
                              {product.title}
                            </a>
                          </h5>

                          <div class="mb-2">
                            <a class="d-block text-center">
                              <img class="img-fluid"
                                src={product.image}
                                alt="Image Description" />
                            </a>
                          </div>

                          <div class="flex-center-between mb-1">
                            <div class="prodcut-price">
                              <div class="text-gray-100" style={money == 'BS' ? { fontSize: '15px' } : {}}>
                                <span>

                                  {
                                    money == 'USD' ?
                                      product.priceUSD + ".00$"
                                      :
                                      product.priceBS + " " + "Bs"
                                  }
                                </span>

                              </div>
                            </div>
                            <div class="d-none d-xl-block prodcut-add-cart">
                              <a class="btn-add-cart btn-primary transition-3d-hover">
                                <i class="ec ec-add-to-cart"></i>
                              </a>
                            </div>
                          </div>
                        </div>

                        <div class="product-item__footer">
                          <div class="border-top pt-2 flex-center-between flex-wrap">
                            <a class="text-gray-6 font-size-13">
                              <i class="ec ec-compare mr-1 font-size-15"></i> Compare
                            </a>
                            <a class="text-gray-6 font-size-13">
                              <i class="ec ec-favorites mr-1 font-size-15"></i> Wishlist
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }





        </div>
      </div>
    </div>
  )
}

export default CarouselProducts

