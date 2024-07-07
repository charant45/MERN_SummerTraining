import { ImFacebook2 } from "react-icons/im";
import { BsTwitterX, BsYoutube } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { FaPinterestP } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaAppStoreIos } from "react-icons/fa";
import { FaAmazonPay } from "react-icons/fa";
import { FaPaypal } from "react-icons/fa6";
import { FaGooglePay } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="section-p1">
                    <div className="col">
                        <img className="logo" src="img/logo.png" alt=""/>
                        <h4>Contact</h4>
                        <p><strong>Address:</strong> Lovely Professonal University, Phagwara, Punjab, India</p>
                        <p><strong>Phone:</strong> (+91) 93 81XX XX69</p>
                        <p><strong>Email:</strong> info@amazon.in</p>
                        <p><strong>Hours:</strong> 10:00 - 18:00, Mon - Sat</p>
                        <div className="follow">
                            <h4>Follow us</h4>
                            <div className="icon">
                                <i className="fab fa-facebook-f"><ImFacebook2 /></i>
                                <i className="fab fa-twitter"><BsTwitterX/></i>
                                <i className="fab fa-instagram"><RiInstagramFill/></i>
                                <i className="fab fa-pinterest-p"><FaPinterestP/></i>
                                <i className="fab fa-youtube"><IoLogoYoutube/></i>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <h4>About</h4>
                        <a href="#">About us</a> <br/>
                        <a href="#">Delivery Information</a> <br/>
                        <a href="#">Privacy Policy</a> <br/>
                        <a href="#">Terms & Conditions</a> <br/>
                        <a href="#">Contact Us</a>
                    </div>

                    <div className="col">
                        <h4>My Account</h4>
                        <a href="#">Sign In</a><br/>
                        <a href="#">View Cart</a><br/>
                        <a href="#">My Wishlist</a><br/>
                        <a href="#">Track My Order</a><br/>
                        <a href="#">Help</a>
                    </div>

                    <div className="col install">
                        <h4>Install App</h4>
                        <p>From App Store or Google Play</p>
                        <IoLogoGooglePlaystore/>
                        <FaAppStoreIos/>
                        <div className="row">
                            <img src="img/pay/app.jpg" alt=""/>
                            <img src="img/pay/play.jpg" alt=""/>
                        </div>
                        <p>Secured Payment Gateways </p>
                        <FaAmazonPay/>
                        <FaPaypal/>
                        <FaGooglePay/>
                        <img src="img/pay/pay.png" alt=""/>
                    </div>
                </div>

                <div className="copyright">
                    <p>© 2024, <FaGithub/> charant45</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;