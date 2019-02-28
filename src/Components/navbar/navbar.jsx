import React from "react";
import AAFlag from '../../assets/AAFlag.png';
import ProfileImage from '../../assets/Profile_Agent1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './navbar.css';
import { Dropdown } from "react-bootstrap";

//stateless functional coponent

const NavBar = () => {
  const navStyle = {
    backgroundColor:'#00467f',
    color: 'white'
  };

  const searchStyle = {
    backgroundColor: '#0059a1',
    width: '90%',
    border: 0,
    paddingLeft: 5
  };

  return (
    <nav className="navbar navbar-light justify-content-between" style={navStyle}> 
      <div className="container-fluid">
        <div className="row w-100">
          <div className="col-md-4">
            <img src={AAFlag} alt="AA Flag" style={{float:'left', width:30, height:30}}/>
            <h4 style={{float:'left',fontFamily:'AmericanSans'}}>Standby List</h4>
          </div>
          <div className="col-md-4" id="searchBar">
            <form className="form-inline">
              <input type="text" className="searchInput" style={searchStyle} placeholder="Search" aria-label="Search" />
                <button className="btn btn-sm" type="submit" style={{backgroundColor:'#0059a1', padding:2}}>
                  <FontAwesomeIcon icon="search" style={{color:'#0081ea'}} />
                </button>
            </form>
          </div>
          <div className="col-md-4">
            <div style={{position:'absolute',right:5,fontFamily:'AmericanSans'}}> 
              <ul className="navbar-nav ml-auto">
                <li className="nav-link nav-item dropdown no-arrow" style={{padding:0}}>
                  <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{padding:0,color:'white'}}>
                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">John McWorker</span>
                    <img className="img-profile rounded-circle" src={ProfileImage} style={{width:40, height:40}}/>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown" style={{position:'absolute',zIndex:1}}>
                    <a className="dropdown-item" href="#">
                      Profile
                    </a>
                    <a className="dropdown-item" href="#">
                      Settings
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                      Logout
                    </a>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>

        <div className="row w-100" style={{marginTop:7, fontFamily:'AmericanSans'}}>
          <div className="col">
            <div className="text-center">
              <button className="dropdown-toggle dropdownTabs" data-toggle="dropdown">Main</button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">Start Flight Processing</a>
                <a className="dropdown-item" href="#">Adjust Gt Checks</a>
                <a className="dropdown-item" href="#">WEB REF DRS</a>
                <a className="dropdown-item" href="#">Verify CASS</a>
                <a className="dropdown-item" href="#">Keypad List Display</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="text-center">
            <button className="dropdown-toggle dropdownTabs" data-toggle="dropdown">Boarding</button>
              <div className="dropdown-menu dropright">
                <a className="dropdown-item" href="#">Child Counts</a>
                <a className="dropdown-item" href="#">Add Bag Tag</a>
                <a className="dropdown-item" href="#">Seating Options</a>
                <a className="dropdown-item" href="#">Force Boarding Pass</a>
                <a className="dropdown-item" href="#">Add/Delete SSR</a>
                <a className="dropdown-item" href="#">FLIFO</a>
                <a class="dropdown-item dropdown-toggle" data-toggle="dropdown" href="#">Secondary Boarding</a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="#">Restrict/Reopen Flight</a>
                  <a className="dropdown-item" href="#">Release PR/Held Seats</a>
                  <a className="dropdown-item" href="#">Clear Standby Pax</a>
                  <a className="dropdown-item" href="#">Process Jumpseat</a>
                  <a className="dropdown-item" href="#">Send Plan Update</a>
                  <a className="dropdown-item" href="#">Close Flight</a>
                  <a className="dropdown-item" href="#">Agent Info Mask</a>
                  <a className="dropdown-item" href="#">Print Reposts</a>
                  <a className="dropdown-item" href="#">XON Entire Flight</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="text-center">
            <button className="dropdown-toggle dropdownTabs" data-toggle="dropdown">Lists</button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">BX List</a>
                <a className="dropdown-item" href="#">Inbound Outbound Connect List</a>
                <a className="dropdown-item" href="#">Thru List</a>
                <a className="dropdown-item" href="#">Unswiped Passport List</a>
                <a className="dropdown-item" href="#">No DOCS/UNAP List</a>
                <a className="dropdown-item" href="#">SSR List</a>
                <a className="dropdown-item" href="#">Crew List</a>
                <a className="dropdown-item" href="#">AC Swap Reaccom List</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="text-center">
            <button className="dropdown-toggle dropdownTabs" data-toggle="dropdown">Support</button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">Run Hardware Wizard</a>
                <a className="dropdown-item" href="#">View Connection Info</a>
                <a className="dropdown-item" href="#">View Application Functions</a>
                <a className="dropdown-item" href="#">View Application Exceptions</a>
                <a className="dropdown-item" href="#">View Application Settings</a>
                <a className="dropdown-item" href="#">Reclaim Scanner</a>
                <a className="dropdown-item" href="#">Ask Gater</a>
                <a className="dropdown-item" href="#">Assign Printers</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="text-center">
            <button className="dropdown-toggle dropdownTabs" data-toggle="dropdown">Diversion</button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">Initialized Diverted Flight</a>
                <a className="dropdown-item" href="#">PBT</a>
                <a className="dropdown-item" href="#">FLIFO</a>
                <a className="dropdown-item" href="#">XON Entire Flight</a>
                <a className="dropdown-item" href="#">Standby List</a>
                <a className="dropdown-item" href="#">Passenger Status List</a>
                <a className="dropdown-item" href="#">Reconciled List</a>
                <a className="dropdown-item" href="#">PRS by Name</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="text-center">
            <button className="dropdown-toggle dropdownTabs" data-toggle="dropdown">IRROPS</button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">Oversales/Denied Boarding</a>
                <a className="dropdown-item" href="#">Oversales/Denied Boarding Report</a>
                <a className="dropdown-item" href="#">Restart GIDS</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="text-center">
            <button className="dropdown-toggle dropdownTabs" data-toggle="dropdown">Flight Remarks</button>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">View Flight Remarks</a>
                <a className="dropdown-item" href="#">Flight Details</a>
                <a className="dropdown-item" href="#">Cleaners</a>
                <a className="dropdown-item" href="#">Catering</a>
                <a className="dropdown-item" href="#">Pilots</a>
                <a className="dropdown-item" href="#">Flight Attendants</a>
                <a className="dropdown-item" href="#">Boarding/Bags</a>
                <a className="dropdown-item" href="#">Jetway/Flt Close</a>
                <a className="dropdown-item" href="#">Additional Remarks</a>
                <a className="dropdown-item" href="#">Tower</a>
                <a className="dropdown-item" href="#">Crew Scheduled</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
