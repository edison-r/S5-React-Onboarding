type ResumeMoleculeProps = {
    title: string;
    text: string;
};

export default function ResumeMolecule({ title, text}: ResumeMoleculeProps){
    return (
        <div className="section__resume">
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    );
}