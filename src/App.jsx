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
  { status: 'Failed' },
  { status: 'Booked' },
  { status: 'Booked' },
  { status: 'Booked' },
  { status: 'Booked' },
];

const track = [
  { completed: 'Upcoming' },
  { completed: 'Ongoing' },
  { completed: 'Upcoming' },
  { completed: 'Ongoing' },
  { completed: 'Upcoming' },
  { completed: 'Ongoing' },
  { completed: 'Upcoming' },
  { completed: 'Ongoing' },
];
const transaction = [
  { completed: 'Completed' },
  { completed: 'Completed' },
  { completed: 'Completed' },
  { completed: 'Completed' },
   { completed: 'Completed' },
  { completed: 'Completed' },
   { completed: 'Completed' },
  { completed: 'Completed' },
];

export default function App() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [activePage, setActivePage] = useState('home');

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
              <li onClick={() => setActivePage('home')}><FaHome /> Home</li>
              <li onClick={() => setActivePage('tracking')}><FaEye /> Tracking</li>
              <li onClick={() => setActivePage('booked')}><FaBook /> Booked</li>
              <li onClick={() => setActivePage('payment')}><FaCreditCard /> Payment</li>
              <li onClick={() => setActivePage('star')}><FaStar /> Star</li>
              <li onClick={() => setActivePage('settings')} style={{ paddingTop: '7rem' }}><FaCog /> Settings</li>
            </ul>
          </nav>
        </aside>

        <main className="content">
          <div className="filters" style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <MdDateRange className='st' />
              <input className='date' type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
            </label>

            <label style={{ display: 'flex', alignItems: 'center', gap: '1px' }}>
              <MdLocationOn className='st' />
              <input className='date' type="text" placeholder="Enter location" value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)} />
            </label>

            <label style={{ display: 'flex', alignItems: 'center', gap: '1px' }}>
              <MdAccessTime className='st' />
              <input className='date' type="time" value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)} />
            </label>
          </div>

          <div className="categories">
            {categories.map(cat => (
              <label key={cat}>
                <input className='c' type="checkbox" style={{ marginLeft: '9rem' }} /> {cat}
              </label>
            ))}
          </div>

          <div className="scroll-container">
            {activePage === 'home' && (
              <div className="cards">
                {bookings.map((b, i) => (
                  <div className="card" key={i}>
                    <div className="img-box"></div>
                    <div className="details" style={{ width: '100%' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h3 style={{ fontWeight: 'bold' }}>R.k cricket stadium</h3>
                        <span style={{
                          background: '#ffc107',
                          color: 'black',
                          fontWeight: 'bold',
                          fontSize: '0.9rem',
                          width: '5rem',
                          borderRadius: '5px',
                          height: '1rem',
                          padding: '0.5rem',
                          marginRight: '1rem'
                        }}>
                          ⭐ Star 56
                        </span>
                      </div>

                      <div className="tags">
                        <span className="discount">50% OFF</span>
                        <span style={{ color: '#ffc107' }}>⭐⭐⭐⭐</span>
                      </div>

                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ fontSize: '0.85rem' }}>
                          🕒 7pm - 9pm<br />📍 Sathyamangalam
                        </div>
                        <button style={{
                          background: '#28c76f',
                          color: 'white',
                          width: '7rem',
                          fontSize: '1rem',
                          padding: '0.6rem 1.2rem',
                          border: 'none',
                          borderRadius: '8px',
                          fontWeight: 'bold',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginBottom: '1rem',
                          marginRight: '1rem'
                          
                        }}>
                          $1500
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activePage === 'tracking' && (
              <div className="cards">
                {track.map((b, i) => (
                  <div className="card" key={i}>
                    <div className="img-box"></div>
                    <div className="details" style={{ width: '100%' }}>
                      <h3 style={{ fontWeight: 'bold' }}>R.k cricket stadium</h3>
                      <div className="tags">
                        <span className="discount">50% OFF</span>
                        <span style={{ color: '#fff5d8ff' }}>⭐⭐⭐⭐</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ fontSize: '0.85rem' }}>
                          🕒 7pm - 9pm<br />📍 Sathyamangalam
                        </div>
                        <button className={`status ${b.completed.toLowerCase()}`}>{b.completed}</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
              {activePage === 'booked' && (
              <div className="cards">
                {bookings.map((b, i) => (
                  <div className="card" key={i}>
                    <div className="img-box"></div>
                    <div className="details" style={{ width: '100%' }}>
                      <h3 style={{ fontWeight: 'bold' }}>R.k cricket stadium</h3>
                      <div className="tags">
                        <span className="discount">50% OFF</span>
                        <span style={{ color: '#fff5d8ff' }}>⭐⭐⭐⭐</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ fontSize: '0.85rem' }}>
                          🕒 7pm - 9pm<br />📍 Sathyamangalam
                        </div>
                        <button className={`status ${b.status.toLowerCase()}`}>{b.status}</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {activePage === 'payment' && (
              <div className="pays" >
                {transaction.map((b, i) => (
                  <div className="pay"  key={i} >
                    <div className="img-box4"></div>
                    <div className="details">
                      <h3 style={{ fontWeight: 'bold',fontSize:'1.1rem' }}>R.k cricket stadium</h3>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div style={{ fontSize: '1rem',paddingBottom:'1rem'  }}>
                          🕒 7pm - 9pm<br />📍 Sathyamangalam
                        </div>
                        <button className={`status ${b.completed.toLowerCase()}`}>{b.completed}</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {activePage === 'star' && (
              <div className="stars">
                {bookings.map((b, i) => (
                  <div className="star" key={i}>
                    <div className="img-box5"></div>
                    <div className="details">
                      <h3 style={{ fontWeight: 'bold',fontSize:'1.1rem' }}>R.k cricket stadium</h3>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div style={{ fontSize: '1rem',paddingBottom:'1rem' }}>
                          🕒 7pm - 9pm<br />📍 Sathyamangalam
                        </div>
                        <button className='sbutton'><FaStar  /> Star</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
}
