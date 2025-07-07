import InputAtom from "../atoms/InputAtom";
import ButtonAtom from "../atoms/ButtonAtom";
import "./JoinSectionOrganism.css";

export default function JoinSectionOrganism(){
    return(
        <div id="join" className="container__join">
            <div className="join__resume">
                <h4>35,000+ ALREADY JOINED</h4>
                <h2>Stay up-to-date with what we're doing</h2>
            </div>
            <div className="join__form">
                <InputAtom />
                <ButtonAtom text="Contact us" className="btn__interaction" />
            </div>
        </div>
    );
}