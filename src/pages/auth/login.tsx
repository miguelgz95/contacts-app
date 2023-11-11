import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { signIn, getSession, GetSessionParams } from "next-auth/react";
import { GetServerSideProps } from "next";
import { FieldValues } from "react-hook-form";
import { LoginForm } from "@components/Forms/LoginForm";
import ErrorAlert from "@components/Alerts/ErrorAlert";

export default function Login() {
    const router = useRouter();

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [openAlert, setOpenAlert] = useState<boolean>(false);

    const onSubmit = async (values: FieldValues) => {
        setIsLoading(true);

        const response = await signIn("credentials", {
            ...values,
            redirect: false,
            callbackUrl: "/home",
        });

        if (!response?.error && response?.ok) {
            router.push("/home");
            setOpenAlert(false);
            setIsLoading(true);
        }
        if (response?.error) {
            setOpenAlert(true);
            setIsLoading(false);
        } else router.push("/auth/login");
    };

    return (
        <div className="w-full md:bg-[#EEF7FF] min-h-screen ">
            <div className="w-full pt-14 md:pt-20 z-50">
                <div className="w-full flex justify-center">
                    <Image
                        alt="logo"
                        src="/images/logo-contact-app.png"
                        width={90}
                        height={90}
                    />
                </div>
                <div className="flex justify-center space-x-1 font-semibold text-lg tracking-wider">
                    <p>Contacts App</p>
                </div>
            </div>
            <div className="w-full z-50 relative flex justify-center">
                <div className="w-full md:w-[500px] px-7 py-5 mt-2">
                    <div>
                        <div className="flex font-medium tracking-wider text-lg">
                            ¡Bienvenido!
                            <p className="wave pl-2 text-2xl mt-[-2.5px]">
                                {" "}
                                👋
                            </p>
                        </div>
                        <p className="font-medium tracking-wider text-xl 2xl:text-3xl mt-[-2px]">
                            Accede a tu cuenta con
                        </p>
                    </div>
                    <div className="mt-4">
                        {" "}
                        <LoginForm onSubmit={onSubmit} isLoading={isLoading} />
                    </div>

                    {openAlert && (
                        <div className="w-full md:w-[443px] md:absolute flex justify-end self-end mt-3">
                            <ErrorAlert
                                open={openAlert}
                                message="Usuario o contraseña incorrectos"
                            />
                        </div>
                    )}
                </div>
            </div>
            <style>
                {`
                .wave {
                    animation-name: wave-animation;  
                    animation-duration: 2.5s;       
                    animation-iteration-count: infinite; 
                    transform-origin: 70% 70%;       
                    display: inline-block;
                  }
                  
                  @keyframes wave-animation {
                      0% { transform: rotate( 0.0deg) }
                     10% { transform: rotate(14.0deg) }  
                     20% { transform: rotate(-8.0deg) }
                     30% { transform: rotate(14.0deg) }
                     40% { transform: rotate(-4.0deg) }
                     50% { transform: rotate(10.0deg) }
                     60% { transform: rotate( 0.0deg) } 
                    100% { transform: rotate( 0.0deg) }
                  }`}
            </style>
        </div>
    );
}
