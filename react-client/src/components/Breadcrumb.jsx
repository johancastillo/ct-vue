

const Breadcrumb = () => {
    return(
        <div className="bg-gray-13 bg-md-transparent">
        <div className="container">
          {/* breadcrumb */}
          <div className="my-md-3">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb mb-3 flex-nowrap flex-xl-wrap overflow-auto overflow-xl-visble">
                <li className="breadcrumb-item flex-shrink-0 flex-xl-shrink-1"><a href="../home/index.html">Home</a></li>
                <li className="breadcrumb-item flex-shrink-0 flex-xl-shrink-1"><a href="../shop/shop.html">Accessories</a></li>
                <li className="breadcrumb-item flex-shrink-0 flex-xl-shrink-1"><a href="../shop/shop.html">Headphones</a></li>
                <li className="breadcrumb-item flex-shrink-0 flex-xl-shrink-1 active" aria-current="page">Ultra Wireless S50 Headphones S50 with Bluetooth</li>
              </ol>
            </nav>
          </div>
          {/* End breadcrumb */}
        </div>
      </div>
    )
}

export default Breadcrumb



