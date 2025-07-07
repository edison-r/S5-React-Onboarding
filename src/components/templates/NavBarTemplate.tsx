import { Link } from "react-router-dom"; 
import ButtonAtom from "../atoms/ButtonAtom";
import MobileMenuOrganism from "../organisms/MobileMenuOrganism";
import "./NavBarTemplate.css";

export default function NavBarTemplate(){
    return (
        <>
            <div className="header__container">
                <div className="header__logo">
                    <a href="index.html">
                        <img src="../src/assets/img/logo-bookmark.svg" alt="Bookmark Logo"></img>
                    </a>
                </div>
                <nav className="header__nav">
                    <ul className="header__menu">
                        <li className="header__menu-item"><Link to="/#features">FEATURES</Link></li>
                        <li className="header__menu-item"><Link to="/#download">DOWNLOAD</Link></li>
                        <li className="header__menu-item"><Link to="/#faq">FAQ</Link></li>
                    </ul>
                </nav>
                    <ButtonAtom text="LOGIN" className="btn__interaction" />
            </div>
            <MobileMenuOrganism />
        </>
    )
}