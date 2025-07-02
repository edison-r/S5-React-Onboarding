import ResumeMolecule from "../molecules/ResumeMolecule";
import FaqItemMolecule from "../molecules/FaqItemMolecule"
import ButtonAtom from "../atoms/ButtonAtom";
import { faq } from "../../data/faq";

import "./FaqSectionOrganism.css"

export default function FaqSectionOrganism(){
    return(
        <section className="faq__container">
            <ResumeMolecule
                title="Frequently Asked Questions"
                text="Here are some of our FAQs. If you have any other questions you’d like
                answered please feel free to email us."
            />
            <div>
                {faq.map((item, i) => (
                    <FaqItemMolecule 
                        key={i}
                        item={item}
                    />
                ))}
            </div>
            <ButtonAtom 
                text="More info"
                className="btn__primary"
                href="#"/>
        </section>
    );
}