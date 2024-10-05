import { Link } from 'react-router-dom'
import './Arrow.css'

const Arrow = () => {
  return (
    <div style={{ width: '40px', height: '40px',  backgroundColor: 'grey', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Link to='#card-section'>
    <span className="bounce" style={{ fontSize: 24, transition: '1s ease' }}>&#8595;</span></Link>
  </div>
  )
}

export default Arrow