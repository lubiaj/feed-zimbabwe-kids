import React,{useState,useRef,useEffect} from "react";
import Nav from "./components/Nav";
// import Home from "./components/Home";
import Home from "./components/Home"
import About from "./components/about"
import Footer from "./components/Footer";


function App() {
  const [page, setPage] = useState(1)
  // const the_page_no = useRef(1)
  // useEffect(() => {
  //   if( the_page_no.current == 1 ) {
  //     the_page_no.current = 2
  //   } else if ( the_page_no.current == 2 ) {
  //     the_page_no.current = 1
  //   }
  // },[page])
  return (
    <div>
      <Nav setPage={setPage} page={page}/>
      {/* { the_page_no.current === 1 && <Home/> } */}
      { page === 1 && <Home/> }
      {/* { the_page_no.current === 2 && <About/> } */}
      { page === 2 && <About/> }
      <Footer setPage={setPage}/>
    </div>
  );
}

export default App;
