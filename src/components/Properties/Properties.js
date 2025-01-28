import './Properties.css'
import property1 from '../../assets/property-01.jpg'


const Properties = () =>{
  return(
    <div className='proprties'>
      <h4 className='titre' id='prop'>| Properties</h4>
      <h3 className='title under'>We Provide The Best</h3>
      <h3 className='title under'>Property You Like</h3>
      <div className='elements'>
        <div className='proper'>
          <img className='property' alt='' src={property1}></img>
          <div className='inf'>
            <div className='type'>Luxury Villa</div>
            <div className='price'>$2.264.000</div>
          </div>
          <div className='spann'>18 New Street Miami, OR 97219</div>
          <div className='more_detail'>
            <div className='detail1'>
              <div className='more'>Bedrooms: <p className='t'>8</p></div>
              <div className='more'>Bathrooms: <p className='t'>8</p></div>
            </div>
            <div className='detail1'>
            <div className='more'>Area: <p className='t'>545m2</p></div>
            <div className='more'>Floor: <p className='t'>3</p></div>
            <div className='more'>Parking: <p className='t'>6 Spots</p></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}


export default Properties;