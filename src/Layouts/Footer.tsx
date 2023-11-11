import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Footer() {
    const year: number = new Date().getFullYear();

    return (
        <footer className="w-full fixed bottom-0 bg-white md:h-6 px-3 md:px-0 border-t border-slate-200">
            <div className="w-full flex items-center py-0.5 md:px-[16.5px] pt-[3px]">
                <div className="w-full justify-center text-[10px] text-slate-500 tracking-wider md:tracking-widest ">
                    <div className="w-full flex justify-center">
                        <p className=" mr-1.5 ">Copyright © </p> {year}
                        <p className="ml-1  dark:text-slate-500">
                            Contacts App. All rights reserved
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
