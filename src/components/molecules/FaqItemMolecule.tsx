import { useState } from "react";
import ArrowAtom from "../atoms/ArrowAtom";
import type { FAQItem } from "../../types/types";

type Props = {
    item: FAQItem
}

export default function FaqItemMolecule({ item }: Props){
    const [isOpen, setIsOpen] = useState(false);

    return(
        <div className="faq__item">
            <button 
                className={`faq__question ${isOpen ? "active" : ""}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="faq__button">
                    <span>{item.title}</span>
                    <ArrowAtom />
                </div>
            </button>
            <p className={`faq__answer${isOpen ? "--open" : ""}`} >
                {item.description}
            </p>             
        </div>
    );
}