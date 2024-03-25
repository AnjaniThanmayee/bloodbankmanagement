import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import './donardetails.css'
const DonarDetails = () => {
  const location = useLocation();
  const donors = location.state?.donors || [];

  return (
    <>
    <Header/>
    <div className='donardetailscontainer'>

      {(donors.length > 0) ? (
        <>
          <h2>Matching Donors:</h2>
          <table class="donor-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Phone</th>
        <th>No of Units Willing to Donate</th>
      </tr>
    </thead>
    <tbody>
      {donors.map((donor) => (
        <tr key={donor.id}>
          <td>{donor.name}</td>
          <td>{donor.age}</td>
          <td>{donor.phone_number}</td>
          <td>{donor.no_of_units}</td>
        </tr>
      ))}
    </tbody>
  </table>
          
        </>
      ) : (
        <p>Sorry!! No donors Available</p>
      )}
    </div>
    <Footer/>
    </>
  );
};

export default DonarDetails;
