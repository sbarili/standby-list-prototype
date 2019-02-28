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
            <img src={AAFlag} alt="AA Flag" style={{float:'left'}}/>
            <h4 style={{float:'left'}}>Standby List</h4>
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
            <div style={{float:'right'}}>
              <ul className="navbar-nav ml-auto">
                <li className="nav-link nav-item dropdown no-arrow" style={{padding:0}}>
                  <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{padding:0,color:'white'}}>
                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">John McWorker</span>
                    <img className="img-profile rounded-circle" src={ProfileImage} style={{width:50, height:50}}/>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                    <a className="dropdown-item" href="#">
                      Profile
                    </a>
                    <a className="dropdown-item" href="#">
                      Settings
                    </a>
                    <div className="dropdown-divider"></div>
                    <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                      Logout
                    </a>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>

        <div className="row w-100" style={{marginTop:5}}>
          <div className="col">
            {/* <div className="text-center dropdown">
              <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{padding:0,color:'white'}}>Main</a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="#">test</a>
              </div>
            </div> */}
            <div className="text-center">
              <Dropdown>
                <Dropdown.Toggle style={{backgroundColor:'#00467f',border:'none'}} >
                  Main
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">Start Flight Processing</Dropdown.Item>
                  <Dropdown.Item href="#">Adjust Gt Checks</Dropdown.Item>
                  <Dropdown.Item href="#">WEB REF DRS</Dropdown.Item>
                  <Dropdown.Item href="#">Verify CASS</Dropdown.Item>
                  <Dropdown.Item href="#">Keypad List Display</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          <div className="col">
            {/* <div className="text-center">
              <a className="nav-link" href="#" style={{padding:0,color:'white'}}>Boarding</a>
            </div> */}
            <Dropdown>
              <Dropdown.Toggle style={{backgroundColor:'#00467f',border:'none'}} >
                Boarding
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">Child Counts</Dropdown.Item>
                <Dropdown.Item href="#">Add Bag Tag</Dropdown.Item>
                <Dropdown.Item href="#">Seating Options</Dropdown.Item>
                <Dropdown.Item href="#">Force Boarding Pass</Dropdown.Item>
                <Dropdown.Item href="#">Add/Delete SSR</Dropdown.Item>
                <Dropdown.Item href="#">FLIFO</Dropdown.Item>
                <Dropdown.Item drop="right" href="#">TEST</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="col">
            {/* <div className="text-center">
              <a className="nav-link" href="#" style={{padding:0,color:'white'}}>Lists</a>
            </div> */}
            <Dropdown>
              <Dropdown.Toggle style={{backgroundColor:'#00467f',border:'none'}} >
                Lists
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">Child Counts</Dropdown.Item>
                <Dropdown.Item href="#">Add Bag Tag</Dropdown.Item>
                <Dropdown.Item href="#">Seating Options</Dropdown.Item>
                <Dropdown.Item href="#">Force Boarding Pass</Dropdown.Item>
                <Dropdown.Item href="#">Add/Delete SSR</Dropdown.Item>
                <Dropdown.Item href="#">FLIFO</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="col">
            {/* <div className="text-center">
              <a className="nav-link" href="#" style={{padding:0,color:'white'}}>Support</a>
            </div> */}
            <Dropdown>
              <Dropdown.Toggle style={{backgroundColor:'#00467f',border:'none'}} >
                Support
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">Child Counts</Dropdown.Item>
                <Dropdown.Item href="#">Add Bag Tag</Dropdown.Item>
                <Dropdown.Item href="#">Seating Options</Dropdown.Item>
                <Dropdown.Item href="#">Force Boarding Pass</Dropdown.Item>
                <Dropdown.Item href="#">Add/Delete SSR</Dropdown.Item>
                <Dropdown.Item href="#">FLIFO</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="col">
            {/* <div className="text-center">
              <a className="nav-link" href="#" style={{padding:0,color:'white'}}>Diversion</a>
            </div> */}
            <Dropdown>
              <Dropdown.Toggle style={{backgroundColor:'#00467f',border:'none'}} >
                Diversion
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">Child Counts</Dropdown.Item>
                <Dropdown.Item href="#">Add Bag Tag</Dropdown.Item>
                <Dropdown.Item href="#">Seating Options</Dropdown.Item>
                <Dropdown.Item href="#">Force Boarding Pass</Dropdown.Item>
                <Dropdown.Item href="#">Add/Delete SSR</Dropdown.Item>
                <Dropdown.Item href="#">FLIFO</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="col">
            {/* <div className="text-center">
              <a className="nav-link" href="#" style={{padding:0,color:'white'}}>IRROPS</a>
            </div> */}
            <Dropdown>
              <Dropdown.Toggle style={{backgroundColor:'#00467f',border:'none'}} >
                IRROPS
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">Child Counts</Dropdown.Item>
                <Dropdown.Item href="#">Add Bag Tag</Dropdown.Item>
                <Dropdown.Item href="#">Seating Options</Dropdown.Item>
                <Dropdown.Item href="#">Force Boarding Pass</Dropdown.Item>
                <Dropdown.Item href="#">Add/Delete SSR</Dropdown.Item>
                <Dropdown.Item href="#">FLIFO</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="col">
            {/* <div className="text-center">
              <a className="nav-link" href="#" style={{padding:0,color:'white'}}>Flight Remarks</a>
            </div> */}
            <Dropdown>
              <Dropdown.Toggle style={{backgroundColor:'#00467f',border:'none'}} >
                Flight Remarks
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">Child Counts</Dropdown.Item>
                <Dropdown.Item href="#">Add Bag Tag</Dropdown.Item>
                <Dropdown.Item href="#">Seating Options</Dropdown.Item>
                <Dropdown.Item href="#">Force Boarding Pass</Dropdown.Item>
                <Dropdown.Item href="#">Add/Delete SSR</Dropdown.Item>
                <Dropdown.Item href="#">FLIFO</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
