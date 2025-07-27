// TrufApp.jsx
import React from 'react';
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
function DateSelector() {
  const [selectedDate, setSelectedDate] = useState("");
}

export default function App() {
  return (
    <>
    <div className='top' style={{padding:'0.5rem'}}>
        <h2>𝕿𝖗𝖚𝖋</h2>
        <div><button className='head'>A</button></div>
      </div>  
    <div className="app" style={{paddingLeft:'0.5rem'}}>
      <aside className="sidebar">
        <nav>
          <ul>
            <li><FaHome /> Home</li>
            <li><FaEye /> Tracking</li>
            <li><FaBook /> Booked</li>
            <li><FaCreditCard /> Payment</li>
            <li><FaStar /> Star</li>
            <li style={{paddingTop:'6rem'}}><FaCog  /> Settings</li>
          </ul>
        </nav>
      </aside>

     <main className="content">
    <div className="filters">
      <button><MdDateRange /> Date </button>
      <button><MdLocationOn /> Location</button>
      <button><MdAccessTime /> Time</button>
    </div>

    <div className="categories">
      {categories.map(cat => (
        <label key={cat}>
          <input type="checkbox" style={{ marginLeft: '9rem' }} /> {cat}
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
