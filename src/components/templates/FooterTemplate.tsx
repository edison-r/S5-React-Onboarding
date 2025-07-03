import "./FooterTemplate.css"

export default function FooterTemplate(){
    return(
        <div className="footer__container">
            <a href="index.html">
                <img className="footer__logo" src="/src/assets/img/logo-bookmark-white.svg" alt="Logo de Bookmark" />
            </a>
            <nav className="footer__nav">
                <ul className="footer__all">
                    <li className="footer__opt"><a className="text-white hover:text-[#FA5959]" href="#">FEATURES</a></li>
                    <li className="footer__opt"><a className="text-white hover:text-[#FA5959]" href="#">PRICING</a></li>
                    <li className="footer__opt"><a className="text-white hover:text-[#FA5959]" href="#">CONTACT</a></li>
                </ul>
            </nav>
            <div className="footer__social">
                <a href="#"><img src="src/assets/img/icon-facebook.svg" alt="Facebook" /></a>
                <a href="#"><img src="src/assets/img/icon-twitter.svg" alt="Twitter" /></a>
            </div>
        </div>
    );
}