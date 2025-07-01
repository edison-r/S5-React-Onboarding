type MobileMenuToggleMoleculeProps = {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

export default function MobileMenuToggleMolecule({ isOpen, setIsOpen }: MobileMenuToggleMoleculeProps) {
    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    const toggleClassName = isOpen
    ? "mobile__menu--close"
    : "mobile__menu--open";

    return (
        <>
            <a href="#" onClick={(e) => {
                e.preventDefault();
                handleClick();
                }} className={toggleClassName}>
                <img 
                    src={
                        isOpen
                        ? "/src/assets/img/icon-close.svg"
                        : "/src/assets/img/icon-hamburger.svg"
                    } 
                    alt={ isOpen ? "Cerrar menú" : "Abrir menú"}
                />
            </a>
        </>
    );

}