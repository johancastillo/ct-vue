import Slider from "./Slider.vue"
// Vue.component('Slider', {
//   props: ['images'],
//   template: `
  
//   `
// })

let app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      slider: [
        {id: 1, image:'https://d13lnhwm7sh4hi.cloudfront.net/wp-content/uploads/2021/01/08143805/banner4tarjetaefectivo1400x412.png', description:"Image One"},
        {id: 2, image:'https://d13lnhwm7sh4hi.cloudfront.net/wp-content/uploads/2021/01/08141759/banner1tarjetaefectivo1400x412.png', description:"Image Two"},
        {id:3, image:'https://d13lnhwm7sh4hi.cloudfront.net/wp-content/uploads/2021/01/08140558/banner2tarjetaefectivo1400x412.png', description: "Image Three"}
      ]
    },
    componets:{
      Slider
    }
})
