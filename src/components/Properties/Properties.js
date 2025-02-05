import './Properties.css'
import property1 from '../../assets/property-01.jpg';
import property2 from '../../assets/property-02.jpg';
import property3 from '../../assets/property-03.jpg';
import property4 from '../../assets/property-04.jpg';
import property5 from '../../assets/property-05.jpg';
import property6 from '../../assets/property-06.jpg'; 
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
            <div className='detail1 p'>
            <div className='more'>Area: <p className='t'>545m2</p></div>
            <div className='more'>Floor: <p className='t'>3</p></div>
            <div className='more'>Parking: <p className='t'>6 Spots</p></div>
            </div>
          </div>
          <button className='but'>Schedule a visit</button>
        </div>

        <div className='proper'>
          <img className='property' alt='' src={property2}></img>
          <div className='inf'>
            <div className='type'>Luxury Villa</div>
            <div className='price'>$1.180.000</div>
          </div>
          <div className='spann'>54 Mid Street Florida, OR 27001</div>
          <div className='more_detail'>
            <div className='detail1'>
              <div className='more'>Bedrooms: <p className='t'>6</p></div>
              <div className='more'>Bathrooms: <p className='t'>5</p></div>
            </div>
            <div className='detail1 p'>
            <div className='more'>Area: <p className='t'>450m2</p></div>
            <div className='more'>Floor: <p className='t'>3</p></div>
            <div className='more'>Parking: <p className='t'>8 Spots</p></div>
            </div>
          </div>
          <button className='but'>Schedule a visit</button>
        </div>

        <div className='proper'>
          <img className='property' alt='' src={property3}></img>
          <div className='inf'>
            <div className='type'>Luxury Villa</div>
            <div className='price'>$1.460.000</div>
          </div>
          <div className='spann'>26 Old Street Miami, OR 38540</div>
          <div className='more_detail'>
            <div className='detail1'>
              <div className='more'>Bedrooms: <p className='t'>5</p></div>
              <div className='more'>Bathrooms: <p className='t'>4</p></div>
            </div>
            <div className='detail1 p'>
            <div className='more'>Area: <p className='t'>225m2</p></div>
            <div className='more'>Floor: <p className='t'>3</p></div>
            <div className='more'>Parking: <p className='t'>10 Spots</p></div>
            </div>
          </div>
          <button className='but'>Schedule a visit</button>
        </div>
      </div>


      <div className='elements'>
        <div className='proper'>
          <img className='property' alt='' src={property4}></img>
          <div className='inf'>
            <div className='type'>Appartment</div>
            <div className='price'>$548.500</div>
          </div>
          <div className='spann'>12 New Street Miami, OR 12650</div>
          <div className='more_detail'>
            <div className='detail1'>
              <div className='more'>Bedrooms: <p className='t'>4</p></div>
              <div className='more'>Bathrooms: <p className='t'>3</p></div>
            </div>
            <div className='detail1 p'>
            <div className='more'>Area: <p className='t'>125m2</p></div>
            <div className='more'>Floor: <p className='t'>25th</p></div>
            <div className='more'>Parking: <p className='t'>2 cars</p></div>
            </div>
          </div>
          <button className='but'>Schedule a visit</button>
        </div>

        <div className='proper'>
          <img className='property' alt='' src={property5}></img>
          <div className='inf'>
            <div className='type'>Penthouse</div>
            <div className='price'>$925.600</div>
          </div>
          <div className='spann'>34 Beach Street Miami, OR 27001</div>
          <div className='more_detail'>
            <div className='detail1'>
              <div className='more'>Bedrooms: <p className='t'>6</p></div>
              <div className='more'>Bathrooms: <p className='t'>5</p></div>
            </div>
            <div className='detail1 p'>
            <div className='more'>Area: <p className='t'>450m2</p></div>
            <div className='more'>Floor: <p className='t'>3</p></div>
            <div className='more'>Parking: <p className='t'>8 Spots</p></div>
            </div>
          </div>
          <button className='but'>Schedule a visit</button>
        </div>

        <div className='proper'>
          <img className='property' alt='' src={property6}></img>
          <div className='inf'>
            <div className='type'>Luxury Villa</div>
            <div className='price'>$1.460.000</div>
          </div>
          <div className='spann'>26 Old Street Miami, OR 38540</div>
          <div className='more_detail'>
            <div className='detail1'>
              <div className='more'>Bedrooms: <p className='t'>5</p></div>
              <div className='more'>Bathrooms: <p className='t'>4</p></div>
            </div>
            <div className='detail1 p'>
            <div className='more'>Area: <p className='t'>225m2</p></div>
            <div className='more'>Floor: <p className='t'>3</p></div>
            <div className='more'>Parking: <p className='t'>10 Spots</p></div>
            </div>
          </div>
          <button className='but'>Schedule a visit</button>
        </div>
      </div>
    </div>
  )
}


export default Properties;