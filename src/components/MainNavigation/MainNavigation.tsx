import React from "react";
import './MainNavigation.scss';
import dragon from '../../assets/images/header/dragon.png';

export const MainNavigation = () => {
    return (
        <>
            <div className="fixedContainer js-fixed-container">
                <div className="navContainer">
                    <section className="navBar">
                        <nav className="mainNav">
                            <ul role="menu">
                                <li>
                                    <img className="pl-header-logo"
                                        src={dragon}
                                        alt="Super League Logo" />
                                </li>
                                <li className="premierleague" tabIndex={0} aria-haspopup="true" role="menuitem">
                                    <span className="navText">Super League</span>
                                </li>
                            </ul>
                        </nav>
                    </section>

                </div>
            </div>
        </>
    )
}

export default MainNavigation;