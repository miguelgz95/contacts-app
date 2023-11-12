import Image from "next/image";

interface EmptyCardProps {
    src: string;
    title: string;
    text: string;
}

export default function EmptyCard({ src, title, text }: EmptyCardProps) {
    return (
        <div className="w-full flex-col justify-center">
            <div className=" flex justify-center">
                <Image
                    priority
                    alt="empty"
                    src={src}
                    width={180}
                    height={180}
                />
            </div>
            <p className="mt-[-10px] text-center font-medium tracking-wider text-zinc-600 ">
                {title}
            </p>
            <p className="text-center text-sm tracking-wider text-zinc-600 ">
                {text}
            </p>
        </div>
    );
}
