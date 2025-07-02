import ResumeMolecule from "../molecules/ResumeMolecule";
import AdCardMolecule from "../molecules/AdCardMolecule";
import { features } from "../../data/ads";

import "./AdsSectionOrganism.css";

export default function AdsSectionOrganism(){
    return(
        <section className="ads__container">
            <ResumeMolecule
                title="Download the extension"
                text="We’ve got more browsers in the pipeline. Please do let us know if you’ve
                got a favourite you’d like us to prioritize."
            />
            <div className="browsers">
                {features.map((ad, i) => (
                    <AdCardMolecule
                        key={i}
                        browser={ad.browser}
                        title={ad.title}
                        version={ad.version}
                        src={ad.src}
                        alt={ad.alt}
                    />
                ))}
            </div>
        </section>
    );
}