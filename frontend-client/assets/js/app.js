Vue.component('Slider', {
  props: ['images'],
  template: `
  <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    
    <div class="carousel-item active">
      <img :src="images[0].image" class="d-block w-100" :alt="images[0].id">
    </div>
    
    <div class="carousel-item">
      <img :src="images[1].image" class="d-block w-100" :alt="images[1].id">
    </div>
    
    <div class="carousel-item">
      <img :src="images[2].image" class="d-block w-100" :alt="images[2].id">
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

let app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      slider: [
        {id: 1, image:'https://d13lnhwm7sh4hi.cloudfront.net/wp-content/uploads/2021/01/08143805/banner4tarjetaefectivo1400x412.png', description:"Image One"},
        {id: 2, image:'https://d13lnhwm7sh4hi.cloudfront.net/wp-content/uploads/2021/01/08141759/banner1tarjetaefectivo1400x412.png', description:"Image Two"},
        {id:3, image:'https://d13lnhwm7sh4hi.cloudfront.net/wp-content/uploads/2021/01/08140558/banner2tarjetaefectivo1400x412.png', description: "Image Three"}
      ]
    }
})
