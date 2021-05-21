
import { useState, useEffect } from 'react'

const SingleProductBody = ({ data }) => {

  const [quantity, setQuantity] = useState(1)

  let imagesProduct = {
    1: data.imagePrimary,
    2: "https://d13lnhwm7sh4hi.cloudfront.net/wp-content/uploads/2020/07/13091539/501108003_bts-06-cornetas-splash-proof-white_01.jpg",
    3: "https://d13lnhwm7sh4hi.cloudfront.net/wp-content/uploads/2020/07/13091533/501108003_bts-06-cornetas-splash-proof-white_02.jpg",
    4: "https://d13lnhwm7sh4hi.cloudfront.net/wp-content/uploads/2020/07/13091518/501108003_bts-06-cornetas-splash-proof-white_04.jpg",
    5: "https://d13lnhwm7sh4hi.cloudfront.net/wp-content/uploads/2020/07/13091506/501108003_bts-06-cornetas-splash-proof-white_06.jpg"
  }

  const [imagePresentation, setImagePresentation] = useState({})

  useEffect(() => {

    setImagePresentation(imagesProduct[1])
  }, [])

  const changePresentation = id => setImagePresentation(imagesProduct[id])

  return (
    <div className="mb-xl-14 mb-6">
      <div className="row">
        <div className="col-md-5 mb-4 mb-md-0">

          {/* Image primary  Start*/}
          <div className="image-primary-">
            <img src={ imagePresentation ? imagePresentation : imagesProduct[1] } width="100%" alt="" />
          </div>
          {/* Image primary  End*/}


          <br />

          {/* Others images Start */}
          <div className="row other-images">

            <div className={imagePresentation === imagesProduct[1] ? "col-2 item active" : "col-2 item"} onClick={() => changePresentation(1)}>
              <img src={imagesProduct[1]} width="100%" alt="" />
            </div>

            <div className={imagePresentation === imagesProduct[2] ? "col-2 item active" : "col-2 item"} onClick={() => changePresentation(2)}>
              <img src={imagesProduct[2]} width="100%" alt="" />
            </div>

            <div className={imagePresentation === imagesProduct[3] ? "col-2 item active" : "col-2 item"} onClick={() => changePresentation(3)}>
              <img src={imagesProduct[3]} width="100%" alt="" />
            </div>

            <div className={imagePresentation === imagesProduct[4] ? "col-2 item active" : "col-2 item"} onClick={() => changePresentation(4)}>
              <img src={imagesProduct[4]} width="100%" alt="" />
            </div>


          </div>
          {/* Others images End */}


        </div>


        <div className="col-md-7 mb-md-6 mb-lg-0">
          <div className="mb-2">
            <div className="border-bottom mb-3 pb-md-1 pb-3">
              <a href="#" className="font-size-12 text-gray-5 mb-2 d-inline-block">
                Headphones
                </a>

              <h2 className="font-size-25 text-lh-1dot2">
                Ultra Wireless S50 Headphones S50 with Bluetooth
                </h2>

              <div className="mb-2">
                <a className="d-inline-flex align-items-center small font-size-15 text-lh-1" href="#">
                  <div className="text-warning mr-2">
                    <small className="fas fa-star" />
                    <small className="fas fa-star" />
                    <small className="fas fa-star" />
                    <small className="fas fa-star" />
                    <small className="far fa-star text-muted" />
                  </div>

                  <span className="text-secondary font-size-13">
                    (3 customer reviews)
                      </span>
                </a>
              </div>

              <div className="d-md-flex align-items-center">
                <a href="#" className="max-width-150 ml-n2 mb-2 mb-md-0 d-block"><img className="img-fluid" src="../../assets/img/200X60/img1.png" alt="Image Description" /></a>

                <div className="ml-md-3 text-gray-9 font-size-14">
                  Disponible: <span className="text-green font-weight-bold">26 en stock</span>
                </div>
              </div>
            </div>
            <div className="flex-horizontal-center flex-wrap mb-4">
              <a href="#" className="text-gray-6 font-size-13 mr-2"><i className="ec ec-favorites mr-1 font-size-15" />
                    Agregar a favoritos
                  </a>


            </div>

            <div className="mb-2">
              <ul className="font-size-14 pl-3 ml-1 text-gray-110">
                <li>4.5 inch HD Touch Screen (1280 x 720)</li>
                <li>Android 4.4 KitKat OS</li>
                <li>1.4 GHz Quad Core™ Processor</li>
                <li>20 MP Electro and 28 megapixel CMOS rear camera</li>
              </ul>
            </div>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>

            <p><strong>SKU</strong>: FW511948218</p>

            <div className="mb-4">
              <div className="d-flex align-items-baseline">
                <ins className="font-size-36 text-decoration-none">
                  $1,999.00
                    </ins>
                <del className="font-size-20 ml-2 text-gray-6">$2,299.00</del>
              </div>
            </div>

            <div className="border-top border-bottom py-3 mb-4">
              <div className="d-flex align-items-center">
                <h6 className="font-size-14 mb-0">Color</h6>

                {/* Select */}
                <select className="">
                  <option value="one" selected>Azul</option>
                  <option value="two">Rojo</option>
                  <option value="three">Verde</option>
                  <option value="four">Negro</option>
                </select>
                {/* End Select */}

              </div>
            </div>
            <div className="d-md-flex align-items-end mb-3">
              <div className="max-width-150 mb-4 mb-md-0">
                <h6 className="font-size-14">Cantidad</h6>

                {/* Quantity */}
                <div className="border rounded-pill py-2 px-3 border-color-1">
                  <div className="js-quantity row align-items-center">
                    <div className="col">

                      <input className="js-result form-control h-auto border-0 rounded p-0 shadow-none" type="text" value={quantity} />

                    </div>

                    <div className="col-auto pr-1">

                      <a className="js-minus btn btn-icon btn-xs btn-outline-secondary rounded-circle border-0" href="javascript:;"
                        onClick={() => { setQuantity(quantity - 1) }}
                      >
                        <small className="fas fa-minus btn-icon__inner" />
                      </a>

                      <a className="js-plus btn btn-icon btn-xs btn-outline-secondary rounded-circle border-0" href="javascript:;"
                        onClick={() => { setQuantity(quantity + 1) }}
                      >
                        <small className="fas fa-plus btn-icon__inner" />
                      </a>

                    </div>
                  </div>
                </div>
                {/* End Quantity */}

              </div>
              <div className="ml-md-3">
                <a href="#" className="btn px-5 btn-primary-dark transition-3d-hover">
                  <i className="ec ec-add-to-cart mr-2 font-size-20" /> Añadir al carrito
                  </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProductBody


