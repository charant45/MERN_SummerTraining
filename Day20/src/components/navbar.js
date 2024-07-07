import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { BsAmazon } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = ({ setSearchText, openSearchPage }) => {
    const handleSearch = (e) => {
        setSearchText(e.target.value);
    };

    const navigate = useNavigate();
    const openHomePage = ()=>{
        navigate("/");
    }

    return (
        <nav className="homepage-nav">
            <BsAmazon />
            <h4 className="title-h4" onClick={openHomePage}>Amazon.in </h4>
            <p>
            <FaLocationDot />
                Address:
                <br />
                LPU University
            </p>
            <div className="homepage-search-container">
                <select className="category-select">
                    <option value="">All</option>
                    <option value="electronics">Electric</option>
                    <option value="books">Books</option>
                    {/* Add more categories as needed */}
                </select>
                <input type="text" onChange={handleSearch}  />
                <button onClick={openSearchPage}>
                    <IoSearchSharp />
                </button>
            </div>
            <h4><FaUser /> Profile</h4>
            <h4><FaShoppingCart /> Cart</h4>
        </nav>
    );
};

export default Navbar;