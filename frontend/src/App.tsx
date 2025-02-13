import { useState,useEffect } from 'react'
import axios from 'axios'
import './App.css'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

function App() {
 

  const handleFetchData = async ()=> {

    try {
      const respone = await axios.get(BACKEND_URL);
      console.log(BACKEND_URL);
      console.log(respone)
      
    } catch (error) {
      console.log(error);
      
    }

  };

  useEffect(()=> {
    handleFetchData();
  }, []);

  return (
    <>
      
      <h1>Vercel frontend</h1>
      <div className="card">
        <button onClick={() => handleFetchData()}>
         
        </button>
       
      </div>
    </>
  )
}

export default App;
