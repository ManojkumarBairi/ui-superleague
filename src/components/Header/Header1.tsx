import React from "react";
import './Header1.scss';
import { clubList } from "./HeaderConstants.ts";

export const Header1 = () => {

    return(
      <>
       <header className="masthead">
        <nav className="clubNavigation js-club-navigation">
            <ul>
                {clubList.map((e) => (
            <li className="clubList__club">
                    <a className="clubList__link"
                     href={e.ref}
                     role="menuitem">
                        <div className="badge badge--large badge-image-container" data-widget="club-badge-image" data-size="50">
                            <img
                             className="badge-image badge-image--50 js-badge-image"
                             src={e.imgSrc}
                             alt={e.name}
                            />
                            <span className="visuallyHidden">{e.name}</span>
                        </div>
                        <span className="name">{e.name}</span>
                    </a>
                </li>
                ))}
            </ul>
        </nav>
       </header>
      </>
    )
};

export default Header1;