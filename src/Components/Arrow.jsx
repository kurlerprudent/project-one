import './Arrow.css'

const Arrow = () => {
  return (
    <div style={{ width: '40px', height: '40px',  backgroundColor: 'grey', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <span className="bounce" style={{ fontSize: 24, transition: '1s ease' }}>&#8595;</span>
  </div>
  )
}

export default Arrow