import ReactDOM from "react-dom/client";
import "./styles.css";
import HomePage from "./src/pages/homepage";


const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);



const App = () => {
    return (
        <div>
            <HomePage />
        </div>
    );
};

root.render(<App />);