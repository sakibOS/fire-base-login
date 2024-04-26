import { Link } from "react-router-dom";
import React from "react";


const Header = () => {
    return (
        <div>
            <h3>this is a header</h3>
            <Link to='/'>Home</Link>
            <Link to='/login'>Log in</Link>
        </div>
    );
};

export default Header;