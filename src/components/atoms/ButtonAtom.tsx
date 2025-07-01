interface ButtonProps {
  text: string;
  className?: string;
  href?: string;
}

export default function ButtonAtom({ text, className = "", href="#" } : ButtonProps) {
    return (
        <a href={href}>
            <button className={className}>
                {text}
            </button>
        </a>
    );
}