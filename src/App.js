import React from "react";
import './App.css';
import Cardcomp from './components/Cardcomp';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Navbar/>
      <Cardcomp/>
      <Footer/>
    </div>
  );
}

export default App;
