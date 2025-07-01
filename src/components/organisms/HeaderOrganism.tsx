import NavBarTemplate from "../templates/NavBarTemplate";
import HeroSectionOrganism from "../organisms/HeroSectionOrganism";

export default function HeaderOrganism(){
    return (
        <header className="header">
            <NavBarTemplate />
            <HeroSectionOrganism />
        </header>
    );
}