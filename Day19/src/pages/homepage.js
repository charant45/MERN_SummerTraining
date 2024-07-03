import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import ProductInfoCard from "../components/ProductInfoCard";
// import logo from "./assets/Logo.jpg";
import amazon from "../assets/amazon .png"
import amazon_bg from "../assets/amazon_bg.png";


const categories = [
    "Fresh",
    "Mobiles",
    "Amazon miniTV",
    "Everyday Store",
    "Sell",
    "Amazon Pay",
    "Gift Cards",
    "Amazon Basics",
    "Buy Again"
]


const productInfoCards = [
    {
        id: 1,
        title: "Revamp",
        products: [
            {
                title: "Cushion",
                img: "https://www.abc.com",
            },
        ],
    },
];

const HomePage = () => {
    return (
        <div className="homepage-root-container">
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
            <div className="category-bar">
                <button>
                <RxHamburgerMenu  />
                    All
                </button>
                {/* <div className="category-items">
                    <p>Fresh</p>
                    <p>Amazon MiniTV</p>
                    <p>Sell</p>
                    <p>Amazon Pay</p>
                    <p>Today's Deals</p>
                    <p>Customer Service</p>
                    <p>Electronics</p>
                    <p>Prime</p>
                    <p>Amazon Fashion</p>
                    <p>Home & Kitchen</p>
                    <p>Books</p>
                </div> */}
                <div className="category-items">
                   {categories.map((elem) => {
                     return <p key={elem}>{elem}</p>;
                   })}
                </div>
            </div>
            <div className="homepage-body">
                <img src={amazon_bg} className="homepage-image"/>
            </div>
            <div className="products-cards-container">
                    {productInfoCards.map((elem) => {
                        return <ProductInfoCard title={elem.title} />;
                    })}
            </div>
        </div>
    );
};

export default HomePage;