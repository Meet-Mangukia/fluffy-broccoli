import React,{useEffect,useState} from 'react'
import './main.js';
import '../css/bootstrap.min.css'
import '../css/style.css';
import Dropdown from 'react-bootstrap/Dropdown';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import 'owl.carousel/dist/assets/owl.carousel.min.css';

const Signup = () => {


    const customStyle = {
        minHeight: "1080 px",
      };

  return (
    <div>
        <div className="container-xxl position-relative bg-white d-flex p-0">
        {/* <!-- Spinner Start --> */}
        {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div className="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div> */}
        {/* <!-- Spinner End -->


        <!-- Sign Up Start --> */}
        <div className="container-fluid">
            <div className="row h-100 align-items-center justify-content-center" style={customStyle}>
                <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
                    <div className="bg-light rounded p-4 p-sm-5 my-4 mx-3">
                        <div className="d-flex align-items-center justify-content-between mb-3">
                            <a href="index.html" className="">
                                <h3 className="text-primary"><i className="fa fa-hashtag me-2"></i>DASHMIN</h3>
                            </a>
                            <h3>Sign Up</h3>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingText" placeholder="jhondoe" />
                            <label for="floatingText">Username</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating mb-4">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                            <label for="floatingPassword">Password</label>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mb-4">
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <a href="">Forgot Password</a>
                        </div>
                        <button type="submit" className="btn btn-primary py-3 w-100 mb-4">Sign Up</button>
                        <p className="text-center mb-0">Already have an Account? <a href="">Sign In</a></p>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Sign Up End --> */}
    </div>

    </div>
  )
}

export default Signup