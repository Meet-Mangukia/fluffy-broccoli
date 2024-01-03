import React,{useEffect,useState} from 'react'
import './main.js';
import sample from '../img/sample.jpg';
import '../css/bootstrap.min.css'
import '../css/style.css';
import Dropdown from 'react-bootstrap/Dropdown';
//import 'bootstrap/dist/css/bootstrap.min.css';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import Card from 'react-bootstrap/Card';

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


function Blankpage() {

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

  const customCard = {
    width: "500rem",
    height: "5rem"
  };

  const titleStyle = {
    textAlign: 'left',
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
    <div class="container-xxl position-relative bg-white d-flex p-0">
        {/* <!-- Spinner Start --> */}
        {/* <div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div class="spinner-border text-primary" style={customStylespinner} role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>  */}
        {/* <!-- Spinner End -->


        <!-- Sidebar Start --> */}
        <div class="sidebar pe-4 pb-3">
            <nav class="navbar bg-light navbar-light">
               <Link to="/" class="navbar-brand mx-4 mb-3">
                    <h3 class="text-primary"><i class="fa fa-hashtag me-2"></i>DASHMIN</h3>
                </Link>
                <div class="d-flex align-items-center ms-4 mb-4">
                    <div class="position-relative">
                        <img className="rounded-circle" src={user} alt="" style={customStyle} />
                        <div class="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
                    </div>
                    <div class="ms-3">
                        <h6 class="mb-0">Jhon Doe</h6>
                        <span>Admin</span>
                    </div>
                </div>
                <div class="navbar-nav w-100">
                    <a href="index.html" class="nav-item nav-link active"><i class="fa fa-tachometer-alt me-2"></i>Dashboard</a>
                    

                    {/* Dropdown starts */}
                    <div id='mydiv'>
                     <Dropdown className='' show={isDropdownOpen} onToggle={toggleDropdown}>
                        <div className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
      <Dropdown.Toggle style={{color: 'black'}} className='btn-default' id='mydiv'>
      <i class="fa fa-laptop me-2"></i>Elements
      </Dropdown.Toggle></div>

      <Dropdown.Menu className="dropdown-menu bg-transparent border-0">
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown></div>
                    {/* Dropdown ends */}
                    <a href="widget.html" class="nav-item nav-link"><i class="fa fa-th me-2"></i>Widgets</a>
                    <a href="form.html" class="nav-item nav-link"><i class="fa fa-keyboard me-2"></i>Forms</a>
                    <a href="table.html" class="nav-item nav-link"><i class="fa fa-table me-2"></i>Tables</a>
                    <a href="chart.html" class="nav-item nav-link"><i class="fa fa-chart-bar me-2"></i>Charts</a>
                    


                    {/* dropdown */}
                   <div id='mydiv'>
                     <Dropdown className=''>
                        <div className="nav-link dropdown-toggle">
      <Dropdown.Toggle style={{color: 'black'}} className='btn-default' id='mydiv'>
      <i class="far fa-file-alt me-2" ></i>Pages
      </Dropdown.Toggle></div>

      <Dropdown.Menu className="dropdown-menu bg-transparent border-0">
        <Dropdown.Item><Link to="/signin">Sign In</Link></Dropdown.Item>
        <Dropdown.Item><Link to="/signup">Sign Up</Link></Dropdown.Item>
        <Dropdown.Item><Link to="/error">Error 404</Link></Dropdown.Item>
        <Dropdown.Item><Link to="/blank">Blank Page</Link></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown></div>
  
                    {/* dropdown ends */}

                    
                </div>
            </nav>
        </div>
        {/* <!-- Sidebar End -->


        <!-- Content Start --> */}
        <div class="content">
            {/* <!-- Navbar Start --> */}
            <nav class="navbar navbar-expand bg-light navbar-light sticky-top px-4 py-0">
                <a href="index.html" class="navbar-brand d-flex d-lg-none me-4">
                    <h2 class="text-primary mb-0"><i class="fa fa-hashtag"></i></h2>
                </a>
                <a href="#" class="sidebar-toggler flex-shrink-0">
                    <i class="fa fa-bars"></i>
                </a>
                <form class="d-none d-md-flex ms-4">
                    <input class="form-control border-0" type="search" placeholder="Search" />
                </form>
                <div class="navbar-nav align-items-center ms-auto">
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                            <i class="fa fa-envelope me-lg-2"></i>
                            <span class="d-none d-lg-inline-flex">Message</span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                            <a href="#" class="dropdown-item">
                                <div class="d-flex align-items-center">
                                    <img class="rounded-circle" src={user} alt="" style={customStyle} />
                                    <div class="ms-2">
                                        <h6 class="fw-normal mb-0">Jhon send you a message</h6>
                                        <small>15 minutes ago</small>
                                    </div>
                                </div>
                            </a>
                            <hr class="dropdown-divider" />
                            <a href="#" class="dropdown-item">
                                <div class="d-flex align-items-center">
                                    <img class="rounded-circle" src={user} alt="" style={customStyle} />
                                    <div class="ms-2">
                                        <h6 class="fw-normal mb-0">Jhon send you a message</h6>
                                        <small>15 minutes ago</small>
                                    </div>
                                </div>
                            </a>
                            <hr class="dropdown-divider" />
                            <a href="#" class="dropdown-item">
                                <div class="d-flex align-items-center">
                                    <img class="rounded-circle" src={user} alt="" style={customStyle} />
                                    <div class="ms-2">
                                        <h6 class="fw-normal mb-0">Jhon send you a message</h6>
                                        <small>15 minutes ago</small>
                                    </div>
                                </div>
                            </a>
                            <hr className="dropdown-divider" />
                            <a href="#" class="dropdown-item text-center">See all message</a>
                        </div>
                    </div>
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                            <i class="fa fa-bell me-lg-2"></i>
                            <span class="d-none d-lg-inline-flex">Notificatin</span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                            <a href="#" class="dropdown-item">
                                <h6 class="fw-normal mb-0">Profile updated</h6>
                                <small>15 minutes ago</small>
                            </a>
                            <hr className="dropdown-divider" />
                            <a href="#" class="dropdown-item">
                                <h6 class="fw-normal mb-0">New user added</h6>
                                <small>15 minutes ago</small>
                            </a>
                            <hr class="dropdown-divider" />
                            <a href="#" class="dropdown-item">
                                <h6 class="fw-normal mb-0">Password changed</h6>
                                <small>15 minutes ago</small>
                            </a>
                            <hr class="dropdown-divider" />
                            <a href="#" class="dropdown-item text-center">See all notifications</a>
                        </div>
                    </div>
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                            <img class="rounded-circle me-lg-2" src={user} alt="" style={customStyle} />
                            <span class="d-none d-lg-inline-flex">John Doe</span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                            <a href="#" class="dropdown-item">My Profile</a>
                            <a href="#" class="dropdown-item">Settings</a>
                            <a href="#" class="dropdown-item">Log Out</a>
                        </div>
                    </div>
                </div>
            </nav>
             {/* <!-- Navbar End --> */}


 {/* <!-- Blank --> */}
 <div class="container-fluid pt-4 px-4">
    <div class="row g-4">
 <div class="col-sm-12 col-lg-5" >
    <div class="row g-4">
        <Link to="/detail">
                        <div class="bg-light text-center rounded p-4" style={{ height: '185px' }}>
                            <div class="d-flex align-items-center justify-content-between">
                                {/* Card */}
                                
                                <Card style={customCard}>
      <Card.Img  src={sample}  style={{ height: '100px', borderBottom: '1px solid #ccc' }}/>
      <Card.Body>
        <Card.Title style={titleStyle}>Programming In c++</Card.Title>
        {/* <Card.Text>
        Introduction to c programming
        </Card.Text> */}
       
      </Card.Body>
    </Card> 
                                {/* Card Ends */}


                                

                            </div>
                           
                            {/* <canvas id="salse-revenue"></canvas> */}
                        </div></Link>
                        </div>

{/*  */}

{/*  */}




                    </div>



                    <div class="col-sm-12 col-lg-5" >
                        <div class="bg-light text-center rounded p-4" style={{ height: '185px' }}>
                            <div class="d-flex align-items-center justify-content-between">
                                {/* Card */}
                                <Card style={customCard}>
      <Card.Img  src={sample}  style={{ height: '100px', borderBottom: '1px solid #ccc' }}/>
      <Card.Body>
        <Card.Title style={titleStyle}>Programming In c++</Card.Title>
        {/* <Card.Text>
        Introduction to c programming
        </Card.Text> */}
       
      </Card.Body>
    </Card> 
                                {/* Card Ends */}


                                

                            </div>
                           
                            {/* <canvas id="salse-revenue"></canvas> */}
                        </div>

{/*  */}

{/*  */}




                    </div>




                    </div>
            </div>
           
            {/* <!-- Blank --> */}


           

            {/* <!-- Footer Start --> */}
            <div class="container-fluid pt-4 px-4">
                <div class="bg-light rounded-top p-4">
                    <div class="row">
                        <div class="col-12 col-sm-6 text-center text-sm-start">
                            &copy; <a href="#">Your Site Name</a>, All Right Reserved. 
                        </div>
                        <div class="col-12 col-sm-6 text-center text-sm-end">
                            
                            Designed By <a href="https://htmlcodex.com">HTML Codex</a>
                        <br></br>
                        Distributed By <a class="border-bottom" href="https://themewagon.com" target="_blank">ThemeWagon</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Footer End --> */}
        </div>
        {/* <!-- Content End --> */}


        {/* <!-- Back to Top --> */}
        <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>
    </div>

  )
}

export default Blankpage