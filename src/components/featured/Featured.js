import './Featured.css'
import image from '../../assets/featured.jpg';
import info1 from '../../assets/info-icon-01.png'
import info2 from '../../assets/info-icon-02.png'
import info3 from '../../assets/info-icon-03.png'
import info4 from '../../assets/info-icon-04.png'
const Featured=() =>{
  return(
    <div className='featured'>
      <img alt='' className='img' src={image}></img>
      <div className='texts'>
        <h4 className='titre'>| Featured</h4>
        <h3 className='title' >Best Appartment & Sea View</h3>
        <div className='links'>
          <h5 className='useful'>Best useful links ?</h5>
          <p className='descr'>get <span className='span'>the best villa </span>website template in HTML CSS and BOOTSTRAP for your buisness. TemplateMo provides the <a href='#'>the best CSS templates </a>in the world. Please tell your friends about it</p>
          <h5>How does this work?</h5>
          <h5>Why is villa the best?</h5>
        </div>
      </div>
      <div className='all'>
        <div className='information'>
          <img alt='' className='info' src={info1}></img>
          <div className='description'>
            <div className='sous-titre'>250 m2</div>
            <div className='detail'>Total Flat Space</div>
          </div>
        </div>
        <div className='information'>
          <img alt='' className='info' src={info2}></img>
          <div className='description'>
            <div className='sous-titre'>Contract</div>
            <div className='detail'>Contract Ready</div>
          </div>
        </div>
        <div className='information'>
          <img alt='' className='info' src={info3}></img>
          <div className='description'>
            <div className='sous-titre'>Payment</div>
            <div className='detail'>Payment Process</div>
          </div>
        </div>
        <div className='information' id='last'>
          <img alt='' className='info' src={info4}></img>
          <div className='description'>
            <div className='sous-titre'>Safety</div>
            <div className='detail'>24/7 under control</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured;