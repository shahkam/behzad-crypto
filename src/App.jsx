import FooteComponent from "./components/ui/Footer.component";
import NavbarComponent from "./components/ui/Navbar.component";
import {Routes,Route} from 'react-router-dom'
import HomePage from "./pages/Home.page";
import FAQPage from "./pages/FAQ.page";
import AboutUs from "./pages/AbdoutUs.page";
import ContactUs from "./pages/ContactUs.page";

function App() {
  return (
    <div>
       {/* Navbar */}

       <NavbarComponent />

       {/* Wrapper */}
       <div className="wrapper">
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/faq" element={<FAQPage/>}/>
          <Route path="/about-us" element={<AboutUs/>}/>
          <Route path="/contact-us" element={<ContactUs/>}/>
        </Routes>
        
       </div>

       {/* Footer */}
       <FooteComponent/>
    </div>
  );
}

export default App;
