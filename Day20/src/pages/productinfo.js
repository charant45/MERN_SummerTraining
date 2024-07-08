import Navbar from "../components/navbar";
import CategoryBar from "../components/categoryBar";
import Footer from "../components/footer";
import '../../productinf.css';
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";




const ProductInfo = ({ setSearchText, categories, searchText }) => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    const navigate = useNavigate();
    const openSearchPage = ()=>{
        navigate("/search");
    }

    const fetchProduct = async () => {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
    };

    useEffect(() => {
        fetchProduct();
    }, [id]);

    if (!product) {
        return <div className="product-loading"> 🙏🏻Please Wait Product👜 is Loading...</div>;
    }

    return (
        <>
            <Navbar setSearchText={setSearchText} openSearchPage={openSearchPage} />
            <CategoryBar categories={categories} />
            <div className="product-info-container">
                <div className="product-image-container">
                    <img src={product.thumbnail} alt={product.title} className="product-image-large" />
                </div>
                <div className="product-details">
                    <h1 className="product-title">{product.title}</h1>
                    <p className="product-description">{product.description}</p>
                    <div className="product-rating">
                        {product.rating} out of 5 stars
                        <span className="rating-count">({product.stock} in stock)</span>
                    </div>
                    <p className="product-price">₹{product.price}</p>
                    <button className="add-to-cart-button-info">Buy</button>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default ProductInfo;