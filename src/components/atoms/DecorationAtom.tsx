import "./DecorationAtom.css";

type DecorationAtomProps = {
    section: string;
}

export default function DecorationAtom({ section }: DecorationAtomProps) {
    return (
        <div className={`${section}__decorative-content`}></div>
    )
}