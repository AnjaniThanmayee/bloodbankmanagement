

import Footer from '../Footer/footer'
import Header from '../Header/header'
import './Request.css'

import React from 'react'
class Request extends React.Component{
    render(){
        return(
          <>
          <Header/>
            <div className='bgcon' >
                  <h1>Blood Request Form</h1>
                  <form className='formbg'>
    <label forName="name">Hospital Name:</label>
    <input type="text" id="name" name="name" required></input>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required></input>
    <label for="phone">Phone:</label>
    <input type="text" id="phone" name="phone" required />

    <label for="units">No of Units:</label>
    <input type="text" id="units" name="units" required></input>

    <label for="blood_group">Blood Group:</label>
    <select id="blood_group" name="blood_group" required>
      <option value="">Select</option>
      <option value="A+">A+</option>
      <option value="A-">A-</option>
      <option value="B+">B+</option>
      <option value="B-">B-</option>
      <option value="AB+">AB+</option>
      <option value="AB-">AB-</option>
      <option value="O+">O+</option>
      <option value="O-">O-</option>
    </select>
    <label for="city">City</label>
    <input type="text" id="city" name="city" required></input>
    <label for="district">District</label>
    <input type="text" id="district" name="district" required></input>
    <label for="state">State</label>
    <input type="text" id="state" name="state" required></input>
    <label for="country">Country</label>
    <input type="text" id="country" name="country" required></input>
    <label for="pincode">Pincode</label>
    <input type="text" id="pincode" name="pincode" required></input>

    
    <input type="submit" value="Submit" />
  
  </form>
            </div>
            <Footer/>
            </>
        )
    }
}

export default Request





















