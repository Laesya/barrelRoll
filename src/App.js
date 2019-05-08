import React from 'react';
import Header from '../src/components/header/Header';
import Navbar from '../src/components/navbar/Navbar';
import Router from '../src/components/Router';
import Footer from '../src/components/footer/Footer';
import './App.css';


function App() {
  return (
    <React.Fragment>
      <Header/>
      <Navbar />
      <Router />
      <Footer />
    </React.Fragment>
  );
}

export default App;
