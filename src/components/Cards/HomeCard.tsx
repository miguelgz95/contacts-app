import Link from "next/link";
import React from "react";
import { TbArrowRight } from "react-icons/tb";

interface HomeCardProps {
    href: string;
    title: string;
    bgColorIcon?: string;
    description: string;
    icon: React.ReactNode;
}

export default function HomeCard({
    href,
    icon,
    title,
    bgColorIcon = "bg-blue-300",
    description,
}: HomeCardProps) {
    return (
        <Link href={href}>
            <div className="w-full flex items-center space-x-3 md:w-fit rounded-md px-4 py-1.5 bg-white border border-slate-200 hover:opacity-50 transition">
                <div
                    className={`w-12 h-10 flex justify-center items-center rounded-full ${bgColorIcon}`}
                >
                    {icon}
                </div>
                <div className="w-full">
                    <p className="tracking-wide text-lg font-medium text-primary">
                        {title}
                    </p>
                    <p className="tracking-wider text-sm">{description}</p>
                </div>
                <div className="flex justify-center items-center rounded-full">
                    <TbArrowRight color="gray" size={25} />
                </div>
            </div>
        </Link>
    );
}
