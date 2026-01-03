import React from 'react'
import './Footer.css'
function Footer() {
    return (
        <div>

            <div className="footer ">
                <div className="">
                    <div className="footerheading">
                        <div className="footerlogo">
                            <div className="logoicon">
                                <div className="text-4xl font-bold mb-2.5">TwinMart</div>
                            </div>

                            <div className=""></div>
                            <div className="appicons">
                                <a href="#"><img src="images/online/astore.jpg" alt="" /></a>
                                <a href="#"><img src="images/online/gplay.jpg" alt="" /></a>
                            </div>
                        </div>
                    </div>

                    <div className="mb-4">
                        <div className="text-xl font-bold">Branches</div>
                        <div className="ml-2">
                            <ul>
                                <li><h3>Bengaluru</h3></li>
                                <li><h3>Hyderabad</h3></li>
                                <li><h3>Chennai</h3></li>
                                <li><h3>Kochi</h3></li>
                                <li><h3>Mumbai</h3></li>
                                <li><h3>Delhi</h3></li>
                            </ul>
                        </div>
                    </div>

                    <div className="contactus">
                        <div className="text-xl font-bold">Contact Us</div>
                        <div className="ml-2">
                            <h3>Phone No.: +91 9876543211</h3>
                            <h3>Mail Id: contacttwinmart@gmail.com</h3>
                        </div>
                        <div className="">
                            <div className="text-xl font-bold mt-4">Connect with Us</div>
                            <div className="icons">
                                <a href="www.facebook.com"><i className="fa-brands fa-square-facebook"></i></a>
                                <a href="www.twitter.com"><i className="fa-brands fa-x-twitter"></i></a>
                                <a href="www.instagram.com"><i className="fa-brands fa-instagram"></i></a>
                            </div>
                        </div>

                    </div>
                </div>
                {/* <div className="footer1"> */}

                <div className=" footer1">
                    <div className="mb-4 ">
                        <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.003706628581!2d77.53426887484137!3d12.971614387343703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d6b4aefa973%3A0xe46d7e4498653d03!2sPentagon%20Space%20Building%202!5e0!3m2!1sen!2sin!4v1761647159221!5m2!1sen!2sin" width="600" height="200" style={{ border: 0  }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="footerLinks">
                        <a href="#"><p>About us</p></a>
                        <a href="#"><p>Privacy Policy</p></a>
                        <a href="#"><p>Terms</p></a>
                        <a href="#"><p>Pricing</p></a>
                        <a href="#"><p>Do not sell or share my personal information</p></a>
                    </div>

                    <div className="footer2">

                        <p>This site is protected by reCAPTCHA and the Google <a href="#">Privacy Policy</a> and <a href="#">Terms of Service</a> apply.</p>
                        <p>&copy;2025 TwinMart</p>
                    </div>
                </div>




            </div>






            {/* </div> */}
        </div >
    )
}

export default Footer
