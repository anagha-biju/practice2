import './App.css';
import Header from "./components/header";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {Footer} from "./components/footer";
import Nav from "./components/nav";
import {HashRouter, Routes, Route} from "react-router-dom";
import {Home, Blog, Contact, Projects} from "./components/main";

function App() {
  return (
    <div >
      <HashRouter>
      <Nav/>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/project" element={<Projects/>}/>
        </Routes>
      <Footer/>
      </HashRouter>
    </div>
  );
}

export default App;
