import { Link } from "react-router-dom"; 
import "./FooterTemplate.css"

export default function FooterTemplate(){
    return(
        <div className="footer__container">
            <a href="index.html">
                <img className="footer__logo" src="/src/assets/img/logo-bookmark-white.svg" alt="Logo de Bookmark" />
            </a>
            <nav className="footer__nav">
                <ul className="footer__all">
                    <li className="footer__opt"><Link to="/#features">FEATURES</Link></li>
                    <li className="footer__opt"><Link to="/#download">DOWNLOAD</Link></li>
                    <li className="footer__opt"><Link to="/#faq">FAQ</Link></li>
                </ul>
            </nav>
            <div className="footer__social">
                <a href="#"><img src="src/assets/img/icon-facebook.svg" alt="Facebook" /></a>
                <a href="#"><img src="src/assets/img/icon-twitter.svg" alt="Twitter" /></a>
            </div>
        </div>
    );
}