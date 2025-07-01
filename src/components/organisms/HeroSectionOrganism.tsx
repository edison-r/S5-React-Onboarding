import BannerDecorationAtom from "../atoms/BannerDecorationAtom";
import ButtonAtom from "../atoms/ButtonAtom";
import "./HeroSectionOrganism.css";

export default function HeroSectionOrganism(){
    return(
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
    )
}