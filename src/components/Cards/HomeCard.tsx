import Link from "next/link";
import React from "react";
import { TbArrowRight } from "react-icons/tb";

interface HomeCardProps {
    href: string;
    title: string;
    bgColorIcon?: string;
    description: string;
    icon: React.ReactNode;
    handleChange?: (value: any) => void;
}

export default function HomeCard({
    href,
    icon,
    title,
    bgColorIcon,
    description,
    handleChange,
}: HomeCardProps) {
    return (
        <Link href={href}>
            <button
                type="button"
                onClick={handleChange}
                className="w-full flex items-center space-x-3 md:w-fit rounded-md px-4 py-2 bg-white border border-slate-200 hover:opacity-50 transition"
            >
                <div
                    className={`w-12 h-10 flex justify-center items-center rounded-full ${bgColorIcon}`}
                >
                    {icon}
                </div>
                <div className="w-full">
                    <p className="text-start tracking-wide text-md font-medium text-primary">
                        {title}
                    </p>
                    <p className="text-start tracking-wider text-sm">
                        {description}
                    </p>
                </div>
                <div className="flex justify-center items-center rounded-full">
                    <TbArrowRight color="gray" size={25} />
                </div>
            </button>
        </Link>
    );
}

HomeCard.defaultProps = {
    bgColorIcon: "bg-blue-300",
};
