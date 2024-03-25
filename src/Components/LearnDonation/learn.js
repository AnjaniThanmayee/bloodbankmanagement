import Footer from '../Footer/footer'
import Header from '../Header/header'
import './learn.css'

const LearnDonation=()=>{
    return(
        <>
        <Header/>
        <div className='learnbg'>
        <div className="blood-type-donor-table">
      <h2 className='learn-head'>Compatible Blood Type Donors</h2>
      <table className='table-learn'>
        <thead >
          <tr>
            <th >Blood Type</th>
            <th>Donate Blood To</th>
            <th>Receive Blood From</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td >A+</td>
            <td >A+ AB+</td>
            
            <td>A+ A- O+ O-</td>
          </tr>
          <tr>
            <td>O+</td>
            <td>O+ A+ B+ AB+</td>
            <td>O+ O-</td>
          </tr>
          <tr>
            <td>B+</td>
            <td>B+ AB+</td>
            <td>B+ B- O+ O-</td>
          </tr>
          <tr>
            <td>AB+</td>
            <td>AB+ Everyone</td>
            <td>AB+ A+ A- B+ B- O+ O-</td>
          </tr>
          <tr>
            <td>A-</td>
            <td>A+ A- AB+ AB-</td>
            <td>A- O-</td>
          </tr>
          <tr>
            <td>O-</td>
            <td>Everyone</td>
            <td>O-</td>
          </tr>
          <tr>
            <td>B-</td>
            <td>B+ B- AB+ AB-</td>
            <td>B- O-</td>
          </tr>
          <tr>
            <td>AB-</td>
            <td>AB+ AB-</td>
            <td>AB- A- B- O-</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="learndetails">
        <h1>Who can donate?</h1>
        <p>You need to be 18-65 years old, weigh 45kg or more and be fit and healthy.</p>
        <h1>How long does it take?</h1>
        <p> 15 minutes to donate.</p>
        <h1>How often can I donate?</h1>
        <p>Every 12 weeks</p>
        <h1>Lasts For?</h1>
        <p>Red cells can be stored for 42 days.</p>
        </div>
        </div>
        <Footer/>
        </>
    )
}

export default LearnDonation


    