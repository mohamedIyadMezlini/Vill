import './contact.css'
import Email from '../../assets/email-icon.png'
import Phone from  '../../assets/phone-icon.png'

const Conatct = () =>{
  return(
    <div className='contacts'>
      <h4 className='titre' id='prop'>| Contact Us</h4>
      <h3 className='title under'>Get In Touch With</h3>
      <h3 className='title under'>Our Agents</h3>
      <div className='some-contact'>
        <div className='phone inform'>
          <img alt='' className='icons' src={Phone}></img>
          <div className='qwerty'>
            <div id='number' className='sous-titre'>010-020-0340</div>
            <div className='detail' id='label'>phone number</div>
          </div>
        </div>
        <div className='email inform'>
          <img alt='' className='icons' src={Email}></img>
          <div className='qwerty'>
            <div id='emeil' className='sous-titre'>info@villa.co</div>
            <div className='detail' id='label'>Buisniss Email</div>
          </div>
        </div>
        <div className='form inform'>
          <div className='types'>
            <label>Full Name</label>
            <input placeholder='Your Name...'></input>
          </div>
          <div className='types'>
            <label>Email Address</label>
            <input type='email' placeholder='Your Address...'></input>
          </div>
          <div className='types'>
            <label>Subject</label>
            <input type='text' placeholder='Subject...'></input>
          </div>
          <div className='types'>
            <label>Message</label>
            <textarea className='message' type='message' placeholder='Your Message'></textarea>
          </div>
          <button className='but'>
            Send a message
          </button>
        </div>

      </div>
    </div>
  )
}

export default Conatct;