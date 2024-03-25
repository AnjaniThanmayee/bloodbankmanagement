
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Header from '../Header/header';
import Footer from '../Footer/footer';

const Donar = () => {
  const navigate = useNavigate();
  
  const [name, setName] = useState('');
  const [errorp, setErrorp] = useState('');
  
  const [email, setEmail] = useState('');
  const [phone_number,setPhone_number] = useState('');
  const [age,setAge]=useState();
  const [gender,setGender]=useState('');
  const [blood_group,setBloodGroup]=useState('');
  const [no_of_units,setUnits]=useState();
  const [city,setCity]=useState('');
  const [state,setSt]=useState('');
  const [district,setDist]=useState('');
  const [pincode,setPinCode]=useState('');
  const [country,setCountry]=useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validatePhoneNumber(phone_number)) {
      setErrorp('Please enter a valid phone number.');
      return;
    }
    const formData = { name, email,phone_number,age,gender,blood_group,no_of_units,city,state,district,country,pincode };
    
    
    axios.post('http://localhost:5000/save-data-donar', formData)
      .then((response) => {
        console.log(response.data);
        setName(" ");
        setEmail('');
        setPhone_number('');
        setAge();
        setBloodGroup('');
        setCity('');
        setDist('');
        setGender('');
        setPinCode('');
        setSt('');
        setUnits();
        navigate('/thankyou');
      })
      .catch((error) => {
        console.error('Error saving data:', error);
      });
    
  };
  const handlePhoneChange = (e) => {
    setPhone_number(e.target.value);
    setErrorp('');
  };
  const validatePhoneNumber = (number) => {
    // Regex pattern to validate the phone number
    const phonePattern = /^\d{10}$/; // For a 10-digit phone number

    return phonePattern.test(number);
  };

  return (
    <>
    <Header/>
    <div className='bgcon' >
                  <h1>Blood Donation Form</h1>
                  <form className='formbg' onSubmit={handleSubmit} >
    <label forName="name">Name:</label>
    <input type="text" id="name" name="name" 
    onChange={(e) => setName(e.target.value)}
 required
    ></input>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" 
    onChange={(e) => setEmail(e.target.value)}
    required></input>
    <label for="phone_number">phone Number:</label>
        <input type="text" value={phone_number} onChange={handlePhoneChange} />
      
      {errorp && <p style={{ color: 'black' }}>{errorp}</p>}
    
    <label for="age">Age:</label>
    <input type="text" id="age" name="age"
    onChange={(e) => setAge(e.target.value)}
    required />
  {age && (age < 18 || age > 60) && <p style={{ color: 'black' }}>You cannot donate blood as your age is not above 18 and below 60.</p>}
    <label for="gender">Gender:</label>
    <div class="radio-group">
     <label >
      <input type="radio" name="gender" value="male" onChange={(e) => setGender(e.target.value)} />
      Male
      <input type="radio" name="gender" value="female" onChange={(e) => setGender(e.target.value)} />
      Female
      <input type="radio" name="gender" value="other" onChange={(e) => setGender(e.target.value)} />
      Other
    </label>
    </div>
    <label for="units">No of Units:</label>
    <input type="text" id="no_of_units" name="no_of_units" onChange={(e) => setUnits(e.target.value)} required></input>

    <label for="blood_group">Blood Group:</label>
    <select id="blood_group" name="blood_group" onChange={(e) => setBloodGroup(e.target.value)} required>
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
    <input type="text" id="city" name="city" onChange={(e) => setCity(e.target.value)} required></input>
    <label for="district">District</label>
    <input type="text" id="district" name="district" onChange={(e) => setDist(e.target.value)} required></input>
    <label for="state">State</label>
    <input type="text" id="state" name="state" onChange={(e) => setSt(e.target.value)} required></input>
    <label for="country">Country</label>
    <input type="text" id="country" name="country" onChange={(e)=> setCountry(e.target.value)} required></input>
    <label for="pincode">Pincode</label>
    <input type="text" id="pincode" name="pincode" onChange={(e) => setPinCode(e.target.value)} required></input>

    
    <input type="submit"  Submit/>
    </form>
    </div>
    <Footer/>
    </>
  );
};

export default Donar;

