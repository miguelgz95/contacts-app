import React from "react";
import { UseFormGetValues } from "react-hook-form";

interface ContactDetailsCardProps {
    getValues: UseFormGetValues<any>;
}

export default function ContactDetailsCard({
    getValues,
}: ContactDetailsCardProps) {
    return (
        <div className="w-full flex items-center bg-slate-100 rounded-md py-3">
            <div className=" flex justify-start pl-4">
                <img
                    className="rounded-full w-[65px]"
                    src={getValues().image}
                    alt=""
                />
            </div>
            <div className="w-full ml-3">
                <div className=" flex font-medium tracking-wide">
                    <p className="">{getValues().firstName}</p>
                    <p className="pl-1">{getValues().lastName}</p>
                </div>
                <p className="text-sm tracking-wider">{getValues().email}</p>
            </div>
        </div>
    );
}
