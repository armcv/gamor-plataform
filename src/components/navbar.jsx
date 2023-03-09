import React from 'react';
import { navbarRoutes as routes } from '../data/navbar-routes';

function Navbar(props) {

    return (
        <nav className="navbar">
            <div>
                {routes.map(({ name }) => (
                    <a className="navbar-route" key={name}>
                        {name}
                    </a>
                ))}

            </div>
            <span>Gamor</span>
            <div className='sign-group'>
                <a className='sign-in'>Sign In</a>
                <button>Create Account</button>
            </div>
        </nav>
    );
}

export default Navbar;