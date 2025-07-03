import FeaturesSectionOrganism from "./FeaturesSectionOrganism";
import AdsSectionOrganism from "./AdsSectionOrganism";
import FaqSectionOrganism from "./FaqSectionOrganism"
import JoinSectionOrganism from "./JoinSectionOrganism";

export default function MainOrganism() {
    return (
        <main className="main">
            <FeaturesSectionOrganism />
            <AdsSectionOrganism />
            <FaqSectionOrganism />
            <JoinSectionOrganism />
        </main>
    );
}