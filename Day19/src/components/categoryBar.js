import { RxHamburgerMenu } from "react-icons/rx";
import prime from "../assets/prime video.png";


const CategoryBar = (props) => {
    const { categories } = props;
    return (
        <div className="homepage-category-bar">
            <button>
                <RxHamburgerMenu />
                All
            </button>
            <div className="category-items">
                {categories.map((elem) => {
                    return <p key={elem}>{elem}</p>;
                })}
                <div className="category-items1">
                    <h3>CINDRELLA</h3>
                    <p>JOIN PRIME NOW</p>
                    <img src= {prime} />
                </div>
            </div>
        </div>
    );
};

export default CategoryBar;