import ArrowAtom from "../atoms/ArrowAtom";
import type { FAQItem } from "../../types/types";

type Props = {
    item: FAQItem
    index: number,
    activeIndex: number,
    setActiveIndex: (activeIndex: number) => void
}

export default function FaqItemMolecule({ item, index, activeIndex, setActiveIndex }: Props){
    const isOpen = index === activeIndex;

    return(
        <div className="faq__item">
            <button 
                onClick={(e) => {
                    e.preventDefault();
                    if(isOpen){ setActiveIndex(-1); } 
                    else { setActiveIndex(index); }
                }}
                className={`faq__question ${isOpen ? "active" : ""}`}
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