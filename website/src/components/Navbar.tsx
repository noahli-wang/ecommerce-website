//Import that allows the link to the marketplace page
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        //Navigation link to the marketplace page
        <nav>
            <Link to="/marketplace">Marketplace</Link>
        </nav>
    );
}