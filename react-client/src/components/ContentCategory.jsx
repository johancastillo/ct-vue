import CarouselProductsTwo from "./CarouselProductsTwo"
import Subcategory from "./Subcategory"


const ContentCategory = () => {
    return (
        <div className="col-xl-9 col-wd-9gdot5">
            
            <Subcategory />

            {/* Best Sellers */}
            <CarouselProductsTwo />
            
            <CarouselProductsTwo />
            {/* End Best Sellers */}
            
            
        </div>
    )
}


export default ContentCategory




