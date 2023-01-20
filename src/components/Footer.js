const Footer = ({setPage})=>{
    return(
        <>
        <footer class="ftco-footer ftco-section img">
    	<div class="overlay"></div>
      <div class="container">
        <div class="row mb-5">
          <div class="col-md-5">
            <div class="ftco-footer-widget mb-4">
              <h2 class="ftco-heading-2">About Us</h2>
              <p>
FEED Zimbabwe Inc. was founded in 2017 with the purpose of assisting orphaned children who could not afford minimal necessities of daily life such as food, and school education. 
The program has since expanded to providing means for purposeful living to disadvantaged children in the Wedza village community. We identify such children with need, and get them enrolled with our partner schools.</p>
              {/* <ul class="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                <li class="ftco-animate"><a href="#"><span class="icon-twitter"></span></a></li>
                <li class="ftco-animate"><a href="#"><span class="icon-facebook"></span></a></li>
                <li class="ftco-animate"><a href="#"><span class="icon-instagram"></span></a></li>
              </ul> */}
            </div>
          </div>
          {/* <div class="col-md-4">
            <div class="ftco-footer-widget mb-4">
              <h2 class="ftco-heading-2">Recent Blog</h2>
              <div class="block-21 mb-4 d-flex">
                <a class="blog-img mr-4" style="background-image: url(images/image_1.jpg);"></a>
                <div class="text">
                  <h3 class="heading"><a href="#">Even the all-powerful Pointing has no control about</a></h3>
                  <div class="meta">
                    <div><a href="#"><span class="icon-calendar"></span> July 12, 2018</a></div>
                    <div><a href="#"><span class="icon-person"></span> Admin</a></div>
                    <div><a href="#"><span class="icon-chat"></span> 19</a></div>
                  </div>
                </div>
              </div>
              <div class="block-21 mb-4 d-flex">
                <a class="blog-img mr-4" style="background-image: url(images/image_2.jpg);"></a>
                <div class="text">
                  <h3 class="heading"><a href="#">Even the all-powerful Pointing has no control about</a></h3>
                  <div class="meta">
                    <div><a href="#"><span class="icon-calendar"></span> July 12, 2018</a></div>
                    <div><a href="#"><span class="icon-person"></span> Admin</a></div>
                    <div><a href="#"><span class="icon-chat"></span> 19</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div class="col-md-3">
             <div class="ftco-footer-widget mb-4 ml-md-4">
              <h2 class="ftco-heading-2">Site Links</h2>
              <ul class="list-unstyled">
                <li><a href="#" onClick={()=>setPage(1)} style={{cursor:"pointer"}} class="py-2 d-block">Home</a></li>
                <li><a href="#" onClick={()=>setPage(2)} style={{cursor:"pointer"}} class="py-2 d-block">About</a></li>
              </ul>
            </div>
          </div>
          <div class="col-md-4">
            <div class="ftco-footer-widget mb-4">
            	<h2 class="ftco-heading-2">Have a Questions?</h2>
            	<div class="block-23 mb-3">
	              <ul>
	                <li><a href="/"><span class="icon icon-envelope"></span><span class="text">rumbi@feedzim.org</span></a></li>
	              </ul>
	            </div>
            </div>
          </div>
        </div>
        
      </div>
    </footer>
         
        </>
    )
}
export default Footer