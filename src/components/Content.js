import React,{useEffect,useState} from 'react'
import './main.js';
import sample from '../img/sample.jpg';
import '../css/bootstrap.min.css'
import '../css/style.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';






import { Link } from 'react-router-dom';
import user from '../img/user.jpg';



function Content() {




    

  

  
  const customStyle = {
    width: "40 px",
    height: "40 px"
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
    <div className="position-relative bg-white d-flex p-0">
        {/* <!-- Spinner Start --> */}
        {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div className="spinner-border text-primary" style={customStylespinner} role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>  */}
        {/* <!-- Spinner End -->


       

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
                    <div className="d-flex align-items-center justify-content-between mb-2">
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
                            <div className="d-flex align-items-center border-bottom py-3">
                                <div className="w-100 ms-3">
                                    <div className="d-flex w-100 justify-content-between">
                                        <Link to='/Detail' style={{ textDecoration: 'none', color: 'black', transition: 'color 0.3s' }}><h6 style={{ color: '#009CFF' }} className="mb-0">Home</h6></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center border-bottom py-3">
                                <div className="w-100 ms-3">
                                    <div className="d-flex w-100 justify-content-between">
                                        <Link to='/coursecontent' style={{ textDecoration: 'none', color: 'black', transition: 'color 0.3s' }}><h6 style={{ color: '#009CFF' }} className="mb-0">Course Content</h6></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center border-bottom py-3">
                                <div className="w-100 ms-3">
                                    <div className="d-flex w-100 justify-content-between">
                                        <Link to='/assignment' style={{ textDecoration: 'none', color: 'black', transition: 'color 0.3s' }}><h6 style={{ color: '#009CFF' }} className="mb-0">Assignent Submission</h6></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center border-bottom py-3">
                                <div className="w-100 ms-3">
                                    <div className="d-flex w-100 justify-content-between">
                                        <Link to='/grades' style={{ textDecoration: 'none', color: 'black', transition: 'color 0.3s' }}><h6 style={{ color: '#009CFF' }} className="mb-0">Grades</h6></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center pt-3">
                                <div className="w-100 ms-3">
                                    <div className="d-flex w-100 justify-content-between">
                                    <Link to='/teacher' style={{ textDecoration: 'none', color: 'black', transition: 'color 0.3s' }}>
                                <h6 className="mb-0" style={{ color: '#009CFF' }}>Contact Teacher</h6>
                            </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-xl-9">
                        <div className="h-45 bg-light rounded p-4 mb-n3">
                            <div className="d-flex justify-content-center m-n2">
                                <Link to='/' style={{ textDecoration: 'none', transition: 'color 0.3s' }}><div className="me-2">
                                   <button type="button" className="btn btn-lg btn-lg-square btn-primary m-2">
                                     <i className="fa fa-file"></i>
                                   </button>
                                       <p className="text-center mb-0">Course Outline</p>
                                </div></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <Link to='/' style={{ textDecoration: 'none', transition: 'color 0.3s' }}><div className="me-2">
                                   <button type="button" className="btn btn-lg btn-lg-square btn-primary m-2">
                                     <i className="fa fa-search"></i>
                                   </button>
                                       <p className="text-center mb-0">Instructional Plan</p>
                                </div></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <Link to='/' style={{ textDecoration: 'none', transition: 'color 0.3s' }}><div>
                                   <button type="button" className="btn btn-lg btn-lg-square btn-primary m-2">
                                       <i className="fa fa-book"></i>
                                   </button>
                                        <p className="text-center mb-0">Textbook</p>
                                </div></Link>
                            </div>
                           

                            
                        </div><br></br>
                        <div className="col-sm-12 col-md-3 col-xl-12">
                        <div className="h-100 bg-light rounded p-4">
                            {/* accor start */}
                                <div className="container" >
                                    <div className="accordion accordion-flush" id="accordionExample">
                                    <div className="accordion-item" >
                                      <h2 className="accordion-header">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                          <strong>Week 1</strong>
                                        </button>
                                      </h2>
                                      <div id="collapseOne" className="accordion-collapse collapse show"  data-bs-parent="#accordionExample">
                                        <div className="accordion-body" >
                                          <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                      </div>
                                    </div>
                                    <div className="accordion-item" >
                                      <h2 className="accordion-header" >
                                        <button className="accordion-button collapsed" type="button"  data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                         <strong>Week 2</strong>
                                        </button>
                                      </h2>
                                      <div id="collapseTwo" className="accordion-collapse collapse"  data-bs-parent="#accordionExample">
                                        <div className="accordion-body" >
                                          <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                      </div>
                                    </div>
                                    <div className="accordion-item" >
                                      <h2 className="accordion-header" >
                                        <button className="accordion-button collapsed" type="button"  data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                          <strong>Week 3</strong>
                                        </button>
                                      </h2>
                                      <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                          <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                      </div>
                                    </div>
                                    <div className="accordion-item" >
                                      <h2 className="accordion-header" >
                                        <button className="accordion-button collapsed" type="button"  data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                          <strong>Week 4</strong>
                                        </button>
                                      </h2>
                                      <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                          <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  
                                </div>
                            {/* accor ends */}
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

export default Content