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
              <li style={{ paddingTop: '6rem' }}><FaCog /> Settings</li>
            </ul>
          </nav>
        </aside>

        <main className="content" style={{ border: '1px solid black' }}>
          
          {/* ✅ Filters with real inputs */}
          <div className="filters" style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
            {/* Date */}
            <label style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <MdDateRange  className='st'/>
              <input className='date'
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              />
            </label>

            {/* Location */}
            <label style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <MdLocationOn className='st'/>
              <input className='date'
                type="text"
                placeholder="Enter location"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
              />
            </label>

            {/* Time */}
            <label style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <MdAccessTime  className='st' />
              <input className='date'
                type="time"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
              />
            </label>
          </div>

          <div className="categories">
            {categories.map(cat => (
              <label key={cat}>
                <input className='c' type="checkbox" style={{ marginLeft: '9rem' }} /> {cat}
              </label>
            ))}
          </div>

          <div className="cards">
            {bookings.map((b, i) => (
              <div className="card" key={i}>
                <div className="img-box"></div>
                <div className="details">
                  <h3>R.k cricket stadium (1500/-)</h3>
                  <div className="tags">
                    <span className="discount">50% OFF</span>
                    <span>🕒 7pm - 9pm</span>
                  </div>
                  <div className="rating">⭐⭐⭐⭐⭐</div>
                  <div className="location">📍 Sathyamangalam,erode</div>
                </div>
                <button className={`status ${b.status.toLowerCase()}`}>{b.status}</button>
              </div>
            ))}
          </div>

        </main>
      </div>
    </>
  );
}
