import "./styles.css";
const Section5 = ()=>{
    return(
        <section class="ftco-section">
        <div class="container">
            <div class="row justify-content-center mb-5 pb-3">
            <div class="col-md-7 heading-section ftco-animate text-center">
              <h2 class="mb-4" style={{fontSize:"48px"}}>Who we Are?</h2>
              <p style={{fontSize:"22px"}}>Rebuilding society starts with rebuilding children, families and hence communities. We have been called and are committed to doing just that.</p>
              <p>
                <ul style={{padding:"0px",marginTop:"48px",listStyle:"none",display:"flex",flex:"row",justifyContent:"space-between"}}>
                    <li style={{fontWeight:"600",color:"#f86f2d",fontSize:"24px",paddingBottom:"4px",borderBottom:"2px solid #f86f2d"}}>Feed</li>
                    <li style={{fontWeight:"600",color:"#f86f2d",fontSize:"24px",paddingBottom:"4px",borderBottom:"2px solid #f86f2d"}}>Educate</li>
                    <li style={{fontWeight:"600",color:"#f86f2d",fontSize:"24px",paddingBottom:"4px",borderBottom:"2px solid #f86f2d"}}>Empower</li>
                    <li style={{fontWeight:"600",color:"#f86f2d",fontSize:"24px",paddingBottom:"4px",borderBottom:"2px solid #f86f2d"}}>Develop</li>
                </ul>
              </p>
            </div>
          </div>
          <div class="row">
              <div class="col-lg-4 d-flex mb-sm-4 ftco-animate">
                  <div class="staff">
                    <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}} class="mb-4">
                          <div class="img"  id="person_1"></div>
                            <h3 style={{fontSize:"36px"}}><a href="#">Feed</a></h3>
                            <span style={{color:"#444444",fontSize:"18px",width:"100%",textAlign:"center"}} class="position">To provide nourishment and support for school children in partnership with the local community so they can be able to learn without having to deal with hunger or lack of basic resources.</span>
                      </div>
                  </div>
              </div>
              <div class="col-lg-4 d-flex mb-sm-4 ftco-animate">
                  <div class="staff">
                      <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}} class="mb-4">
                            <div class="img" id="person_2"></div>
                            <h3 style={{fontSize:"36px"}}><a href="#">Educate</a></h3>
                            <span style={{color:"#444444",fontSize:"18px",width:"100%",textAlign:"center"}} class="position">To help all students reach their potential by providing them with quality education. FEED Zimbabwe commits to helping students receive a quality education regardless of socio-economic status.</span>
                      </div>
                  </div>
              </div>
              <div class="col-lg-4 d-flex mb-sm-4 ftco-animate">
                  <div class="staff">
                  <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}} class="mb-4">
                          <div class="img" id="person_3"></div>
                              <h3 style={{fontSize:"36px"}}><a href="#">Empower</a></h3>
                              <span style={{color:"#444444",fontSize:"18px",width:"100%",textAlign:"center"}} class="position">We aim to empower the local community to support itself and its schools through support for local initiatives, food gardens & irrigation programs</span>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </section>
    )
}
export default Section5