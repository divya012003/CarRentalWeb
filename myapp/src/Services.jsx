import React from "react";

const Services =()=>{
    return(
        <>
        <div className="container-fluid service py-5">
            <div className="container py-5">
                <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxwidth: "800px", visibility: "visible", animationdelay: "0.1s" ,animationname: "fadeInUp"}}>
                    <h1 className="display-5 text-capitalize mb-3 fw-bold">Cental <span className="text-danger fw-bold">Services</span></h1>
                    <p className="mb-0 text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores commodi accusantium at cum harum, excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam quia distinctio,
                    </p>
                </div>
                <div className="row g-4">
                    <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s" >
                        <div className="text-center service-item p-4">
                            <div className="service-icon mb-4">
                                <i className="fa fa-phone-alt fa-2x "></i>
                            </div>
                            <h5 className="mb-3 ">Phone Reservation</h5>
                            <p className="mb-0 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsam quasi quibusdam ipsa perferendis iusto?</p>
                        </div>
                    </div>
                    <div className="text-center col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s" >
                        <div className="service-item p-4">
                            <div className="service-icon mb-4">
                                <i className="fa fa-money-bill-alt fa-2x"></i>
                            </div>
                            <h5 className="mb-3">Special Rates</h5>
                            <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsam quasi quibusdam ipsa perferendis iusto?</p>
                        </div>
                    </div>
                    <div className="text-center col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                        <div className="service-item p-4">
                            <div className="service-icon mb-4">
                                <i className="fa fa-road fa-2x"></i>
                            </div>
                            <h5 className="mb-3">One Way Rental</h5>
                            <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsam quasi quibusdam ipsa perferendis iusto?</p>
                        </div>
                    </div>
                    <div className="text-center col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s" >
                        <div className="service-item p-4">
                            <div className="service-icon mb-4">
                                <i className="fa fa-umbrella fa-2x"></i>
                            </div>
                            <h5 className="mb-3">Life Insurance</h5>
                            <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsam quasi quibusdam ipsa perferendis iusto?</p>
                        </div>
                    </div>
                    <div className="text-center col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s" >
                        <div className="service-item p-4">
                            <div className="service-icon mb-4">
                                <i className="fa fa-building fa-2x"></i>
                            </div>
                            <h5 className="mb-3">City to City</h5>
                            <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsam quasi quibusdam ipsa perferendis iusto?</p>
                        </div>
                    </div>
                    <div className="text-center col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s" >
                        <div className="service-item p-4">
                            <div className="service-icon mb-4">
                                <i className="fa fa-car-alt fa-2x"></i>
                            </div>
                            <h5 className="mb-3">Free Rides</h5>
                            <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsam quasi quibusdam ipsa perferendis iusto?</p>
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

export default Services;