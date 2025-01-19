import './First.css'

const First =() =>{
  return (
    <div className="first">
      <div className="info">
        <div className="mail">
          <div id="mail-logo"></div>
          <p className="information">info@company.com</p>
        </div>
        <p id='slash'>|</p>
        <div className="map">
          <div id="map-logo"></div> 
          <p className="information">Sunny Isles Beach, FL 33160</p>
        </div>
      </div>
      <div className="contact">
        <div id='facebook'></div>
        <div id='x'></div>
        <div id='linkedin'></div>
        <div id='instagram'></div>
      </div>
    </div>
  )
}


export default First;