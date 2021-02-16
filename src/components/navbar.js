import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
    return (
        <div>

            <Link to={'/'}>DashBoard  </Link>
            <Link to={'/contactus'}>Contact us  </Link>
            <Link to={'/aboutus'}>About  </Link>
            <Link to={'/details'}>deatails  </Link>
        </div>
    );
}

export default Navbar;