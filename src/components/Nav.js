import logo from "../images/FEEDZimLogo.jpg";
import "./nav.css"
const Nav = ({page}) => {
  console.log(page)
    return(
        <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light scrolled awake" id="ftco-navbar">
          <div class="container">
            <a class="navbar-brand" href="/" style={{borderRadius: 10}}><img src={logo} height="100rem" width="auto" style={{overflow: 'hidden'}} alt=""/></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="oi oi-menu"></span> Menu
            </button>
            <div class="collapse navbar-collapse" id="ftco-nav">
              <ul class="navbar-nav ml-auto">
                <li className={page === 1 ? "nav-item active" :"nav-item"} ><a style={{cursor:"pointer"}} href="/" class="nav-link">Home</a></li>
                <li className={page === 2 ? "nav-item active" :"nav-item"}><a style={{cursor:"pointer"}} href="/about" class="nav-link">About</a></li>
              </ul>
            </div>
          </div>
        </nav>
    )
}

export default Nav