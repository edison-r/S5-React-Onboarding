import { useState } from "react";

import DecorationAtom from "../atoms/DecorationAtom";
import ResumeMolecule from "../molecules/ResumeMolecule"
import TabNavMolecule from "../molecules/TabNavMolecule"
import FeaturesOrganism from "../molecules/FeaturesMolecule"

import "./FeaturesSectionOrganism.css";

export default function FeaturesSectionOrganism() {
    const [activeIndex, setActiveIndex] = useState(0);
    

    return (
        <section id="features" className="articles__container">
            <DecorationAtom section="article"/>
            <ResumeMolecule 
                title="Features" 
                text="Our aim is to make it quick and easy for you to access 
                your favourite websites: Your bookmarks sync between your devices so you
                can access them on the go." 
            />
            <TabNavMolecule activeIndex={activeIndex} setActiveIndex={setActiveIndex}/>
            <FeaturesOrganism activeIndex={activeIndex}/>          
        </section>
    );
}