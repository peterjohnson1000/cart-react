import { Link } from "react-router-dom";
import "./style.css";

const Header = () => {
    return (
        <div>
            <ul className = "nav">
                <li>
                    <Link to = "/">Homepage</Link>
                </li>
                <li>
                    <Link to = "/Cart">Cart</Link>
                </li>
            </ul>
        </div>
    );
}

export default Header;