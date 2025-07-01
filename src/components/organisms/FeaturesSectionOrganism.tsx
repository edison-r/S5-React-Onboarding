import DecorationAtom from "../atoms/DecorationAtom";
import ButtonAtom from "../atoms/ButtonAtom";
import ResumeMolecule from "../molecules/ResumeMolecule"
import "./FeaturesSectionOrganism.css";

export default function FeaturesSectionOrganism() {
    return (
        <section className="articles__container">
            <DecorationAtom section="article"/>
            <ResumeMolecule 
                title="Features" 
                text="Our aim is to make it quick and easy for you to access 
                your favourite websites: Your bookmarks sync between your devices so you
                can access them on the go." />
            <nav className="articles__nav">
                <ul>
                    <li><a className="active" id="tab1">Simple Bookmarking</a></li>
                    <li><a id="tab2">Speedy Searching</a></li>
                    <li><a id="tab3">Easy Sharing</a></li>
                </ul>
            </nav>
            <div className="article active" id="article1">
                <img src="/src/assets/img/illustration-features-tab-1.svg" alt="Ilustración de la pestaña 1" />
                <div>
                    <h2>Bookmark in one click</h2>
                    <p> Organize your Bookmarks however you like. Our simple drag-and-drop
                        interface gives you complete control over how you manage your
                        favourite sites.</p>
                    <ButtonAtom
                        href="#"
                        text="More Info"
                        className="btn__primary"
                    />
                </div>
            </div>
            <div className="article" id="article2">
                <img src="/img/illustration-features-tab-2.svg" alt="Ilustración de la pestaña 2" />
                <div>
                    <h2>Intelligent search</h2>
                    <p>Our powerfull search feature will help you find saved sites in no time at all.
                        No need to trawl through all of your bookmarks.</p>
                    <a className="btn btn__primary" href="#">More info</a>
                </div>
            </div>
            <div className="article" id="article3">
                <img src="/img/illustration-features-tab-3.svg" alt="Ilustración de la pestaña 3" />
                <div>
                    <h2>Share your bookmarks</h2>
                    <p>Easily share your bookmarks and collections with others. 
                        Create a shareable link that you can send at the click of a button.</p>
                    <a className="btn btn__primary">More info</a>
                </div>
            </div>            
        </section>
    );
}