export default function MobileMenuToggle(){
    return(
        <div className="header__mobile">
            <div className="header__logo--mobile">
                <a href="index.html">
                    <img src="../src/assets/img/logo-bookmark.svg" alt="Bookmark Logo"></img>
                </a>
            </div>
            <a href="#" className="mobile__menu--open">
                <img src="/img/icon-hamburger.svg" alt="Abrir menu"/>
            </a>
            <a href="#" className="mobile__menu--close">
                <img src="/img/icon-close.svg" alt="Cerrar menu"/>
            </a> {/* Hacer un átomo condicional? */}
        </div>
    )
}


/**
 *  
 *  <div class="header__mobile">
        <div class="header__logo--mobile">
            <a href="index.html"><img src="/img/logo-bookmark.svg" alt="Logo de Bookmark"></a>
        </div>
        <a href="#" class="mobile__menu--open">
            <img src="/img/icon-hamburger.svg" alt="Abrir menu">
        </a>
        <a href="#" class="mobile__menu--close">
            <img src="/img/icon-close.svg" alt="Cerrar menu">
        </a>
        <nav class="mobile__menu">
            <ul class="header__menu">
                <li class="header__menu-item"><a href="#">FEATURES</a></li>
                <li class="header__menu-item"><a href="#">PRICING</a></li>
                <li class="header__menu-item"><a href="#">CONTACT</a></li>
            </ul>
            <div class="mobile__login">
                <button class="btn__interaction--mobile">LOGIN</button>
            </div>
        </nav>
    </div>
 */