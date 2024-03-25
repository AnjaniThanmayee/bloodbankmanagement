import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Header from '../Header/header';
import Footer from '../Footer/footer';
const Hospital=()=>{
    const [name, setName] = useState('');
  const [errorp, setErrorp] = useState('');
  const [email, setEmail] = useState('');
  const [phone,setPhone] = useState('');
  const [age,setAge]=useState();
  const [patient_name,setPatient_name]=useState('');
  const [patient_id,setPatient_id]=useState('');

  const [blood_group,setBloodGroup]=useState('');
  const [requirement,setRequirement]=useState('');
  const [number_of_units,setUnits]=useState();
  const [city,setCity]=useState('');
  const [state,setSt]=useState('');
  const [district,setDist]=useState('');
  const [pincode,setPinCode]=useState('');
  const [country,setCountry]=useState('');
  const [donors, setDonors] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validatePhoneNumber(phone)) {
      setErrorp('Please enter a valid phone number.');
      return;
    }
    const formData = { name, email,phone,age,patient_id,patient_name,blood_group,number_of_units,requirement,city,state,district,country,pincode };
    try {
        const response = await axios.post('http://localhost:5000/save-data-hospitals', formData);
      console.log(response.data); // Check the response data received from the server

      if (response.data && response.data.donors) {
        setDonors(response.data.donors);

      } else {
        setDonors([]); 
      }
      
        setName(" ");
        setEmail('');
        setPhone('');
        setAge();
        setBloodGroup('');
        setCity('');
        setDist('');
        setPatient_id('');
        setPatient_name('');
        setRequirement('');
        setPinCode('');
        setSt('');
        setUnits();
        navigate('/donardetails', { state: { donors: response.data.donors } });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
    setErrorp('');
  };
  const validatePhoneNumber = (number) => {
    // Regex pattern to validate the phone number
    const phonePattern = /^\d{10}$/; // For a 10-digit phone number

    return phonePattern.test(number);
  };

        return(
          <>
          <Header/>
          
            <div className='bgcon' >
                  <h1>Hospital Form</h1>
                  <form className='formbg'  onSubmit={handleSubmit}>
    <label forName="name">Hospital Name:</label>
    <input type="text" id="name" name="name"
    onChange={(e) => setName(e.target.value)}
    required></input>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email"
    onChange={(e) => setEmail(e.target.value)}
    required></input>
    <label forName="patient_name">Patient Name:</label>
    <input type="text" id="patient_name" name="patient_name"
    onChange={(e) => setPatient_name(e.target.value)}
    required></input>
    <label for="Patient_id">Patient ID:</label>
    <input type="text" id="Patient_id" name="patient_id"
    onChange={(e) => setPatient_id(e.target.value)}
    required></input>
    <label for="requirement">Requirement:</label>
    <input type="text" id="requirement" name="requirement"
    onChange={(e) => setRequirement(e.target.value)}
    required></input>

    <label for="blood_group">Blood Group:</label>
    <select id="blood_group" name="blood_group"onChange={(e) => setBloodGroup(e.target.value)} required>
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
    <label for="number_of_units">No of Units:</label>
    <input type="text" id="number_of_units" name="number_of_units" onChange={(e) => setUnits(e.target.value)} required></input>
    
    <label for="phone">phone Number:</label>
        <input type="text" value={phone} onChange={handlePhoneChange} />
      
      {errorp && <p style={{ color: 'black' }}>{errorp}</p>}

    <label for="city">City</label>
    <input type="text" id="city" name="city" onChange={(e) => setCity(e.target.value)} required></input>
    <label for="district">District</label>
    <input type="text" id="district" name="district" onChange={(e) => setDist(e.target.value)} required></input>
    <label for="state">State</label>
    <input type="text" id="state" name="state" onChange={(e) => setSt(e.target.value)} required></input>
    <label for="country">Country</label>
    <input type="text" id="country" name="country" onChange={(e) => setCountry(e.target.value)} required></input>
    <label for="pincode">Pincode</label>
    <input type="text" id="pincode" name="pincode" onChange={(e) => setPinCode(e.target.value)} required></input>
    <input type="submit" value="Submit" />
  </form>
            </div>
            <Footer/>
          </>
        )
    
}

export default Hospital