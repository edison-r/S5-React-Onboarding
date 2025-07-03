import ButtonAtom from "../atoms/ButtonAtom";
import ResumeMolecule from "./ResumeMolecule"
import { features } from "../../data/features";

type FeaturesOrganismProps = {
    activeIndex: number,
}

export default function FeaturesOrganism({ activeIndex }: FeaturesOrganismProps ){
    const feature = features[activeIndex];

    return(
        <div className="article active">
            <img src={feature.src } alt={feature.alt} />
            <div>
                <ResumeMolecule 
                    title={feature.title}
                    text={feature.description}
                />
                <ButtonAtom href="#" text="More Info" className="btn__primary" />
            </div>
        </div>
    );
}