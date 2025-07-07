import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import HeaderOrganism from "../organisms/HeaderOrganism";
import MainOrganism from "../organisms/MainOrganism";
import FooterOrganism from "../organisms/FooterOrganism";

export default function Home() {
    const location = useLocation();

    useEffect(() => {
        const hash = location.hash;
        if(hash){
            const element = document.querySelector(hash);
            if(element) element.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);

    
    return (
        <>
            <HeaderOrganism />
            <MainOrganism />
            <FooterOrganism />
        </>
    );
}
