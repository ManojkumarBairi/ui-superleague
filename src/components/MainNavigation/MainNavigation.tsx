import React from "react";
import './MainNavigation.scss';

export const MainNavigation = () => {
    return (
      <>
      <a href="https://www.premierleague.com/home"
         className="logoContainer js-logo-container"
         aria-label="Premier League Home Page on logo link">
      <img className="pl-header-logo"
       src="https://www.premierleague.com/resources/rebrand/v7.129.2/i/elements/pl-main-logo.png"
       alt="Premier League Logo"/>
     <div className="logoBackground"></div>
        </a>
        <div className="navContainer">
    <section className="navBar">
      <nav className="mainNav">
       <ul className="pageLinks js-page-links" role="menu">
        <li className="premierleague" tabIndex={0} aria-haspopup="true" role="menuitem">
        <div role="button" className="navLink_active" tabIndex={0}>
            <span className="navText">Premier League</span>
                <span className="chevron-dropdown"></span>
        </div>

            <div className="dropdown" aria-hidden="true">
                <ul role="menu">
                        <li tabIndex={-1}>
                            <a tabIndex={0} href="/" role="menuitem">
                            Home
                            </a>
                        </li>
                        <li tabIndex={-1}>
                            <a tabIndex={0} href="/fixtures" role="menuitem">
                            Fixtures
                            </a>
                        </li>
                        <li tabIndex={-1}>
                            <a tabIndex={0} href="/results" role="menuitem">
                            Results
                            </a>
                        </li>
                        <li tabIndex={-1}>
                            <a tabIndex={0} href="/tables" role="menuitem">
                            Tables
                            </a>
                        </li>
                        <li tabIndex={-1}>
                            <a tabIndex={0} href="/transfers" role="menuitem">
                            Transfers
                            </a>
                        </li>
                        <li tabIndex={-1}>
                            <a tabIndex={0} href="/stats" role="menuitem">
                            Stats
                            </a>
                        </li>
                        <li tabIndex={-1}>
                            <a tabIndex={0} href="/news" role="menuitem">
                            News
                            </a>
                        </li>
                        <li tabIndex={-1}>
                            <a tabIndex={0} href="/video" role="menuitem">
                            Video
                            </a>
                        </li>
                        <li tabIndex={-1}>
                            <a tabIndex={0} href="/broadcast-schedules" role="menuitem">
                            Watch Live
                            </a>
                        </li>
                        <li tabIndex={-1}>
                            <a tabIndex={0} href="/clubs" role="menuitem">
                            Clubs
                            </a>
                        </li>
                        <li tabIndex={-1}>
                            <a tabIndex={0} href="/players" role="menuitem">
                            Players
                            </a>
                        </li>
                        <li tabIndex={-1}>
                            <a tabIndex={0} href="/awards" role="menuitem">
                            Awards
                            </a>
                        </li>
                </ul>
            </div>
    </li>
    <li className="fantasy" role="menuitem">     

        <div role="button" className="navLink" tabIndex={1}>
            <span className="navText">Fantasy</span>
                <span className="chevron-dropdown"></span>
        </div>

            <div className="dropdown" aria-hidden="true">
                <ul role="menu">
                        <li tabIndex={-1}>
                            <a tabIndex={0} href="/fantasy" role="menuitem">
                            Fantasy
                            </a>
                        </li>
                        <li tabIndex={-1}>
                            <a tabIndex={0} href="/draft" role="menuitem">
                            Fantasy Draft
                            </a>
                        </li>
                </ul>
            </div>
    </li>
    <li className="fantasy" role="menuitem">     

<div role="button" className="navLink" tabIndex={1}>
    <span className="navText">Fantasy</span>
        <span className="chevron-dropdown"></span>
</div>

    <div className="dropdown" aria-hidden="true">
        <ul role="menu">
                <li tabIndex={-1}>
                    <a tabIndex={0} href="/fantasy" role="menuitem">
                    Fantasy
                    </a>
                </li>
                <li tabIndex={-1}>
                    <a tabIndex={0} href="/draft" role="menuitem">
                    Fantasy Draft
                    </a>
                </li>
        </ul>
    </div>
</li>
<li className="fantasy" role="menuitem">     

<div role="button" className="navLink" tabIndex={1}>
    <span className="navText">Fantasy</span>
        <span className="chevron-dropdown"></span>
</div>

    <div className="dropdown" aria-hidden="true">
        <ul role="menu">
                <li tabIndex={-1}>
                    <a tabIndex={0} href="/fantasy" role="menuitem">
                    Fantasy
                    </a>
                </li>
                <li tabIndex={-1}>
                    <a tabIndex={0} href="/draft" role="menuitem">
                    Fantasy Draft
                    </a>
                </li>
        </ul>
    </div>
</li>
<li className="fantasy" role="menuitem">     

<div role="button" className="navLink" tabIndex={1}>
    <span className="navText">Fantasy</span>
        <span className="chevron-dropdown"></span>
</div>

    <div className="dropdown" aria-hidden="true">
        <ul role="menu">
                <li tabIndex={-1}>
                    <a tabIndex={0} href="/fantasy" role="menuitem">
                    Fantasy
                    </a>
                </li>
                <li tabIndex={-1}>
                    <a tabIndex={0} href="/draft" role="menuitem">
                    Fantasy Draft
                    </a>
                </li>
        </ul>
    </div>
</li>
<li className="fantasy" role="menuitem">     

<div role="button" className="navLink" tabIndex={1}>
    <span className="navText">Fantasy</span>
        <span className="chevron-dropdown"></span>
</div>

    <div className="dropdown" aria-hidden="true">
        <ul role="menu">
                <li tabIndex={-1}>
                    <a tabIndex={0} href="/fantasy" role="menuitem">
                    Fantasy
                    </a>
                </li>
                <li tabIndex={-1}>
                    <a tabIndex={0} href="/draft" role="menuitem">
                    Fantasy Draft
                    </a>
                </li>
        </ul>
    </div>
</li>
</ul>
</nav>
</section>
</div>
      </>
    )    
}

export default MainNavigation;