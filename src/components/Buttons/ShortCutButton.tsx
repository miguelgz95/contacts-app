import React from "react";

interface ShortCutButtonProps {
    title: string;
    handleChange: () => void;
    className: string;
    selected: boolean;
}

export default function ShortCutButton({
    title,
    handleChange,
    className,
    selected,
}: ShortCutButtonProps) {
    return (
        <button
            type="button"
            className={`w-full md:w-fit tracking-wider border border-primary text-primary flex items-center px-2.5 md:px-4 h-[29px] hover:opacity-50 transition ease-in-out ${className} ${
                selected && "bg-primary text-white"
            }`}
            onClick={handleChange}
        >
            <p>{title}</p>
        </button>
    );
}
