import { IoSearchSharp } from "react-icons/io5";
import amazon from "../assets/amazon .png";
const Navbar = () => (
    <nav className="homepage-nav">
                <img src={amazon}  className="logo"/>
                {/* <h4>Amazon.in</h4> */}
                <p>
                    Address:
                    <br />
                    LPU University
                </p>
                <div className="homepage-search-container">
                    <select />
                    <input type="text" placeholder="Search Amazon.in"/>
                    <button className="btn" >
                        <IoSearchSharp />
                    </button>
                </div>
                <h5>Profile</h5>
                <h5>Cart</h5>
            </nav>
)

export default Navbar;