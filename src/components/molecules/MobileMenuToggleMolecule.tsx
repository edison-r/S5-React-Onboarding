import ButtonAtom from "../atoms/ButtonAtom";

export default function MobileMenuToggleMolecule(){
    return(
        <div className="header__mobile">
            <div className="header__logo--mobile">
                <a href="index.html">
                    <img src="/src/assets/img/logo-bookmark.svg" alt="Bookmark Logo"></img>
                </a>
            </div>
            <a href="#" className="mobile__menu--open">
                <img src="/src/assets/img/icon-hamburger.svg" alt="Abrir menu"/>
            </a>
            <a href="#" className="mobile__menu--close">
                <img src="/src/assets/img/icon-close.svg" alt="Cerrar menu"/>
            </a> {/* Hacer un átomo condicional? */}
            <nav className="mobile__menu">
            <ul className="header__menu">
                <li className="header__menu-item"><a href="#">FEATURES</a></li>
                <li className="header__menu-item"><a href="#">PRICING</a></li>
                <li className="header__menu-item"><a href="#">CONTACT</a></li>
            </ul>
            <div className="mobile__login">
                <ButtonAtom text="LOGIN" className="btn__interaction--mobile" />
            </div>
        </nav>
        </div>
    )
}