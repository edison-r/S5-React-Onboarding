type TabNavMoleculeProps = {
    activeIndex: number,
    setActiveIndex: (activeIndex: number) => void
}

export default function TabNavMolecule({ activeIndex, setActiveIndex }: TabNavMoleculeProps){
    const tabs = ["Simple Bookmarking", "Speedy Searching", "Easy Sharing"];

    return(
        <nav className="articles__nav">
            <ul>
                {tabs.map((tab, index) => (
                    <li key={index}>
                        <a 
                            href="#" 
                            onClick={(e) => {
                                e.preventDefault();
                                setActiveIndex(index);
                            }}
                            className={index === activeIndex ? "active--tab" : ""}
                        >
                            {tab}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>  
    );
}