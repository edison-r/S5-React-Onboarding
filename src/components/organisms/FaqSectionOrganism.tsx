import { useState } from "react";
import { faq } from "../../data/faq";

import ResumeMolecule from "../molecules/ResumeMolecule";
import FaqItemMolecule from "../molecules/FaqItemMolecule"
import ButtonAtom from "../atoms/ButtonAtom";

import "./FaqSectionOrganism.css"

export default function FaqSectionOrganism(){
    const [activeIndex, setActiveIndex] = useState(-1);

    return(
        <section id="faq" className="faq__container">
            <ResumeMolecule
                title="Frequently Asked Questions"
                text="Here are some of our FAQs. If you have any other questions you’d like
                answered please feel free to email us."
            />
            <div>
                {faq.map((item, index) => (
                    <FaqItemMolecule 
                        key={index}
                        index={index}
                        item={item}
                        activeIndex={activeIndex}
                        setActiveIndex={setActiveIndex}
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