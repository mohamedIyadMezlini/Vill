import './bestDeals.css';
import deal1 from '../../assets/deal-01.jpg';
import deal2 from '../../assets/deal-02.jpg';
import deal3 from '../../assets/deal-03.jpg';


const bestDeals=() =>{
  return(
    <div className='best'>
      <h4 className='titre'>| Best deals</h4>
      <div className='split'>
        <h3 className='title' id='find'>Find Your Best Deal Right Now!</h3>
        <div className='click'>Appartment </div>
      </div>
      <div className='details'>
        <div className='al'>
          <div className='detaille'>
            <div className='detail'>Total Flat Space</div>
            <div className='sous-titre'>185 m2</div>
          </div>
          <div className='detaille'>
            <div className='detail'>Floor Number</div>
            <div className='sous-titre'>26th</div>
          </div>
          <div className='detaille'>
            <div className='detail'>Number Of Rooms</div>
            <div className='sous-titre'>4</div>
          </div>
          <div className='detaille'>
            <div className='detail'>Parking Available</div>
            <div className='sous-titre'>Yes</div>
          </div>
          <div className='detaille'>
            <div className='detail'>Payment Process</div>
            <div className='sous-titre'>Bank</div>
          </div>
        </div>
        <img alt='' src={deal1}></img>
        <div className='MoreInfo'>
          <div className='spann'>Extra Info about Property</div>
          <div className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.</div>
          <div className='para'>When you need free CSS templates, you can simply type TemplateMo in any search engine website. In addition, you can type TemplateMo Portfolio, TemplateMo One Page Layouts, etc.</div>
          <button className='schedule'>Schedule a visit</button>
        </div>
      </div>


      <div className='split'>
        <h3 className='title' id='find'>Find Your Best Deal Right Now!</h3>
        <div className='click'>Villa House </div>
      </div>
      <div className='details'>
        <div className='al'>
          <div className='detaille'>
            <div className='detail'>Total Flat Space</div>
            <div className='sous-titre'>250 m2</div>
          </div>
          <div className='detaille'>
            <div className='detail'>Floor Number</div>
            <div className='sous-titre'>26th</div>
          </div>
          <div className='detaille'>
            <div className='detail'>Number Of Rooms</div>
            <div className='sous-titre'>5</div>
          </div>
          <div className='detaille'>
            <div className='detail'>Parking Available</div>
            <div className='sous-titre'>Yes</div>
          </div>
          <div className='detaille'>
            <div className='detail'>Payment Process</div>
            <div className='sous-titre'>Bank</div>
          </div>
        </div>
        <img alt='' src={deal2}></img>
        <div className='MoreInfo'>
          <div className='spann'>Extra Info about Property</div>
          <div className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.</div>
          <div className='para'>Swag fanny pack lyft blog twee. JOMO ethical copper mug, succulents typewriter shaman DIY kitsch twee taiyaki fixie hella venmo after messenger poutine next level humblebrag swag franzen.</div>
          <button className='schedule'>Schedule a visit</button>
        </div>
      </div>
      

      <div className='split'>
        <h3 className='title' id='find'>Find Your Best Deal Right Now!</h3>
        <div className='click'>Penthouse</div>
      </div>
      <div className='details'>
        <div className='al'>
          <div className='detaille'>
            <div className='detail'>Total Flat Space</div>
            <div className='sous-titre'>320 m2</div>
          </div>
          <div className='detaille'>
            <div className='detail'>Floor Number</div>
            <div className='sous-titre'>34th</div>
          </div>
          <div className='detaille'>
            <div className='detail'>Number Of Rooms</div>
            <div className='sous-titre'>6</div>
          </div>
          <div className='detaille'>
            <div className='detail'>Parking Available</div>
            <div className='sous-titre'>Yes</div>
          </div>
          <div className='detaille'>
            <div className='detail'>Payment Process</div>
            <div className='sous-titre'>Bank</div>
          </div>
        </div>
        <img alt='' src={deal3}></img>
        <div className='MoreInfo'>
          <div className='spann'>Extra Info about Property</div>
          <div className='para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.</div>
          <div className='para'>Swag fanny pack lyft blog twee. JOMO ethical copper mug, succulents typewriter shaman DIY kitsch twee taiyaki fixie hella venmo after messenger poutine next level humblebrag swag franzen.</div>
          <button className='schedule'>Schedule a visit</button>
        </div>
      </div>
    </div>
  )
}

export default bestDeals;