/*
##########
# Slider #
##########
*/
Vue.component('Slider', {
  props: ['images', 'device'],
  template: `
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
    
    <div v-if="device >= 1200" class="carousel-inner">
      
      <div class="carousel-item active">
        <img :src="images.imagesDesktop[0].image" class="d-block w-100" :alt="images.imagesDesktop[0].id">
      </div>
      
      <div class="carousel-item">
        <img :src="images.imagesDesktop[1].image" class="d-block w-100" :alt="images.imagesDesktop[1].id">
      </div>
      
      <div class="carousel-item">
        <img :src="images.imagesDesktop[2].image" class="d-block w-100" :alt="images.imagesDesktop[2].id">
      </div>
    
    </div>

    <div v-else="device < 1200" class="carousel-inner">
      
      <div class="carousel-item active">
        <img :src="images.imagesMobile[0].image" class="d-block w-100" :alt="images.imagesDesktop[0].id">
      </div>
      
      <div class="carousel-item">
        <img :src="images.imagesMobile[1].image" class="d-block w-100" :alt="images.imagesDesktop[1].id">
      </div>
      
      <div class="carousel-item">
        <img :src="images.imagesMobile[2].image" class="d-block w-100" :alt="images.imagesDesktop[2].id">
      </div>
    
    </div>
    
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>  
  `
})

/*
##########
# TopBar #
##########
*/
Vue.component('Bar', {
  template: `
  <div class="u-header-topbar py-2 d-none d-xl-block">
  <div class="container">
      <div class="d-flex align-items-center">

          <div class="topbar-left">
              <a href="#" class="text-gray-110 font-size-13 hover-on-dark">
                  Bienvenido
              </a>
          </div>

          <div class="topbar-right ml-auto">
              <ul class="list-inline mb-0">
                  <li
                      class="list-inline-item mr-0 u-header-topbar__nav-item u-header-topbar__nav-item-border">
                      <a href="../home/contact-v2.html" class="u-header-topbar__nav-link">
                          <i class="ec ec-map-pointer mr-1"></i> 
                          Store Locator
                      </a>
                  </li>

                  <li
                      class="list-inline-item mr-0 u-header-topbar__nav-item u-header-topbar__nav-item-border">
                      <a href="../shop/track-your-order.html" class="u-header-topbar__nav-link"><i
                              class="ec ec-transport mr-1"></i> Track Your Order</a>
                  </li>
                  <li
                      class="list-inline-item mr-0 u-header-topbar__nav-item u-header-topbar__nav-item-border u-header-topbar__nav-item-no-border u-header-topbar__nav-item-border-single">
                      <div class="d-flex align-items-center">
                          <!-- Language -->
                          <div class="position-relative">
                              <a id="languageDropdownInvoker"
                                  class="dropdown-nav-link dropdown-toggle d-flex align-items-center u-header-topbar__nav-link font-weight-normal"
                                  href="javascript:;" role="button" aria-controls="languageDropdown"
                                  aria-haspopup="true" aria-expanded="false" data-unfold-event="hover"
                                  data-unfold-target="#languageDropdown"
                                  data-unfold-type="css-animation" data-unfold-duration="300"
                                  data-unfold-delay="300" data-unfold-hide-on-scroll="true"
                                  data-unfold-animation-in="slideInUp"
                                  data-unfold-animation-out="fadeOut">
                                  <span class="d-inline-block d-sm-none">US</span>
                                  <span class="d-none d-sm-inline-flex align-items-center"><i
                                          class="ec ec-dollar mr-1"></i> Dollar (US)</span>
                              </a>

                              <div id="languageDropdown" class="dropdown-menu dropdown-unfold"
                                  aria-labelledby="languageDropdownInvoker">
                                  <a class="dropdown-item active" href="#">English</a>
                                  <a class="dropdown-item" href="#">Deutsch</a>
                                  <a class="dropdown-item" href="#">Español‎</a>
                              </div>
                          </div>
                          <!-- End Language -->
                      </div>
                  </li>
                  <li
                      class="list-inline-item mr-0 u-header-topbar__nav-item u-header-topbar__nav-item-border">
                      <!-- Account Sidebar Toggle Button -->
                      <a id="sidebarNavToggler" href="javascript:;" role="button"
                          class="u-header-topbar__nav-link" aria-controls="sidebarContent"
                          aria-haspopup="true" aria-expanded="false" data-unfold-event="click"
                          data-unfold-hide-on-scroll="false" data-unfold-target="#sidebarContent"
                          data-unfold-type="css-animation" data-unfold-animation-in="fadeInRight"
                          data-unfold-animation-out="fadeOutRight" data-unfold-duration="500">
                          <i class="ec ec-user mr-1"></i> Registrarse <span
                              class="text-gray-50">o</span> Iniciar sesión
                      </a>
                      <!-- End Account Sidebar Toggle Button -->
                  </li>
              </ul>
          </div>
      </div>
  </div>
</div> 
  `
})

