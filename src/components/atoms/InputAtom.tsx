import { useState } from "react";
import "./InputAtom.css";

export default function InputAtom() {
    const [value, setValue] = useState("");
    const [isValid, setIsValid] = useState<boolean | null>(null);

    const handleBlur = () => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsValid(regex.test(value));
    };

    return (
        <>
            <input 
                type="email"
                value={value}
                placeholder="Enter your email address" 
                onChange={(e) => setValue(e.target.value)}
                onBlur={handleBlur}
                className={`input__mail ${isValid === false ? "is-invalid" : isValid === true ? "is-valid" : ""}`}
            />
        </>
    );
}