import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Components/Home/home"
import Donar from './Components/Donar/donar'
import LearnDonation from "./Components/LearnDonation/learn"
import Recipient from "./Components/Recipient/recipient"
import Request from "./Components/Request/request"
import About from "./Components/About/about"
import Hospital from "./Components/Hospital/hospital"
import HospitalCont from "./Components/HospitalCont/hospitalcont"
import DonarDetails from "./Components/DonarDetails/donardetails"
import Thankyou from "./Components/Thankyou/thankyou"
import Login from "./Components/Login/Login"
import Register from "./Components/Register/Register"

function App() {
  return (
    <div>
    <BrowserRouter>
    
       <Routes>
           <Route path="/home" element={<Home />} />
           <Route path="about" element={<About />} />
           <Route path="donar" element={<Donar/>}/>
           <Route path="recipient" element={<Recipient/>}/>
           <Route path="request" element={<Request/>}/>
           <Route path="hospitalForm" element={<Hospital/>}/>
           <Route path="hospital" element={<HospitalCont/>}/>
          <Route path="/donardetails" element={<DonarDetails/>}/>
          <Route path="/" element={<Login/>}/>
          <Route path="/learn" element={<LearnDonation/>}/>
          <Route path="thankyou" element={<Thankyou/>}/>
          <Route path="register" element={<Register/>}/>
       </Routes>
       
     </BrowserRouter>
     </div>
      
  );
}

export default App