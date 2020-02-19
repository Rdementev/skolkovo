import React from 'react'
import {NavLink} from "react-router-dom";



const NavBar = () => {
    return (
        <nav className="nav">
            <ul className="nav__items d-flex justify-content-around">
                <li className="nav__item">
                    <NavLink className="nav__link" to={'/main'}>Главная</NavLink>
                </li>
                <li className="nav__item">
                    <NavLink to={'/history'}>История</NavLink>
                </li>
            </ul>
        </nav>
    )
};

export default NavBar;