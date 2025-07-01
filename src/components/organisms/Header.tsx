import ButtonAtom from "../atoms/ButtonAtom";
import BannerDecorationAtom from "../atoms/BannerDecorationAtom";

export default function Header(){
    return (
        <header className="header">
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
            <div className="banner__container">
                <BannerDecorationAtom />
                <div className="banner__info">
                    <div className="banner__text">
                        <h1>A Simple Bookmark Manager</h1>
                        <p>A clean and simple interface to organize your favorite websites. Open
                            a new browser tab and see your sites load instantly. Try it for free.</p>
                    </div>
                    <div className="banner__btn">
                        <ButtonAtom href="https://www.google.com/intl/es_es/chrome/" text="Get it on Chrome" className="btn__primary" />
                        <ButtonAtom href="https://www.google.com/intl/es_es/chrome/" text="Get it on Firefox" className="btn__secondary" />
                    </div>
                </div>
                    <div className="banner-image">
                        <img src="../src/assets/img/illustration-hero.svg" alt="Previsualización del programa" />
                </div>
            </div>
        </header>
    );
}