import React from "react";
import ProductInfoCard from "../components/ProductInfoCard";
import Navbar from "../components/navbar";
import CategoryBar from "../components/categoryBar";
// import logo from "./assets/Logo.jpg";
import amazon_bg from "../assets/amazon_bg.png";
import content from "../assets/content-area.png";
import video from "../assets/Frame 14.png";

const HomePage = (props) => {
    const { productInfoCards, categories } = props;
    return (
        <div className="homepage-root-container">
            <Navbar />

            {/* { ..................................................... } */}
            <CategoryBar categories={categories} />

            <div className="homepage-body">
                <img src={amazon_bg} className="carousal-image"/>
                <img src={content} className="carousal-image1"/>
                <div className="products-cards-container">
                    {productInfoCards.map((elem) => {
                        return <ProductInfoCard data={elem} />;
                    })}
                </div>
                <img src={video} className="carousal-video"/> 
            </div>
        </div>
    );
};

export default HomePage;