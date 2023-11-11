import React from "react";

interface ShortCutButtonProps {
    title: string;
    handleChange: () => void;
}

export default function ShortCutButton({
    title,
    handleChange,
}: ShortCutButtonProps) {
    return (
        <button
            className="w-full md:w-fit tracking-wid border border-primary bg-primary text-white flex items-center px-2.5 md:px-4 h-[29px] rounded-md hover:opacity-50 transition ease-in-out"
            onClick={handleChange}
        >
            {title}
        </button>
    );
}
