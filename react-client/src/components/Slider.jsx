import { useState, useEffect } from 'react'


const desktopAPI = "http://127.0.0.1:8000/images/sliders/2021/04/1619108122_Captura%20de%20pantalla%20de%202020-11-27%2015-10-23.png"
const mobileAPI = "http://127.0.0.1:8000/images/sliders/2021/04/1619108122_Captura%20de%20pantalla%20de%202020-11-27%2015-10-23.png"

const slides = {
    imagesMobile: [
        { id: 1, image: 'https://d13lnhwm7sh4hi.cloudfront.net/wp-content/uploads/2021/01/08140919/banner2tarjetaefectivo767X767.png', description: "Image One", action: "https://compralotodo.com" },
        { id: 2, image: 'https://d13lnhwm7sh4hi.cloudfront.net/wp-content/uploads/2021/01/08141942/banner1tarjetaefectivo767X767.png', description: "Image Two", action: "https://compralotodo.com" },
        { id: 3, image: 'https://d13lnhwm7sh4hi.cloudfront.net/wp-content/uploads/2021/01/08142916/banner3tarjetaefectivo767X767.png', description: "Image Three", action: "https://compralotodo.com" }
    ],
    imagesDesktop: [
        { id: 1, image: 'https://d13lnhwm7sh4hi.cloudfront.net/wp-content/uploads/2021/01/08143805/banner4tarjetaefectivo1400x412.png', description: "Image One", action: "https://compralotodo.com" },
        { id: 2, image: 'https://d13lnhwm7sh4hi.cloudfront.net/wp-content/uploads/2021/01/08141759/banner1tarjetaefectivo1400x412.png', description: "Image Two", action: "https://compralotodo.com" },
        { id: 3, image: 'https://d13lnhwm7sh4hi.cloudfront.net/wp-content/uploads/2021/01/08140558/banner2tarjetaefectivo1400x412.png', description: "Image Three", action: "https://compralotodo.com" }
    ]
}

const Slider = () => {

    const [device, setDevice] = useState('')

    const [sliders, setSliders] =  useState({})



    useEffect(() => {
        setDevice(window.screen.width)
    }, [])

    return (
        <div className="">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">

                {
                    device >= 600 ?

                        <div className="carousel-inner">

                            {
                                slides.imagesDesktop.map(slide => {
                                    return (
                                        <div class={slide.id == 1 ? "carousel-item active" : "carousel-item"}>
                                            <a href={slide.action}>
                                                <img src={slide.image} className="d-block w-100" alt={slide.id} />
                                            </a>
                                        </div>
                                    )
                                })
                            }



                        </div>
                        :
                        <div className="carousel-inner">

                            {
                                slides.imagesMobile.map(slide => {
                                    return (
                                        <div class={slide.id == 1 ? "carousel-item active" : "carousel-item"}>
                                            <img src={slide.image} className="d-block w-100" alt={slide.id} />
                                        </div>
                                    )
                                })
                            }

                        </div>
                }



                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Anterior</span>
                </button>

                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Siguiente</span>
                </button>

            </div>
        </div>
    )
}

export default Slider

