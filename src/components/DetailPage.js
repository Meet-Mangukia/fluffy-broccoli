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


function DetailPage() {

  

  
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
    <div class="container position-absolute bg-white d-flex flex-column align-items-start">
        <h3 style={{ color: 'black', marginBottom: '1rem' }}>Subject Name<br></br>(Code)</h3>
        {/* <!-- Spinner Start --> */}
        {/* <div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div class="spinner-border text-primary" style={customStylespinner} role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>  */}
        {/* <!-- Spinner End -->


        <!-- Sidebar Start --> */}
        <div class="sidebar pe-4 pb-3" style={{ marginTop: '4em' }}>
            <nav class="navbar bg-light navbar-light">
               
                <div class="navbar-nav w-100">
                    <a href="index.html" class="nav-item nav-link active"><i class="fa fa-tachometer-alt me-2"></i>Dashboard</a>
                    

                    {/* Dropdown starts */}
                    
                    {/* Dropdown ends */}
                    <a href="widget.html" class="nav-item nav-link"><i class="fa fa-th me-2"></i>Widgets</a>
                    <a href="form.html" class="nav-item nav-link"><i class="fa fa-keyboard me-2"></i>Forms</a>
                    <a href="table.html" class="nav-item nav-link"><i class="fa fa-table me-2"></i>Tables</a>
                    <a href="chart.html" class="nav-item nav-link"><i class="fa fa-chart-bar me-2"></i>Charts</a>
                    


                   

                    
                </div>
            </nav>
        </div>
        {/* <!-- Sidebar End -->


        <!-- Content Start --> */}
        <div class="content">
            {/* <!-- Navbar Start --> */}
            
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
            
            {/* <!-- Footer End --> */}
        </div>
        {/* <!-- Content End --> */}


        {/* <!-- Back to Top --> */}
        <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>
    </div>

  )
}

export default DetailPage