import { useState, useEffect } from "react";

import CategoryBar from "../components/categoryBar";
import Navbar from "../components/navbar";
import { useNavigate } from "react-router-dom";
import Footer from "../components/footer";


const SearchPage = ({ categories, searchText, setSearchText }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();
    const handleProductInfo = (id) => {
        navigate(`/search/${id}`);
    };

    const fetchProducts = async () => {
        setLoading(true);
        const res = await fetch(`https://dummyjson.com/products/search?q=${searchText}`);
        const data = await res.json();
        setProducts(data.products);
        
        setLoading(false);
        console.log("API called with search text:", searchText);
    };

    useEffect(() => {      
        fetchProducts();
    }, [searchText]);

    useEffect(() => {
        fetchProducts();    
    }, []);

    return (
        <>
            <Navbar setSearchText={setSearchText} />
            <CategoryBar categories={categories} />
            {loading ? (
                <div className="product-loading"> Please Wait, Products 👜 are Loading...</div>
            ) : (
                <div className="products-container">
                    {products.map((elem) => (
                        <div key={elem.id} className="product-card" onClick={() => handleProductInfo(elem.id)}>
                            <img src={elem.thumbnail} alt={elem.title} className="product-image" />
                            <div className="product-info">
                                <h2 className="product-title">{elem.title}</h2>
                                <p className="product-description">{elem.description}</p>
                                <div className="product-rating">
                                    {elem.rating} out of 5 stars
                                    <span className="rating-count">({elem.stock} in stock)</span>
                                </div>
                                <p className="product-price">₹{elem.price}</p>
                                <button className="add-to-cart-button">Add to cart</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            <Footer/>
        </>
    );
};

export default SearchPage;