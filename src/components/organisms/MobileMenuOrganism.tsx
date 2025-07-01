import { useState, useEffect } from "react";
import ButtonAtom from "../atoms/ButtonAtom";
import MobileMenuToggleMolecule from "../molecules/MobileMenuToggleMolecule"

export default function MobileMenuOrganism(){
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
        document.body.classList.add("no-scroll");
        } else {
        document.body.classList.remove("no-scroll");
        }

        return () => {
        document.body.classList.remove("no-scroll");
        };
    }, [isOpen]);

    return(
        <div className="header__mobile">
            <div className="header__logo--mobile">
                <a href="index.html">
                    <img src="/src/assets/img/logo-bookmark.svg" alt="Bookmark Logo"></img>
                </a>
            </div>

            <MobileMenuToggleMolecule isOpen={isOpen} setIsOpen={setIsOpen} />

            <nav className={`mobile__menu ${isOpen ? "active" : ""}`}>
                <div className="header__logo--mobilemenu">
                    <a href="index.html">
                        <img src="/src/assets/img/logo-bookmark-white.svg" alt="Logo de Bookmark" />
                    </a>
                </div>
                <ul className="header__menu">
                    <li className="header__menu-item">
                        <a href="#" onClick={() => setIsOpen(false)}>FEATURES</a>
                    </li>
                    <li className="header__menu-item">
                        <a href="#"onClick={() => setIsOpen(false)}>PRICING</a>
                    </li>
                    <li className="header__menu-item">
                        <a href="#"onClick={() => setIsOpen(false)}>CONTACT</a>
                    </li>
                </ul>
                <div className="mobile__login">
                    <ButtonAtom text="LOGIN" className="btn__interaction--mobile" />
                </div>
            </nav> 
        </div>
    );
}