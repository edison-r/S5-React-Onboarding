import FeaturesSectionOrganism from "./FeaturesSectionOrganism";
import AdsSectionOrganism from "./AdsSectionOrganism";
import FaqSectionOrganism from "./FaqSectionOrganism"

export default function MainOrganism() {
    return (
        <main className="main">
            <FeaturesSectionOrganism />
            <AdsSectionOrganism />
            <FaqSectionOrganism />
        </main>
    );
}