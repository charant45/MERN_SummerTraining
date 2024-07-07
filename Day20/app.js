import ReactDOM from "react-dom/client";
import "./globalStyles.css";
import HomePage from "./src/pages/homePage";
import SearchPage from "./src/pages/amazonSearchPage";
import ProductInfo from "./src/pages/productinfo";
import { useState } from "react";
import {
    createBrowserRouter,
    Route,
    RouterProvider,
  } from "react-router-dom";

const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);

const productInfoCards = [
    {
        id: 1,
        title: "Appliances for your home | Up to 55% off",
        products: [
            {
                title: "Air Conditioners",
                img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-372x232----B08RDL6H79._SY232_CB667322346_.jpg",
            },
            {
                title: "Refrigerators",
                img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B08345R1ZW---372x232._SY232_CB667322346_.jpg",
            },
            {
                title: "Microwaves",
                img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B07G5J5FYP._SY232_CB667322346_.jpg",
            },
            {
                title: "Washing Machines",
                img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08CPQVLZT._SY232_CB667322346_.jpg",
            },
        ],
    },
    {
        id: 2,
        title: "Revamp your home in style",
        products: [
            {
                title: "Cution cover",
                img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_furnishings_2._SY116_CB555624324_.jpg",
            },
            {
                title: "Figuries, vases and more",
                img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_decor_1._SY116_CB555624324_.jpg",
            },
            {
                title: "Homestorage",
                img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_storage_1._SY116_CB555624324_.jpg",
            },
            {
                title: "Lighting Solution",
                img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08CPQVLZT._SY232_CB667322346_.jpg",
            },
        ],
    },
    {
        id: 3,
        title: "Starting ₹149 | Headphones",
        products: [
            {
                title: "Boat",
                img: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_boAt_0.5x._SY116_CB553870684_.jpg",
            },
            {
                title: "Boult",
                img: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_Boult_0.5x._SY116_CB553870684_.jpg",
            },
            {
                title: "NOICE",
                img: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_Noise_0.5x._SY116_CB553870684_.jpg",
            },
            {
                title: "Zebronics",
                img: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_Zeb_0.5x._SY116_CB553870684_.jpg",
            },
        ],
    },
    {
        id: 4,
        title: "Automotive essentials | Up to 60% off",
        products: [
            {
                title: "Glass Care",
                img: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Glasscare1X._SY116_CB410830553_.jpg",
            },
            {
                title: "Rim Care",
                img: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Rim_tyrecare1x._SY116_CB410830552_.jpg",
            },
            {
                title: "Helmet",
                img: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vega_helmet_186x116._SY116_CB405090404_.jpg",
            },
            {
                title: "Vaccum Cleaner",
                img: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vaccum1x._SY116_CB410830552_.jpg",
            },
        ],
    },
];





const categories = [
    "Fresh",
    "Amazon MiniTV",
    "Sell",
    "Best Sellers",
    "Mobiles",
    "Todays Deals",
    "Prime",
    "Fashion",
    "Electronics",
];


const App = () => {
    const [searchText, setSearchText] = useState("");

    const router = createBrowserRouter([
        {
            path: '/',
            element: <HomePage searchText={searchText}
                setSearchText={setSearchText} 
                productInfoCards = {productInfoCards} 
                categories ={categories} />
        },
        {
            path: '/search',
            element: <SearchPage searchText={searchText} 
                setSearchText={setSearchText} 
                categories = {categories} />
        },
        {
            path: '/search/:id',
            element: <ProductInfo categories ={categories}
            setSearchText={setSearchText} 
            productInfoCards = {productInfoCards} />
        },
    ]);

    return (
        <RouterProvider router={router} />
    );
};

root.render(<App />);