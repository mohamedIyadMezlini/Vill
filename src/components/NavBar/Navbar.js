import './Navbar.css'


const NavBar=() =>{
  return (
    <div className="NavBar">
      <div className="name">
        VILLA
      </div>
      <div className="nav">
        <ul>Home</ul>
        <ul>Propeties</ul>
        <ul>Property details  </ul>
        <ul>Contact Us</ul>
        <ul id='schedule'>Schedule a visit</ul>
      </div>
    </div>
  );
}

export default NavBar;