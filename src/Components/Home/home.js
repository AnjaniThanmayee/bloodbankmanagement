// App.js

import React from 'react';
import './home.css';
import Header from '../Header/header';
import {Link} from "react-router-dom";
import Footer from '../Footer/footer';
function Home() {
  return (
    <>
    <Header/>
    
    <div className="App">
      <header  className="App-header">
        <h1  className="App-header">Blood Links</h1>
      </header>
      <main>
        <section className="hero">
          <div className="hero-content">
            <h2 className='headhome'>Donate Blood, Save Lives</h2>
            <p>
              Your donation can make a huge difference. Join us in our mission
              to help those in need.
            </p>
            <button className="donate-button" ><Link className='route-link1' to="/learn">Learn about Donation</Link></button>
          </div>
        </section>
      </main>
    
    </div>
    <Footer/>
    </>
  );
}

export default Home;