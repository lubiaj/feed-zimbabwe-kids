import "./styles.css";
const Section1 = () => {
    return(
      <div className="hero-wrap" data-stellar-background-ratio="0.5">
        {/* <img alt="" style={{width:"100%"}} src="../../images/Pictures/sec-1.jpg"/> */}
        <div class="overlay"></div>
        <div class="container">
          <div class="row no-gutters slider-text align-items-center justify-content-center" data-scrollax-parent="true">
            <div class="col-md-7 ftco-animate text-center" data-scrollax=" properties: { translateY: '70%' }">
              {/* <h1 style={{fontWeight:"600",color:"#f86f2d",padding:"16px",background:"white",opacity:0.8}} class="mb-4" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">
              Responding To A Calling.</h1> */}
              {/* <p class="mb-5" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Created by <a href="#">Colorlib.com</a></p> */}

              {/*<p data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"><a href="https://vimeo.com/45830194" class="btn btn-white btn-outline-white px-4 py-3 popup-vimeo"><span class="icon-play mr-2"></span>Watch Video</a></p>*/}
            </div>
          </div>
        </div>
      </div>
    )
}
export default Section1