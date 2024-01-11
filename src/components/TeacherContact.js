import React,{useEffect,useState} from 'react'
import './main.js';
import sample from '../img/sample.jpg';
import '../css/bootstrap.min.css'
import '../css/style.css';
import Dropdown from 'react-bootstrap/Dropdown';
//import 'bootstrap/dist/css/bootstrap.min.css';

import Card from 'react-bootstrap/Card';

// import {Nav ,NavDropdown,Navbar} from 'react-bootstrap';
// import {LinkContainer} from 'react-router-bootstrap';
//import '../scss/bootstrap.scss';
import { Link } from 'react-router-dom';
import user from '../img/user.jpg';
import testimonial from '../img/testimonial-1.jpg';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid'
import CanvasJSReact from '@canvasjs/react-charts';
//import 'bootstrap/dist/js/bootstrap.bundle.min.js';


var CanvasJSChart = CanvasJSReact.CanvasJSChart;


function TeacherContact() {

  

  
  const customStyle = {
    width: "40 px",
    height: "40 px"
  };

  const customStyle1 = {
    width: "100 px",
    height: "100 px"
  };

 const listGroup={
    borderBottom:'none'
 };




 useEffect(() => {
    // Your code that depends on main.js can go here
    document.title = 'Subject Name';
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
    <div className="position-relative bg-white d-flex p-0 align-items-center">
        {/* <!-- Spinner Start --> */}
        {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div className="spinner-border text-primary" style={customStylespinner} role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>  */}
        {/* <!-- Spinner End --> */}


        


        {/* <!-- Content Start -->  */}
        <div className="content">
            {/* <!-- Navbar Start --> */}
            <nav className="navbar navbar-expand bg-light navbar-light sticky-top px-4 py-0" style={{ maxWidth: '1000px' }}>
                <a href="index.html" className="navbar-brand d-flex d-lg-none me-4">
                    <h2 className="text-primary mb-0"><i className="fa fa-hashtag"></i></h2>
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


 {/* <!-- Blank --> */}



   


            {/* <!-- Recent Sales Start -->  */}
            {/* url start */}
            <div className="container-fluid pt-4 px-0 ">
                <div className="bg-light text-center rounded p-4" style={{ maxWidth: '1000px' }}>
                    <div className="d-flex align-items-center justify-content mb-n2">
                    <Link to="/">Home</Link>&nbsp;<i className="fa fa-chevron-right"></i>&nbsp;<Link to="/detail">Subject Name</Link>&nbsp;<i className="fa fa-chevron-right"></i> &nbsp;<Link to='/teacher'>Teacher Contact</Link>

                    </div>
                </div>
            </div>
            {/* url end */}
            <div className="container-fluid pt-3 px-0 ">
                <div className="bg-light text-center align-items-center justify-content-between rounded p-2" style={{ maxWidth: '1000px' }}>
                    <div className="d-flex align-items-center justify-content-between mb-1">
                        <h3>Subject Name</h3>
                    </div>
                </div>
            </div>
            {/* <!-- Recent Sales End --> */}




 


 {/* <!-- Typography Start --> */}

 <div className="container-fluid pt-2 px-0">
                <div className="row g-4" style={{ maxWidth: '1025px' }}>
                <div className="col-sm-12 col-md-6 col-xl-3">
                        <div className="h-100 bg-light rounded p-4">
                            <div className="d-flex align-items-center justify-content-between mb-2">
                            </div>
                            <div className="d-flex align-items-center py-3">
                                <div className="w-100 ms-3">
                                    <div className="d-flex w-100 justify-content-between">
                                        <Link to='/detail' style={{ textDecoration: 'none', color: 'black', transition: 'color 0.3s' }}><h6 className="mb-0 button-sidebar">Home</h6></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center py-3">
                                <div className="w-100 ms-3">
                                    <div className="d-flex w-100 justify-content-between">
                                        <Link to='/coursecontent' style={{ textDecoration: 'none', color: 'black', transition: 'color 0.3s' }}><h6 className="mb-0 button-sidebar">Course Content</h6></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center py-3">
                                <div className="w-100 ms-3">
                                    <div className="d-flex w-100 justify-content-between">
                                        <Link to='/assignment' style={{ textDecoration: 'none', color: 'black', transition: 'color 0.3s' }}><h6 className="mb-0 button-sidebar">Assignent Submission</h6></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-cente py-3">
                                <div className="w-100 ms-3">
                                    <div className="d-flex w-100 justify-content-between">
                                        <Link to='/grades' style={{ textDecoration: 'none', color: 'black', transition: 'color 0.3s' }}><h6 className="mb-0 button-sidebar">Grades</h6></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center pt-3">
                                <div className="w-100 ms-3">
                                    <div className="d-flex w-100 justify-content-between">
                                    <Link to='/teacher' style={{ textDecoration: 'none', color: 'black', transition: 'color 0.3s' }}>
                                <h6 className="mb-0 button-sidebar">Contact Teacher</h6>
                            </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-xl-9">
                        <div className="h-100 bg-light rounded p-4">
                            <div className="d-flex align-items-center justify-content-between mb-2">
                                <h6 className="mb-0">Contact Teacher</h6>
                            </div>
                            <div className="testimonial-item text-center">
                                    <img className="img-fluid rounded-circle mx-auto mb-4" src={testimonial} style={customStyle1} />
                                    <h5 className="mb-1">Teacher Name</h5>
                                    <p>Assistant Professor</p>
                                    <p className="mb-0">my name is</p>
                                    <p className="mb-0">Contact No:123</p>
                                </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            {/* <!-- Typography End --> */}



 
           
            {/* <!-- Blank --> */}


           

            {/* <!-- Footer Start --> */}
            {/* <div className="container-fluid pt-4 px-4">
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
            </div> */}
            {/* <!-- Footer End --> */}
        </div>
        {/* <!-- Content End --> */}


        {/* <!-- Back to Top --> */}
        <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
    </div>

  )
}

export default TeacherContact