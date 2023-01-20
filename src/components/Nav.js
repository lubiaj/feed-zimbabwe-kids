import logo from "../images/FEEDZimLogo.jpg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home'
import About from './about'
import "./nav.css"
const Nav = ({page, setPage}) => {
  console.log(page)
    return(
        <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light scrolled awake" id="ftco-navbar">
          <div class="container">
            <a class="navbar-brand" href="index.html" style={{borderRadius: 10}}><img src={logo} height="100rem" width="auto" style={{overflow: 'hidden'}} alt=""/></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="oi oi-menu"></span> Menu
            </button>
            <div class="collapse navbar-collapse" id="ftco-nav">
              {/* <BrowserRouter>
                <Routes>
                  <Route path="/" >
                    <Route index element={<Home />} />
                    <Route path="/about" element={<About />} />
                  </Route>
                </Routes>
              </BrowserRouter> */}
              <ul class="navbar-nav ml-auto">
                <li className={page === 1 ? "nav-item active" :"nav-item"} ><a onClick={()=>setPage(1)} style={{cursor:"pointer"}} href="#" class="nav-link">Home</a></li>
                <li className={page === 2 ? "nav-item active" :"nav-item"}><a onClick={()=>setPage(2)} style={{cursor:"pointer"}} href="#" class="nav-link">About</a></li>
                {/* <li class="nav-item"><a href="causes.html" class="nav-link">Causes</a></li>
                <li class="nav-item"><a href="donate.html" class="nav-link">Donate</a></li>
                <li class="nav-item"><a href="blog.html" class="nav-link">Blog</a></li>
                <li class="nav-item"><a href="gallery.html" class="nav-link">Gallery</a></li>
                <li class="nav-item"><a href="event.html" class="nav-link">Events</a></li>
                <li class="nav-item"><a href="contact.html" class="nav-link">Contact</a></li> */}
              </ul>
            </div>
          </div>
        </nav>
    )
}

export default Nav