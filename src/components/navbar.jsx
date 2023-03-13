import React from 'react';
import { navbarRoutes as routes } from '../data/navbar-routes';
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from 'react';
import ToggleSwitch from './toggle-switch';
function Navbar(props) {

    const [checked, setChecked] = useState(true);

    useEffect(() => {
        checked ?
            document.firstElementChild.setAttribute('data-theme', 'dark') :
            document.firstElementChild.setAttribute('data-theme', 'light');
    }, [checked])

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
                <NavLink to={'/sign-in'} className='sign-in'>Sign In</NavLink>
                <button>Create Account</button>
            </div>
            <ToggleSwitch id="switch"
                checked={checked}
                optionLabels={["Dark", "Light"]}
                onChange={checked => setChecked(checked)}
            />
        </nav>
    );
}

export default Navbar;