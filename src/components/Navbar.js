import React from "react";
import {SearchBox} from './index';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav className="navbar navbar-dark bg-brand">
            <div className="container">
                <Link to="/">
                    <a className="navbar-brand">
                        <img src="/img/logo.png" alt="logo" title="Mercado Libre" />
                    </a>
                </Link>

                <SearchBox navigation={props.navigation} />
            </div>
        </nav>
    );
}

export default Navbar;