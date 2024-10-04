import './AdmissionBox.css';

const AdmissionBox = () => {
  return (
    <div className='container'>
      <header>
        <h1>Online SHS Admission</h1>
      </header>

      <div className="grid-container">
        <div className="section input-section">
          <p>Enter your JHS index number below.</p>
          <input type="text" placeholder="Enter JHS index number [Eg. 010602907224]" />
          <button className="btn-check">Check</button>
          <button className="btn-reset">Reset</button>
        </div>

        <div className="section assistance-section">
          <h2>Need Assistance?</h2>
          <select>
            <option>Select A School</option>
            {/* Add more options here as needed */}
          </select>
          <button className="btn-check">Contact Us</button>
        </div>
      </div>

      <div className="section video-section">
        <h2>How to Register Your Details</h2>
        <p>Watch the video below for guidance on how to register for admission.</p>
        <video style={{ width: '80%' }} controls>
          <source src="video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default AdmissionBox;
