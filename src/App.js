import React from "react";
import Nav from "./components/Nav";
import Home from "./components/Home"
import About from "./components/about"
import Footer from "./components/Footer";
import ThankYouImg from "./images/thankyou.jpeg"
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom"

const ThankYou = () => {
  return (
    <>
      <div style={{height:"auto",fontSize:"20px",padding:"184px 0px 64px 0px",textAlign:"center"}}>
        <h1 style={{fontSize:"48px",marginBottom:"32px"}}>Thank You For Giving To FEED Zimbabwe Kids</h1>
        <img style={{width:"100%",height:"auto"}} src={ThankYouImg}/>
      </div>
    </>
  )
}
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Nav page={1}/><Home /><Footer/></>} />
        <Route path="/about" element={<><Nav page={2}/><About /><Footer/></>} />
        <Route path="/thankyou" element={<><Nav page={3}/><ThankYou/><Footer/></>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
