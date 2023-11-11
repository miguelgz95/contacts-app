import { Transition } from "@headlessui/react";
import React from "react";
import { TbAlertCircle } from "react-icons/tb";

interface ErrorAlertProps {
    message: string;
    open: boolean;
}

export default function ErrorAlert({ message, open }: ErrorAlertProps) {
    return (
        <div className="w-full">
            <Transition
                appear={true}
                show={open}
                unmount={false}
                enter="ease-out duration-500"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-400"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="w-full flex bg-red-300 border border-red-700 rounded-md px-4 py-1">
                    <div>
                        <TbAlertCircle size={23} color="rgb(153 27 27)" />
                    </div>{" "}
                    <p className="ml-2 text-red-900 tracking-wider text-xs pt-1">
                        {message}
                    </p>
                </div>
            </Transition>
        </div>
    );
}
