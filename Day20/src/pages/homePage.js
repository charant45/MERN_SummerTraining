import { IoSearchSharp } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import ProductInfoCard from "../components/productInfoCard";
import Navbar from "../components/navbar";
import CategoryBar from "../components/categoryBar";
import Footer from "../components/footer";

import { useNavigate } from "react-router-dom";

const HomePage = (props) => {
    const { productInfoCards, categories, setSearchText } = props;

    const navigate = useNavigate();
    const openSearchPage = () => {
        navigate("/search");
    }

    return (
        <div className="homepage-root-container">
            <Navbar setSearchText={setSearchText} openSearchPage={openSearchPage} />
            <CategoryBar categories={categories} />
            <div className="homepage-body">
                <img
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/OHL/24/BAU/feb/PC_hero_1_2x_1._CB582889946_.jpg"
                    className="carousal-image"
                />
            
                <div className="products-cards-container">
                    {productInfoCards.map((elem, index) => {
                        return <ProductInfoCard key={index} data={elem} />;
                    })}
                </div>
                <div className="more-products-cards-container">
                    {productInfoCards.map((elem, index) => {
                        return <ProductInfoCard key={index} data={elem} />;
                    })}
                </div>
                    <img
                        src="https://m.media-amazon.com/images/S/pv-target-images/5dfe431f34706c7098719686ff9389b44550ced761befe5fcfa41ae9af38995c._AC_SL792_.jpg"
                        className="promo-video"
                    >
                    </img>
            </div>
            <Footer />
        </div>
    );
};

export default HomePage;