/*
##########
# TopBar #
##########
*/
Vue.component('Offer', {
  template: `
  <div class="col-md-auto mb-6 mb-md-0">
        <div
            class="p-3 border border-width-2 border-primary borders-radius-20 bg-white min-width-370">
            <div class="d-flex justify-content-between align-items-center m-1 ml-2">
                <h3 class="font-size-22 mb-0 font-weight-normal text-lh-28 max-width-120">
                    Special
                    Offer</h3>
                <div
                    class="d-flex align-items-center flex-column justify-content-center bg-primary rounded-pill height-75 width-75 text-lh-1">
                    <span class="font-size-12">Save</span>
                    <div class="font-size-20 font-weight-bold">$120</div>
                </div>
            </div>
            <div class="mb-4">
                <a href="../shop/single-product-fullwidth.html" class="d-block text-center"><img
                        class="img-fluid" src="../../assets/img/320X300/img1.jpg"
                        alt="Image Description"></a>
            </div>
            <h5 class="mb-2 font-size-14 text-center mx-auto max-width-180 text-lh-18"><a
                    href="../shop/single-product-fullwidth.html"
                    class="text-blue font-weight-bold">Game Console Controller + USB 3.0 Cable</a>
            </h5>
            <div class="d-flex align-items-center justify-content-center mb-3">
                <del class="font-size-18 mr-2 text-gray-2">$99,00</del>
                <ins class="font-size-30 text-red text-decoration-none">$79,00</ins>
            </div>
            <div class="mb-3 mx-2">
                <div class="d-flex justify-content-between align-items-center mb-2">
                    <span class="">Availavle: <strong>6</strong></span>
                    <span class="">Already Sold: <strong>28</strong></span>
                </div>
                <div class="rounded-pill bg-gray-3 height-20 position-relative">
                    <span
                        class="position-absolute left-0 top-0 bottom-0 rounded-pill w-30 bg-primary"></span>
                </div>
            </div>
            <div class="mb-2">
                <h6 class="font-size-15 text-gray-2 text-center mb-3">Hurry Up! Offer ends in:</h6>
                <div class="js-countdown d-flex justify-content-center" data-end-date="2020/11/30"
                    data-hours-format="%H" data-minutes-format="%M" data-seconds-format="%S">
                    <div class="text-lh-1">
                        <div class="text-gray-2 font-size-30 bg-gray-4 py-2 px-2 rounded-sm mb-2">
                            <span class="js-cd-hours"></span>
                        </div>
                        <div class="text-gray-2 font-size-12 text-center">HOURS</div>
                    </div>
                    <div class="mx-1 pt-1 text-gray-2 font-size-24">:</div>
                    <div class="text-lh-1">
                        <div class="text-gray-2 font-size-30 bg-gray-4 py-2 px-2 rounded-sm mb-2">
                            <span class="js-cd-minutes"></span>
                        </div>
                        <div class="text-gray-2 font-size-12 text-center">MINS</div>
                    </div>
                    <div class="mx-1 pt-1 text-gray-2 font-size-24">:</div>
                    <div class="text-lh-1">
                        <div class="text-gray-2 font-size-30 bg-gray-4 py-2 px-2 rounded-sm mb-2">
                            <span class="js-cd-seconds"></span>
                        </div>
                        <div class="text-gray-2 font-size-12 text-center">SECS</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  `
})


/*
#######
# App #
#######
*/

let app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      device: screen.width,
      slider: {
        imagesMobile: [
          {id: 1, image:'https://d13lnhwm7sh4hi.cloudfront.net/wp-content/uploads/2021/01/08140919/banner2tarjetaefectivo767X767.png', description:"Image One"},
          {id: 2, image:'https://d13lnhwm7sh4hi.cloudfront.net/wp-content/uploads/2021/01/08141942/banner1tarjetaefectivo767X767.png', description:"Image Two"},
          {id:3, image:'https://d13lnhwm7sh4hi.cloudfront.net/wp-content/uploads/2021/01/08142916/banner3tarjetaefectivo767X767.png', description: "Image Three"}
        ],
        imagesDesktop: [
          {id: 1, image:'https://d13lnhwm7sh4hi.cloudfront.net/wp-content/uploads/2021/01/08143805/banner4tarjetaefectivo1400x412.png', description:"Image One"},
          {id: 2, image:'https://d13lnhwm7sh4hi.cloudfront.net/wp-content/uploads/2021/01/08141759/banner1tarjetaefectivo1400x412.png', description:"Image Two"},
          {id:3, image:'https://d13lnhwm7sh4hi.cloudfront.net/wp-content/uploads/2021/01/08140558/banner2tarjetaefectivo1400x412.png', description: "Image Three"}
        ]
      }
    }
})
