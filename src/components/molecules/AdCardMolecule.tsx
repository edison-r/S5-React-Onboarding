import ButtonAtom from "../atoms/ButtonAtom";
import type { Ads } from "../../types/types";

export default function AdCardMolecule({ browser, title, version, src, alt }: Ads){
    return(
        <div className={`browser__${browser}`}>
            <img className="image__add" src={src} alt={alt} />
            <h3>{title}</h3>
            <p>{version}</p>
            <ButtonAtom href="#" text="Add & Install Extension" className="btn__primary" />
        </div>
    );
}