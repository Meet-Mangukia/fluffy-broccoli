import React,{useEffect,useState} from 'react'
import './main.js';
import '../css/bootstrap.min.css'
import '../css/style.css';
import Dropdown from 'react-bootstrap/Dropdown';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import 'owl.carousel/dist/assets/owl.carousel.min.css';

// import {Nav ,NavDropdown,Navbar} from 'react-bootstrap';
// import {LinkContainer} from 'react-router-bootstrap';
//import '../scss/bootstrap.scss';
import { Link } from 'react-router-dom';
import user from '../img/user.jpg';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid'
import CanvasJSReact from '@canvasjs/react-charts';
//import 'bootstrap/dist/js/bootstrap.bundle.min.js';


var CanvasJSChart = CanvasJSReact.CanvasJSChart;


function Error() {

  const options = {
    
    theme: 'light',
    animationEnabled: true,
    title: {
    },

    axisX:{
      gridColor: "#191C24" ,
      gridThickness: 1 ,
      interval: 1,     
    },
    axisY:{        
      interval: 10,
      gridColor: "#191C24"
    },

    legend: {
      horizontalAlign: "center", // "center" , "right"
      verticalAlign: "top",  // "top" , "bottom"
      fontSize: 15
    },

    height:280,
    backgroundColor: "#F3F6F9",
    data: [
      {
        name:"USA",
        type: 'column',
        color: "#009CFF",
        showInLegend: true,
        dataPoints: [
          { x: 2016, y: 71, },
          { x: 2017, y: 55 },
          { x: 2018, y: 50 },
          { x: 2019, y: 65 },
          { x: 2020, y: 92 },
          { x: 2021, y: 68 },
          { x: 2022, y: 38 },
        ],
      },

      {
        name:"UK",
        type: 'column',
        color:"#62b9f0",
        showInLegend: true,
        dataPoints: [
          { x: 2016, y: 71, },
          { x: 2017, y: 55 },
          { x: 2018, y: 50 },
          { x: 2019, y: 65 },
          { x: 2020, y: 92 },
          { x: 2021, y: 68 },
          { x: 2022, y: 38 },
        ],
      },

      {
        name:"AU",
        type: 'column',
        color:"#9dd3f5",
        showInLegend: true,
        dataPoints: [
          { x: 2016, y: 71, },
          { x: 2017, y: 55 },
          { x: 2018, y: 50 },
          { x: 2019, y: 65 },
          { x: 2020, y: 92 },
          { x: 2021, y: 68 },
          { x: 2022, y: 38 },
        ],
      },


    ],
  }



  const options2 = {
    
    theme: 'light',
    animationEnabled: true,
    title: {
    },

    axisX:{
      interlacedColor: "#191C24"
          
    },

    axisY:{        
      interval: 10,
      gridColor: "#191C24"
    },

    legend: {
      horizontalAlign: "center", // "center" , "right"
      verticalAlign: "top",  // "top" , "bottom"
      fontSize: 15
    },

    axisX: {
      viewportMinimum: 2016,
      viewportMaximum: 2022
    },

    height:280,
    backgroundColor: "#F3F6F9",
    data: [
      {
        name:"USA",
        type: 'area',
        color: "#009CFF",
        showInLegend: true,
        dataPoints: [
          { x: 2016, y: 10, },
          { x: 2017, y: 45 },
          { x: 2018, y:20 },
          { x: 2019, y: 35 },
          { x: 2020, y: 25 },
          { x: 2021, y: 28 },
          { x: 2022, y: 38 },
        ],
      },

      {
        name:"UK",
        type: 'area',
        color:"#62b9f0",
        showInLegend: true,
        dataPoints: [
          { x: 2016, y: 50, },
          { x: 2017, y: 60 },
          { x: 2018, y: 40 },
          { x: 2019, y: 70 },
          { x: 2020, y: 80 },
          { x: 2021, y: 78 },
          { x: 2022, y: 48 },
        ],
      },


    ],
  }

  
  const customStyle = {
    width: "40 px",
    height: "40 px"
  };

  const customStylespinner = {
    width: "3rem",
    height: "3rem"
  };

  useEffect(() => {
    // Your code that depends on main.js can go here
  }, []);



  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to toggle the dropdown state
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    // Update the margin-top of the container based on the dropdown state
    const container = document.querySelector('.move-downwards');
    if (container) {
      container.style.marginTop = isDropdownOpen ? '200px' : '0';
    }
  }, [isDropdownOpen]);



 

  return (
    <div className="container-xxl position-relative bg-white d-flex p-0">
        {/* <!-- Spinner Start --> */}
        {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div className="spinner-border text-primary" style={customStylespinner} role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>  */}
        {/* <!-- Spinner End -->


        <!-- Sidebar Start --> */}
       <div className="sidebar pe-4 pb-3">
            <nav className="navbar bg-light navbar-light">
                <Link to="/" className="navbar-brand mx-4 mb-3">
                    <h3 className="text-primary"><i className="fa fa-hashtag me-2"></i>DASHMIN</h3>
                </Link>
                <div className="d-flex align-items-center ms-4 mb-4">
                    <div className="position-relative">
                        <img className="rounded-circle" src={user} alt="" style={customStyle} />
                        <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
                    </div>
                    <div className="ms-3">
                        <h6 className="mb-0">Jhon Doe</h6>
                        <span>Admin</span>
                    </div>
                </div>
                <div className="navbar-nav w-100">
                    <a href="index.html" className="nav-item nav-link active"><i className="fa fa-tachometer-alt me-2"></i>Dashboard</a>
                    

                    {/* Dropdown starts */}
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i className="fa fa-laptop me-2"></i>Elements</a>
                        <div className="dropdown-menu bg-transparent border-0">
                            <a href="button.html" className="dropdown-item">Buttons</a>
                            <a href="typography.html" className="dropdown-item">Typography</a>
                            <a href="element.html" className="dropdown-item">Other Elements</a>
                        </div>
                    </div>
                    {/* Dropdown ends */}
                    <a href="widget.html" className="nav-item nav-link"><i className="fa fa-th me-2"></i>Widgets</a>
                    <a href="form.html" className="nav-item nav-link"><i className="fa fa-keyboard me-2"></i>Forms</a>
                    <a href="table.html" className="nav-item nav-link"><i className="fa fa-table me-2"></i>Tables</a>
                    <a href="chart.html" className="nav-item nav-link"><i className="fa fa-chart-bar me-2"></i>Charts</a>
                    


                    {/* dropdown */}
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i className="far fa-file-alt me-2"></i>Pages</a>
                        <div className="dropdown-menu bg-transparent border-0">
                            <Link to="/signin" className="dropdown-item">Sign In</Link>
                            <Link to="/signup" className="dropdown-item">Sign Up</Link>
                            <Link to="/error" className="dropdown-item">404 Error</Link>
                            <Link to="/blank" className="dropdown-item">Blank Page</Link>
                        </div>
                    </div>
  
                    {/* dropdown ends */}

                    
                </div>
            </nav>
        </div>
        {/* <!-- Sidebar End -->


        <!-- Content Start --> */}
        <div className="content">
            {/* <!-- Navbar Start --> */}
            <nav className="navbar navbar-expand bg-light navbar-light sticky-top px-4 py-0">
                <a href="index.html" className="navbar-brand d-flex d-lg-none me-4">
                    <h2 className="text-primary mb-0"><i className="fa fa-hashtag"></i></h2>
                </a>
                <a href="#" className="sidebar-toggler flex-shrink-0">
                    <i className="fa fa-bars"></i>
                </a>
                <form className="d-none d-md-flex ms-4">
                    <input className="form-control border-0" type="search" placeholder="Search" />
                </form>
                <div className="navbar-nav align-items-center ms-auto">
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                            <i className="fa fa-envelope me-lg-2"></i>
                            <span className="d-none d-lg-inline-flex">Message</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                            <a href="#" className="dropdown-item">
                                <div className="d-flex align-items-center">
                                    <img className="rounded-circle" src={user} alt="" style={customStyle} />
                                    <div className="ms-2">
                                        <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                                        <small>15 minutes ago</small>
                                    </div>
                                </div>
                            </a>
                            <hr className="dropdown-divider" />
                            <a href="#" className="dropdown-item">
                                <div className="d-flex align-items-center">
                                    <img className="rounded-circle" src={user} alt="" style={customStyle} />
                                    <div className="ms-2">
                                        <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                                        <small>15 minutes ago</small>
                                    </div>
                                </div>
                            </a>
                            <hr className="dropdown-divider" />
                            <a href="#" className="dropdown-item">
                                <div className="d-flex align-items-center">
                                    <img className="rounded-circle" src={user} alt="" style={customStyle} />
                                    <div className="ms-2">
                                        <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                                        <small>15 minutes ago</small>
                                    </div>
                                </div>
                            </a>
                            <hr className="dropdown-divider" />
                            <a href="#" className="dropdown-item text-center">See all message</a>
                        </div>
                    </div>
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                            <i className="fa fa-bell me-lg-2"></i>
                            <span className="d-none d-lg-inline-flex">Notificatin</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                            <a href="#" className="dropdown-item">
                                <h6 className="fw-normal mb-0">Profile updated</h6>
                                <small>15 minutes ago</small>
                            </a>
                            <hr className="dropdown-divider" />
                            <a href="#" className="dropdown-item">
                                <h6 className="fw-normal mb-0">New user added</h6>
                                <small>15 minutes ago</small>
                            </a>
                            <hr className="dropdown-divider" />
                            <a href="#" className="dropdown-item">
                                <h6 className="fw-normal mb-0">Password changed</h6>
                                <small>15 minutes ago</small>
                            </a>
                            <hr className="dropdown-divider" />
                            <a href="#" className="dropdown-item text-center">See all notifications</a>
                        </div>
                    </div>
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                            <img className="rounded-circle me-lg-2" src={user} alt="" style={customStyle} />
                            <span className="d-none d-lg-inline-flex">John Doe</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                            <a href="#" className="dropdown-item">My Profile</a>
                            <a href="#" className="dropdown-item">Settings</a>
                            <a href="#" className="dropdown-item">Log Out</a>
                        </div>
                    </div>
                </div>
            </nav>
             {/* <!-- Navbar End --> */}


 {/* <!-- 404 Start --> */}
            <div className="container-fluid pt-4 px-4">
                <div className="row vh-100 bg-light rounded align-items-center justify-content-center mx-0">
                    <div className="col-md-6 text-center p-4">
                        <i className="bi bi-exclamation-triangle display-1 text-primary"></i>
                        <h1 className="display-1 fw-bold">404</h1>
                        <h1 className="mb-4">Page Not Found</h1>
                        <p className="mb-4">We’re sorry, the page you have looked for does not exist in our website!
                            Maybe go to our home page or try to use a search?</p>
                        <Link className="btn btn-primary rounded-pill py-3 px-5" to="/">Go Back To Home</Link>
                    </div>
                </div>
            </div>
            {/* <!-- 404 End --> */}


           

            {/* <!-- Footer Start --> */}
            <div className="container-fluid pt-4 px-4">
                <div className="bg-light rounded-top p-4">
                    <div className="row">
                        <div className="col-12 col-sm-6 text-center text-sm-start">
                            &copy; <a href="#">Your Site Name</a>, All Right Reserved. 
                        </div>
                        <div className="col-12 col-sm-6 text-center text-sm-end">
                            
                            Designed By <a href="https://htmlcodex.com">HTML Codex</a>
                        <br></br>
                        Distributed By <a className="border-bottom" href="https://themewagon.com" target="_blank">ThemeWagon</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Footer End --> */}
        </div>
        {/* <!-- Content End --> */}


        {/* <!-- Back to Top --> */}
        <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
    </div>

  )
}

export default Error