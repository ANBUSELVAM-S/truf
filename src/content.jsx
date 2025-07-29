
      <div className="scroll-container">
  {activePage === 'booked' && (
    <div className="cards" style={{ height: '200px',marginLeft:'20rem',marginBottom:'5rem',width:'50rem' }}>
      {bookings.map((b, i) => (
        <div className="card" key={i}>
          <div className="img-box"></div>
          <div className="details">
            <h3>R.k cricket stadium (1500/-)</h3>
            <div className="tags">
              <span className="discount">70% OFF</span>
              <span>🕒 7pm - 9pm</span>
            </div>
            <div className="rating">⭐⭐⭐⭐⭐</div>
            <div className="location">📍 Sathyamangalam, erode</div>
          </div>
          <button className={`status ${b.status.toLowerCase()}`}>{b.status}</button>
        </div>
      ))}
    </div>
  )}
</div>
