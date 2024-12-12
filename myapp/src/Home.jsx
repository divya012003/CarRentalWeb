import React from "react";
import './App2.css';
import { NavLink } from 'react-router-dom';


const Home = ()=>{
    return(
        <>
        <div className="homeContainer d-flex" style={{ backgroundColor:"#f2f2f2"}}>
            <div className="form_Container">
             <div className="form">
                <h3 className="formHeading text-light mb-3">CONTINUE CAR RESERVATION</h3>
                  <div className="mb-3 d-flex justify-content-center  " style={{width:"380px",marginLeft:"120px"}}>
                     <select id="disabledSelect" className="form-select ">
                        <option>Select Your Car Type</option>
                        <option>VW Golf VII</option>
                        <option>Audi A1 S-Line</option>
                        <option>Toyota Camry</option>
                        <option>BMW 320 ModernLine</option>                       
                     </select>
                  </div>
                  <div className="mb-3 form_input  d-flex justify-content-center"  style={{ height:"40px" }}>
                    <div className="form_logo bg-light text-dark"style={{borderRadius:"5px", width:"80px"}}><i className="fa-solid fa-location-dot" style={{ color: "gray"}}></i>Pick Up</div>
                    <div className="form_city "><input  style={{ height:"40px", borderRadius:"5px",width:"300px"}} type="text" placeholder="Enter a City or Airport" /></div>
                  </div>
                  <div className="mb-3 text-light" style={{marginLeft:"120px"}}>Need a different dropoff location?</div>

                  <div className="mb-3 form_input  d-flex justify-content-center"  style={{ height:"40px" }}>
                    <div className="form_logo bg-light text-dark"style={{borderRadius:"5px",width:"80px"}}><i className="fa-solid fa-location-dot" style={{ color: "gray"}}></i>Drop off</div>
                    <div className="form_city"><input  style={{ height:"40px", borderRadius:"5px",width:"300px"}} type="text" placeholder="Enter a City or Airport" /></div>
                  </div>
                  <div className="mb-3 form_input my-3 d-flex justify-content-center"  style={{ height:"40px",}}>
                    <div className="form_logo bg-light text-dark"style={{borderRadius:"5px",width:"80px"}}><i className="fa-solid fa-calendar-days" style={{ color: "gray"}}></i>Pick Up</div>
                    <div className="form_city"><input  style={{ height:"40px", borderRadius:"5px",width:"300px"}} type="date" id="birthdate" name="birthdate" min="1900-01-01" max="2024-12-31"/></div>
                  </div>
                  <div className="mb-3 form_input my-3  d-flex justify-content-center"  style={{ height:"40px"}}>
                    <div className="form_logo bg-light text-dark "style={{borderRadius:"5px",width:"80px"}}><i className="fa-solid fa-calendar-days" style={{ color: "gray"}}></i>Drop off</div>
                    <div className="form_city"><input  style={{ height:"40px" , borderRadius:"5px",width:"300px"}} type="date" id="birthdate" name="birthdate" min="1900-01-01" max="2024-12-31"/></div>                    
                  </div>
                  <div className="mb-3 my-3 d-flex justify-content-center"  style={{ height:"40px"}}><button type="button" className="btn btn-danger mx-4 "style={{ height:"40px" , borderRadius:"5px",width:"380px"}}>Book Now</button></div>
              </div>
            </div>
            <div className="RightContainer  w-50">
              <div className="heading text-light fw-bold ">Get 15% off your rental! Plan your trip now</div>
            </div>
        </div>

        <div className="cental_features" style={{marginTop:"90px" ,}}>
         <div className="centalhead ">
         <h1 className=" h1 fw-bold display-5 text-capitalize d-flex justify-content-center">Cental <span className="text-danger mx-2 text-danger fw-bold">Feature</span></h1>
         <div className="" style={{fontFamily: "Lato" ,fontSize:"16px", width:"740px",marginLeft:"350px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores commodi accusantium at cum harum, excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam quia distinctio,</div>
         </div>
         <div className="d-flex mx-2 my-2 p-5">
         <div className="feature_div1">
            <div className="sub_div1 d-flex">
                   <div className=" my-4 w-25 "><i className="fa-solid fa-trophy fa-2x rounded-circle bg-danger w-75 h-75 p-3 m-2"></i></div>
                      <div className="d-flex " style={{width: "18rem"}}>
                        <div className="p-3 card-body  border border-0">
                           <h5 className="card-title">First className services</h5>
                           <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, in illum aperiam ullam magni eligendi?</p>              
                        </div>
                       </div>
             </div>
              <div className="sub_div2 d-flex my-4">
                 <div className=" my-4 w-25"><i className="fa fa-road fa-2x rounded-circle bg-danger w-75 h-75 p-3 m-2"></i></div>
                 <div className="d-flex " style={{width: "18rem"}}>
                   <div className="p-3 card-body">
                     <h5 className="card-title">24/7 road assistance </h5>
                      <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, in illum aperiam ullam magni eligendi?</p>              
                   </div>
                  </div>
               </div>
         </div>
         <div className="m-4 feature_img">
          <img src="https://themewagon.github.io/Cental/img/features-img.png" alt="" srcset="" />
         </div>

         <div className=" mx-3 feature_div2">
            <div className=" sub_div1 d-flex ">
                   <div className=" my-4 w-25"><i className="fa fa-tag fa-2x rounded-circle bg-danger w-75 h-75 p-3 m-2"></i></div>
                      <div className="d-flex " style={{width: "18rem"}}>
                        <div className="p-3 card-body">
                           <h5 className="card-title">Quality at Minimum</h5>
                           <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, in illum aperiam ullam magni eligendi?</p>              
                        </div>
                       </div>
             </div>
              <div className="sub_div2 d-flex my-4">
                 <div className=" my-4 w-25"><i className="fa fa-map-pin fa-2x rounded-circle bg-danger w-75 h-75 p-3 m-2"></i></div>
                 <div className=" d-flex " style={{width: "18rem"}}>
                   <div className="p-3 card-body">
                     <h5 className="card-title">Free Pick-Up & Drop-Off</h5>
                      <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, in illum aperiam ullam magni eligendi?</p>              
                   </div>
                  </div>
               </div>
         </div>
         </div>     
        </div>


        {/* <!-- Car Steps Start --> */}
        <div className="container-fluid steps py-5">
            <div className="container py-5">
                <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxwidth: "800px", visibility: "visible", animationdelay: "0.1s", animationname: "fadeInUp"}}>
                    <h1 className="display-5 fw-bold text-capitalize text-white mb-3">Cental<span className="text-danger"> Process</span></h1>
                    <p className="mb-0 text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores commodi accusantium at cum harum, excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam quia distinctio,
                    </p>
                </div>
                <div className="row g-4">
                    <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.1s" style={{ visibility: "visible", animationdelay: "0.5s", animationname: "fadeInUp"}}>
                        <div className="steps-item p-4 mb-4" style={{backgroundColor:"rgb(31,46,78)"}}>
                            <h4>Come In Contact</h4>
                            <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, dolorem!</p>
                            <div className="setps-number">01.</div>
                        </div>
                    </div>
                    <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.3s" style={{ visibility: "visible", animationdelay: "0.5s", animationname: "fadeInUp"}}>
                        <div className="steps-item p-4 mb-4"  style={{backgroundColor:"rgb(31,46,78)"}}>
                            <h4>Choose A Car</h4>
                            <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, dolorem!</p>
                            <div className="setps-number">02.</div>
                        </div>
                    </div>
                    <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.5s" style={{ visibility: "visible", animationdelay: "0.5s", animationname: "fadeInUp"}}>
                        <div className="steps-item p-4 mb-4" style={{backgroundColor:"rgb(31,46,78)"}}>
                            <h4>Enjoy Driving</h4>
                            <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, dolorem!</p>
                            <div className="setps-number">03.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Car Steps End --> */}

        {/* <!-- Blog Start --> */}
        <div className="container-fluid blog py-5">
            <div className="container py-5">
                <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxwidth: "800px", visibility: "visible", animationdelay: "0.1s", animationname: "fadeInUp"}}>
                    <h1 className="display-5 fw-bold text-capitalize mb-3">Cental<span className="text-danger"> Blog &amp; News</span></h1>
                    <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores commodi accusantium at cum harum, excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam quia distinctio,
                    </p>
                </div>
                <div className="row g-4">
                    <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.1s" style={{ visibility: "visible", animationdelay: "0.1s", animationname: "fadeInUp"}}>
                        <div className="blog-item">
                            <div className="blog-img">
                                <img src="https://themewagon.github.io/Cental/img/blog-1.jpg" className="img-fluid rounded-top w-100" alt="" />
                            </div>
                            <div className="blog-content rounded-bottom p-4">
                                <div className="blog-date bg-danger">30 Dec 2025</div>
                                <div className="blog-comment my-3">
                                    <div className="small"><span className="fa fa-user text-danger"></span><span className="ms-2">Martin.C</span></div>
                                    <div className="small"><span className="fa fa-comment-alt text-danger"></span><span className="ms-2">6 Comments</span></div>
                                </div>
                                <a href="https://themewagon.github.io/Cental/index.html#" className="h4 d-block mb-3">Rental Cars how to check driving fines?</a>
                                <p className="mb-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius libero soluta impedit eligendi? Quibusdam, laudantium.</p>
                                <a href="https://themewagon.github.io/Cental/index.html#" className="text-danger">Read More  <i className="fa fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.3s" style={{ visibility: "visible", animationdelay: "0.3s", animationname: "fadeInUp"}}>
                        <div className="blog-item">
                            <div className="blog-img">
                                <img src="https://themewagon.github.io/Cental/img/blog-2.jpg" className="img-fluid rounded-top w-100" alt=""/>
                            </div>
                            <div className="blog-content rounded-bottom p-4">
                                <div className="blog-date bg-danger">25 Dec 2025</div>
                                <div className="blog-comment my-3">
                                    <div className="small"><span className="fa fa-user text-danger"></span><span className="ms-2">Martin.C</span></div>
                                    <div className="small"><span className="fa fa-comment-alt text-danger"></span><span className="ms-2">6 Comments</span></div>
                                </div>
                                <a href="https://themewagon.github.io/Cental/index.html#" className="h4 d-block mb-3">Rental cost of sport and other cars</a>
                                <p className="mb-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius libero soluta impedit eligendi? Quibusdam, laudantium.</p>
                                <a href="https://themewagon.github.io/Cental/index.html#" className="text-danger">Read More  <i className="fa fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.5s" style={{ visibility: "visible", animationdelay: "0.1s", animationname: "fadeInUp"}}>
                        <div className="blog-item">
                            <div className="blog-img">
                                <img src="https://themewagon.github.io/Cental/img/blog-3.jpg" className="img-fluid rounded-top w-100" alt=""/>
                            </div>
                            <div className="blog-content rounded-bottom p-4">
                                <div className="blog-date bg-danger">27 Dec 2025</div>
                                <div className="blog-comment my-3">
                                    <div className="small"><span className="fa fa-user text-danger"></span><span className="ms-2">Martin.C</span></div>
                                    <div className="small"><span className="fa fa-comment-alt text-danger"></span><span className="ms-2">6 Comments</span></div>
                                </div>
                                <a href="https://themewagon.github.io/Cental/index.html#" className="h4 d-block mb-3">Document required for car rental</a>
                                <p className="mb-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius libero soluta impedit eligendi? Quibusdam, laudantium.</p>
                                <a href="https://themewagon.github.io/Cental/index.html#" className="text-danger">Read More  <i className="fa fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Blog End --> */}

        {/* <!-- Banner Start --> */}
        <div className="container-fluid banner pb-5 wow zoomInDown" data-wow-delay="0.1s" style={{ visibility: "visible", animationdelay: "0.1s", animationname: "zoomInDown"}}>
            <div className="container pb-5">
                <div className="banner-item rounded">
                    <img src="https://themewagon.github.io/Cental/img/banner-1.jpg" className="img-fluid rounded w-100" alt=""/>
                    <div className="banner-content">
                        <h2 className="text-danger">Rent Your Car</h2>
                        <h1 className="text-white">Interested in Renting?</h1>
                        <p className="text-white">Don't hesitate and send us a message.</p>
                        <div className="banner-btn">
                            <a href="https://themewagon.github.io/Cental/index.html#" className="btn btn-secondary rounded-pill py-3 px-4 px-md-5 me-2">WhatchApp</a>
                            <a href="https://themewagon.github.io/Cental/index.html#" className="btn btn-danger rounded-pill py-3 px-4 px-md-5 ms-2">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Banner End --> */}

        {/* <!-- Team Start --> */}
        <div className="container-fluid team pb-5">
            <div className="container pb-5">
                <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxwidth: "800px", visibility: "visible", animationdelay: "0.1s", animationname: "fadeInUp"}}>
                    <h1 className="display-5 fw-bold text-capitalize mb-3">Customer<span className="text-danger"> Suport</span> Center</h1>
                    <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores commodi accusantium at cum harum, excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam quia distinctio,
                    </p>
                </div>
                <div className="row g-4">
                    <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.1s" style={{ visibility: "visible", animationdelay: "0.1s", animationname: "fadeInUp"}}>
                        <div className="team-item p-4 pt-0">
                            <div className="team-img">
                                <img src="https://themewagon.github.io/Cental/img/team-1.jpg" className="img-fluid rounded w-100" alt=""/>
                            </div>
                            <div className="team-content pt-4">
                                <h4>MARTIN DOE</h4>
                                <p>Profession</p>
                                <div className="team-icon d-flex justify-content-center">
                                    <a className="btn btn-square btn-light rounded-circle mx-1" href="https://themewagon.github.io/Cental/index.html"><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square btn-light rounded-circle mx-1" href="https://themewagon.github.io/Cental/index.html"><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square btn-light rounded-circle mx-1" href="https://themewagon.github.io/Cental/index.html"><i className="fab fa-instagram"></i></a>
                                    <a className="btn btn-square btn-light rounded-circle mx-1" href="https://themewagon.github.io/Cental/index.html"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.3s" style={{ visibility: "visible", animationdelay: "0.3s", animationname: "fadeInUp"}}>
                        <div className="team-item p-4 pt-0">
                            <div className="team-img">
                                <img src="https://themewagon.github.io/Cental/img/team-2.jpg" className="img-fluid rounded w-100" alt=""/>
                            </div>
                            <div className="team-content pt-4">
                                <h4>MARTIN DOE</h4>
                                <p>Profession</p>
                                <div className="team-icon d-flex justify-content-center">
                                    <a className="btn btn-square btn-light rounded-circle mx-1" href="https://themewagon.github.io/Cental/index.html"><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square btn-light rounded-circle mx-1" href="https://themewagon.github.io/Cental/index.html"><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square btn-light rounded-circle mx-1" href="https://themewagon.github.io/Cental/index.html"><i className="fab fa-instagram"></i></a>
                                    <a className="btn btn-square btn-light rounded-circle mx-1" href="https://themewagon.github.io/Cental/index.html"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.5s" style={{ visibility: "visible", animationdelay: "0.1s", animationname: "fadeInUp"}}>
                        <div className="team-item p-4 pt-0">
                            <div className="team-img">
                                <img src="https://themewagon.github.io/Cental/img/team-3.jpg" className="img-fluid rounded w-100" alt=""/>
                            </div>
                            <div className="team-content pt-4">
                                <h4>MARTIN DOE</h4>
                                <p>Profession</p>
                                <div className="team-icon d-flex justify-content-center">
                                    <a className="btn btn-square btn-light rounded-circle mx-1" href="https://themewagon.github.io/Cental/index.html"><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square btn-light rounded-circle mx-1" href="https://themewagon.github.io/Cental/index.html"><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square btn-light rounded-circle mx-1" href="https://themewagon.github.io/Cental/index.html"><i className="fab fa-instagram"></i></a>
                                    <a className="btn btn-square btn-light rounded-circle mx-1" href="https://themewagon.github.io/Cental/index.html"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.7s" style={{ visibility: "visible", animationdelay: "0.1s", animationname: "fadeInUp"}}>
                        <div className="team-item p-4 pt-0">
                            <div className="team-img">
                                <img src="https://themewagon.github.io/Cental/img/team-4.jpg" className="img-fluid rounded w-100" alt=""/>
                            </div>
                            <div className="team-content pt-4">
                                <h4>MARTIN DOE</h4>
                                <p>Profession</p>
                                <div className="team-icon d-flex justify-content-center">
                                    <a className="btn btn-square btn-light rounded-circle mx-1" href="https://themewagon.github.io/Cental/index.html"><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square btn-light rounded-circle mx-1" href="https://themewagon.github.io/Cental/index.html"><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square btn-light rounded-circle mx-1" href="https://themewagon.github.io/Cental/index.html"><i className="fab fa-instagram"></i></a>
                                    <a className="btn btn-square btn-light rounded-circle mx-1" href="https://themewagon.github.io/Cental/index.html"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Team End --> */}

         {/* <!-- Footer Start --> */}
         <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s" style={{backgroundColor:"rgb(0,13,33)",visibility: "visible", animationdelay: "0.2s", animationname: "fadeIn"}}>
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="footer-item d-flex flex-column">
                            <div className="footer-item">
                                <h4 className="text-white mb-4">About Us</h4>
                                <p className="mb-3 text-light">Dolor amet sit justo amet elitr clita ipsum elitr est.Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit.</p>
                            </div>
                            <div className="position-relative">
                                <input className="form-control rounded-pill w-100 py-3 ps-4 pe-5" type="text" placeholder="Enter your email"/>
                                <button type="button" className="btn btn-secondary rounded-pill position-absolute top-0 end-0 py-2 mt-2 me-2">Subscribe</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="footer-item d-flex flex-column">
                            <h4 className="text-white mb-4 ">Quick Links</h4>
                            <NavLink href="https://themewagon.github.io/Cental/index.html#"><i className="fas fa-angle-right me-2"></i> About</NavLink>
                            <NavLink href="https://themewagon.github.io/Cental/index.html#"><i className="fas fa-angle-right me-2"></i> Cars</NavLink>
                            <NavLink href="https://themewagon.github.io/Cental/index.html#"><i className="fas fa-angle-right me-2"></i> Car Types</NavLink>
                            <NavLink href="https://themewagon.github.io/Cental/index.html#"><i className="fas fa-angle-right me-2"></i> Team</NavLink>
                            <NavLink href="https://themewagon.github.io/Cental/index.html#"><i className="fas fa-angle-right me-2"></i> Contact us</NavLink>
                            <NavLink href="https://themewagon.github.io/Cental/index.html#"><i className="fas fa-angle-right me-2"></i> Terms &amp; Conditions</NavLink>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="footer-item d-flex flex-column">
                            <h4 className="text-white mb-4">Business Hours</h4>
                            <div className="mb-3">
                                <h6 className="text-muted mb-0">Mon - Friday:</h6>
                                <p className="text-white mb-0">09.00 am to 07.00 pm</p>
                            </div>
                            <div className="mb-3">
                                <h6 className="text-muted mb-0">Saturday:</h6>
                                <p className="text-white mb-0">10.00 am to 05.00 pm</p>
                            </div>
                            <div className="mb-3">
                                <h6 className="text-muted mb-0">Vacation:</h6>
                                <p className="text-white mb-0">All Sunday is our vacation</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="footer-item d-flex flex-column">
                            <h4 className="text-white mb-4">Contact Info</h4>
                            <a href="https://themewagon.github.io/Cental/index.html#"><i className="fa fa-map-marker-alt me-2"></i> 123 Street, New York, USA</a>
                            <a href="mailto:info@example.com"><i className="fas fa-envelope me-2"></i> info@example.com</a>
                            <a href="tel:+012 345 67890"><i className="fas fa-phone me-2"></i> +012 345 67890</a>
                            <a href="tel:+012 345 67890" className="mb-3"><i className="fas fa-print me-2"></i> +012 345 67890</a>
                            <div className="d-flex">
                                <a className="btn btn-secondary btn-md-square rounded-circle me-3" href="https://themewagon.github.io/Cental/index.html"><i className="fab fa-facebook-f text-white"></i></a>
                                <a className="btn btn-secondary btn-md-square rounded-circle me-3" href="https://themewagon.github.io/Cental/index.html"><i className="fab fa-twitter text-white"></i></a>
                                <a className="btn btn-secondary btn-md-square rounded-circle me-3" href="https://themewagon.github.io/Cental/index.html"><i className="fab fa-instagram text-white"></i></a>
                                <a className="btn btn-secondary btn-md-square rounded-circle me-0" href="https://themewagon.github.io/Cental/index.html"><i className="fab fa-linkedin-in text-white"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Footer End --> */}

        </>
    )
}

export default Home