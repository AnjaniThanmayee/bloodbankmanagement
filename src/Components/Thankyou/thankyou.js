import Footer from "../Footer/footer"
import Header from "../Header/header"
import './thankyou.css'
const Thankyou=()=>{
    return(
        <>
        <Header/>
        
        <div className="thankyou-container">
            <h1>Thank you!!</h1>
            <p>Your form has been submitted successfully.</p>
        </div>
<Footer/>
        </>
    )
}

export default Thankyou