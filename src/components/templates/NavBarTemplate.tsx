import ButtonAtom from "../atoms/ButtonAtom";
import MobileMenuOrganism from "../organisms/MobileMenuOrganism";

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
                        <li className="header__menu-item"><a href="#">FEATURES</a></li>
                        <li className="header__menu-item"><a href="#">PRICING</a></li>
                        <li className="header__menu-item"><a href="#">CONTACT</a></li>
                    </ul>
                </nav>
                    <ButtonAtom text="LOGIN" className="btn__interaction" />
            </div>
            <MobileMenuOrganism />
        </>
    )
}