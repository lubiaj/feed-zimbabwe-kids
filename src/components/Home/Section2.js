import popup from './Stripe'
const Section2 = () => {
    return(
        <section class="ftco-counter ftco-intro" id="section-counter">
          <div class="container">
            <div class="row no-gutters">
              <div class="col-md-5 d-flex justify-content-center counter-wrap ftco-animate">
                <div class="block-18 color-1 align-items-stretch">
                  <div class="text">
                    <span style={{fontSize:"48px"}}>Served Over</span>
                    <strong style={{fontSize:"48px"}} class="number" data-number="1432805">1,500,000</strong> Meals
                    <span>3,600 meals served weekly</span>
                  </div>
                </div>
              </div>
              <div class="col-md d-flex justify-content-center counter-wrap ftco-animate">
                <div class="block-18 color-2 align-items-stretch">
                  <div class="text text-center">
                    <h3 style={{fontSize:"48px"}} class="mb-4">Giving</h3>
                    <p style={{fontSize:"22px",fontWeight:"400",minHeight:"220px"}}>Empowering society starts with rebuilding children, families and hence communities.</p>
                    <p>
                      <button onClick={popup} style={{position:"absolute",left:"40px",width:"calc(100% - 80px)",bottom:"24px",fontSize:"22px"}} class="btn btn-white px-3 py-2 mt-2">Give Now</button>
                      {/* <a href="#" onclick={popup} style={{position:"absolute",left:"40px",width:"calc(100% - 80px)",bottom:"24px",fontSize:"22px"}} class="btn btn-white px-3 py-2 mt-2">Give Now</a> */}
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md d-flex justify-content-center counter-wrap ftco-animate">
                <div class="block-18 color-3 align-items-stretch">
                  <div class="text text-center">
                    <h3 style={{fontSize:"48px"}} class="mb-4">Get Involved</h3>
                    <p style={{fontSize:"22px",fontWeight:"400"}}>Opportunities to be the hands and feet of Jesus</p>
                    <p>
                      {/* <a href="#" onclick={popup} style={{position:"absolute",left:"40px",width:"calc(100% - 80px)",bottom:"24px",fontSize:"22px"}} class="btn btn-white px-3 py-2 mt-2">Get Involved</a> */}
                      <button onClick={popup} style={{position:"absolute",left:"40px",width:"calc(100% - 80px)",bottom:"24px",fontSize:"22px"}} class="btn btn-white px-3 py-2 mt-2">Get Involved</button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
}
export default Section2