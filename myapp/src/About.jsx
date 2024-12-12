import React from "react";
import './App2.css';

const About =()=>{
    return(
        <>
           <div className="container-fluid overflow-hidden about_cental py-5">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-xl-6 wow fadeInLeft" data-wow-delay="0.2s" >
                        <div className="about-item">
                            <div className="pb-5">
                                <h1 className=" h1 fw-bold display-5 text-capitalize">Cental <span className=" text-danger fw-bold">About</span></h1>
                                <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores commodi accusantium at cum harum, excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam quia distinctio,
                                </p>
                            </div>
                            <div className="row g-4">
                                <div className="col-lg-6">
                                    <div className="about-item-inner border p-4">
                                        <div className="about-icon bg-danger rounded-circle mb-4">
                                            <img src="https://themewagon.github.io/Cental/img/about-icon-1.png" className="img-fluid w-50 h-50 m-3" alt="Icon"/>
                                        </div>
                                        <h5 className="mb-3">Our Vision</h5>
                                        <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="about-item-inner border p-4">
                                        <div className="about-icon  bg-danger rounded-circle mb-4">
                                            <img src="https://themewagon.github.io/Cental/img/about-icon-2.png" className="img-fluid h-50 w-50 m-3" alt="Icon"/>
                                        </div>
                                        <h5 className="mb-3">Our Mision</h5>
                                        <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    </div>
                                </div>
                            </div>
                            <p className="text-item my-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, aliquam ipsum. Sed suscipit dolorem libero sequi aut natus debitis reprehenderit facilis quaerat similique, est at in eum. Quo, obcaecati in!
                            </p>
                            <div className="row g-4">
                                <div className="col-lg-6">
                                    <div className="text-center rounded bg-primary p-4">
                                        <h1 className="display-6 text-white">17</h1>
                                        <h5 className="text-light mb-0">Years Of Experience</h5>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="rounded">
                                        <p className="mb-2"><i className="fa fa-check-circle text-danger me-1"></i> Morbi tristique senectus</p>
                                        <p className="mb-2"><i className="fa fa-check-circle text-danger me-1"></i> A scelerisque purus</p>
                                        <p className="mb-2"><i className="fa fa-check-circle text-danger me-1"></i> Dictumst vestibulum</p>
                                        <p className="mb-0"><i className="fa fa-check-circle text-danger me-1"></i> dio aenean sed adipiscing</p>
                                    </div>
                                </div>
                                <div className="col-lg-5 d-flex align-items-center">
                                    <a href="https://themewagon.github.io/Cental/index.html#" className="btn btn-danger fw-bold rounded py-3 px-5">More About Us</a>
                                </div>
                                <div className="col-lg-7">
                                    <div className="d-flex align-items-center">
                                        <img src="https://themewagon.github.io/Cental/img/attachment-img.jpg" className="img-fluid rounded-circle border border-4 border-secondary" style={{width: "100px", height: "100px" }}/>
                                        <div className="ms-4">
                                            <h4>William Burgess</h4>
                                            <p className="mb-0">Carveo Founder</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 wow fadeInRight" data-wow-delay="0.2s" >
                        <div className="about-img">
                            <div className="about-img-1">
                                <img src="https://themewagon.github.io/Cental/img/about-img.jpg" className="img-fluid rounded h-100 w-100" alt=""/>
                            </div>
                            <div className="about-img-2">
                                <img src="https://themewagon.github.io/Cental/img/about-img-1.jpg" className="img-fluid rounded w-100" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      {/* counter */}
        <div className="container-fluid counter bg-secondary py-5">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.1s" >
                        <div className="counter-item text-center">
                            <div className="counter-item-icon mx-auto">
                                <i className="fas fa-thumbs-up fa-2x"></i>
                            </div>
                            <div className="counter-counting my-3">
                                <span className="text-white fs-2 fw-bold" data-toggle="counter-up">829</span>
                                <span className="h1 fw-bold text-white">+</span>
                            </div>
                            <h4 className="text-white mb-0">Happy Clients</h4>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.3s" >
                        <div className="counter-item text-center">
                            <div className="counter-item-icon mx-auto">
                                <i className="fas fa-car-alt fa-2x"></i>
                            </div>
                            <div className="counter-counting my-3">
                                <span className="text-white fs-2 fw-bold" data-toggle="counter-up">56</span>
                                <span className="h1 fw-bold text-white">+</span>
                            </div>
                            <h4 className="text-white mb-0">Number of Cars</h4>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.5s" >
                        <div className="counter-item text-center">
                            <div className="counter-item-icon mx-auto">
                                <i className="fas fa-building fa-2x"></i>
                            </div>
                            <div className="counter-counting my-3">
                                <span className="text-white fs-2 fw-bold" data-toggle="counter-up">127</span>
                                <span className="h1 fw-bold text-white">+</span>
                            </div>
                            <h4 className="text-white mb-0">Car Center</h4>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.7s" >
                        <div className="counter-item text-center">
                            <div className="counter-item-icon mx-auto">
                                <i className="fas fa-clock fa-2x"></i>
                            </div>
                            <div className="counter-counting my-3">
                                <span className="text-white fs-2 fw-bold" data-toggle="counter-up">589</span>
                                <span className="h1 fw-bold text-white">+</span>
                            </div>
                            <h4 className="text-white mb-0">Total kilometers</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>

         
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
                            <a href="https://themewagon.github.io/Cental/index.html#"><i className="fas fa-angle-right me-2"></i> About</a>
                            <a href="https://themewagon.github.io/Cental/index.html#"><i className="fas fa-angle-right me-2"></i> Cars</a>
                            <a href="https://themewagon.github.io/Cental/index.html#"><i className="fas fa-angle-right me-2"></i> Car Types</a>
                            <a href="https://themewagon.github.io/Cental/index.html#"><i className="fas fa-angle-right me-2"></i> Team</a>
                            <a href="https://themewagon.github.io/Cental/index.html#"><i className="fas fa-angle-right me-2"></i> Contact us</a>
                            <a href="https://themewagon.github.io/Cental/index.html#"><i className="fas fa-angle-right me-2"></i> Terms &amp; Conditions</a>
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

export default About;