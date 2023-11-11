import SettingsButton from "@components/Buttons/SettingsButton";
import { navigationItems } from "@constants/navigation";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="w-full fixed top-0 h-[50px] z-50 bg-white border-b border-slate-200 flex items-center justify-between px-5 md:px-6">
            <div className="w-full flex items-center dark:hidden">
                <Link href="/dashboard">
                    <Image
                        src="/images/logo-contact-app.png"
                        alt="contacts-app"
                        width={38}
                        height={38}
                    />
                </Link>
            </div>
            {navigationItems.map(({ id, title, href, icon }) => (
                <button key={id} type="button">
                    <a
                        href={href}
                        className="w-full h-full flex items-center rounded-lg px-5 p-2 hover:opacity-50 transition"
                    >
                        <p className="text-lg text-zinc-900 dark:text-white">
                            {icon}
                        </p>
                        <p className="text-slate-500 hover:text-[#293C8E] pl-3 whitespace-nowrap">
                            {title}
                        </p>
                    </a>
                    {/* )} */}
                </button>
            ))}
            <div className="hidden md:flex md:ml-3">
                <SettingsButton />
            </div>
        </div>
    );
}
