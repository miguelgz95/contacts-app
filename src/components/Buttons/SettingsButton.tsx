import { Popover, Transition } from "@headlessui/react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { Fragment } from "react";
import { BiLogOut, BiUser } from "react-icons/bi";

export default function SettingsButton() {
    const session = useSession();

    const userName = session?.data?.user?.name || "";

    const userInitials = userName
        .split(" ")
        .map(n => n[0])
        .slice(0, 2);

    return (
        <div className="flex align-center z-50 focus-visible:border-none">
            <Popover className="relative focus-visible:border-none">
                {({ open }) => (
                    <>
                        <Popover.Button>
                            {" "}
                            <div className="relative w-[33px] h-[33px] rounded-full bg-[#2CB490] focus:border-none">
                                <p className="inline-block object-cover text-white font-medium ml-0.5 mt-[9px] text-xs tracking-widest">
                                    {userInitials}
                                </p>
                            </div>
                        </Popover.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in ro-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className="mt-[6px] absolute -right-1 z-10 transform">
                                <div className="w-[270px] bg-white  overflow-hidden rounded-md shadow-lg ring-1 ring-slate-200">
                                    <div className="w-full px-3.5">
                                        <div className="flex justify-center items-center h-[85px] bg-[#EBF5FF] mt-3 rounded-md">
                                            <div className="w-full flex justify-center">
                                                <Image
                                                    priority
                                                    alt="user-logo"
                                                    width={50}
                                                    height={50}
                                                    src="/images/a-safe-logo.png"
                                                />
                                            </div>
                                        </div>

                                        <div className="w-full flex items-center justify-between space-x-2 mt-3.5 mb-2.5">
                                            <div className="w-full flex items-center">
                                                <BiUser
                                                    color="#6D88A4"
                                                    size={17}
                                                />
                                                <p className="tracking-wider text-sm dark:text-white whitespace-nowrap pl-2">
                                                    {" "}
                                                    {userName}
                                                </p>
                                            </div>
                                            <div className="px-2 text-xs text-white bg-primary font-medium tracking-wide rounded-md">
                                                Usuario
                                            </div>
                                        </div>

                                        <div className="w-full border-t bg-white border-slate-200 mt-1 mb-2.5">
                                            <button
                                                onClick={() =>
                                                    signOut({
                                                        callbackUrl:
                                                            "/auth/login",
                                                    })
                                                }
                                                className="flex mt-2.5 md:flex-row items-center justify-center text-sm space-x-2 tracking-wider hover:opacity-50 transition ease-in-out text-zinc-900"
                                            >
                                                <BiLogOut
                                                    color="#6D88A4"
                                                    size={20}
                                                />
                                                <p className="tracking-wider dark:text-white whitespace-nowrap">
                                                    {" "}
                                                    Cerrar sesión
                                                </p>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </>
                )}
            </Popover>
        </div>
    );
}
