import SettingsButton from "@components/Buttons/SettingsButton";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="w-full fixed top-0 h-[50px] z-50 bg-white border-b border-slate-200 flex items-center justify-between px-5 md:px-6">
            <Link href="/home">
                <div className="w-full flex items-center dark:hidden">
                    <Image
                        src="/images/logo-contact-app.png"
                        alt="contacts-app"
                        width={38}
                        height={38}
                    />

                    <p className="ml-2 tracking-wider font-medium">
                        Contacts App
                    </p>
                </div>
            </Link>
            <div>
                <SettingsButton />
            </div>
        </div>
    );
}
