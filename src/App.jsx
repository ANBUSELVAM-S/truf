import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomeIcon from '@mui/icons-material/Home';
import VisibilityIcon from '@mui/icons-material/Visibility';
import BookIcon from '@mui/icons-material/Book';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import SettingsIcon from '@mui/icons-material/Settings';
import Checkbox from '@mui/material/Checkbox';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='top'>
        <h2>𝕿𝖗𝖚𝖋</h2>
        <div><button>A</button></div>
      </div>
      <div className="aside">
        <div className='box' >
         
         <ul><HomeIcon className="home"/>Home</ul>
         <ul><VisibilityIcon className="home"/>   Tracking</ul>
         <ul><BookIcon className="home"/>      Booked</ul>
         <ul><AccountBalanceIcon className="home"/>    Payment</ul>
         <ul><StarRateRoundedIcon className="home"/> Star</ul>
         <ul style={{paddingTop:'6rem'}}><SettingsIcon className="home"/>            Settings</ul>
  
         </div>
         <div className="main-content">
         <div className="header">
            <div className="filters">
              <div className="filter-group">
               <Date></Date>
                <span>Date</span>
              </div>
              <div className="filter-group">
                <Checkbox></Checkbox>
                <span>Location</span>
              </div>
              <div className="filter-group">
                
                <span>Time</span>
              </div>
            </div>
            <div className="profile-icon"></div>
          </div>
        </div> 
        </div>
      
    </>
  )
}

export default App
