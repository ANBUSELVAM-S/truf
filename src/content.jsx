import React, { useState } from 'react';
import './App.css';
import { FaHome, FaCog, FaStar, FaCreditCard, FaBook, FaEye } from 'react-icons/fa';
import { MdDateRange, MdLocationOn, MdAccessTime } from 'react-icons/md';

const categories = ['Cricket', 'Tennis', 'Football', 'Vollyball'];

const bookings = [
  { status: 'Booked' },
  { status: 'Failed' },
  { status: 'Booked' },
  { status: 'Failed' },
  { status: 'Failed' },{ status: 'Booked' },
];

export default function App() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  return (
    <>
      <div className='top' style={{ padding: '0.5rem' }}>
        <h2>𝕿𝖗𝖚𝖋</h2>
        <div><button className='head'>A</button></div>
      </div>
      <div className="app" style={{ paddingLeft: '0.5rem' }}>
        <aside className="sidebar">
          <nav>
            <ul>
              <li><FaHome /> Home</li>
              <li><FaEye /> Tracking</li>
              <li><FaBook /> Booked</li>
              <li><FaCreditCard /> Payment</li>
              <li><FaStar /> Star</li>
              <li style={{ paddingTop: '7rem' }}><FaCog /> Settings</li>
            </ul>
          </nav>
        </aside>
        </div>
        
        </>
)
} 