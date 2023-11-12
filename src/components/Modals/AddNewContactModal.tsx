import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { Dispatch, Fragment, useEffect, useState } from "react";
import { Toaster, toast } from "sonner";
import Spinner from "@components/Spinners/Spinner";

import { HiArrowNarrowLeft } from "react-icons/hi";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import createContactSchema from "@schemas/createContact";
import ContactForm from "@components/Forms/ContactForm";
import useContacts from "@hooks/useContacts.";
import { Poppins } from "@next/font/google";

export const poppins = Poppins({
    weight: ["400", "500", "600", "800"],
    subsets: ["latin"],
    variable: "--font-poppins",
});

interface AddNewContactModalProps {
    setIsOpen: Dispatch<boolean>;
    isOpen: boolean;
    onClose?: () => void;
}

export default function AddNewContactModal({
    onClose = () => {
        ("");
    },
    setIsOpen,
    isOpen,
}: AddNewContactModalProps) {
    const { getContact, updateContact, createContact } = useContacts();

    const {
        handleSubmit: handleSubmitContact,
        control,
        register,
        watch,
        setError,
        setValue,
        formState: { errors: formErrors },
        reset,
    } = useForm({
        resolver: yupResolver(createContactSchema),
        defaultValues: {
            image: "https://www.w3schools.com/w3images/avatar2.png",
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
        },
    });

    console.log(watch("image"));

    const [loading, setLoading] = useState(false);

    const onSubmitContactForm = async (values: any) => {
        setLoading(true);
        createContact(values);
        toast.success(
            <div className="tracking widest font-semibold z-50">
                ¡Contacto creado!
            </div>
        );
        setLoading(false);
        setIsOpen(false);
    };

    useEffect(() => {
        return () => {
            reset({});
        };
    }, [isOpen]);

    return (
        <>
            <div>
                <Transition appear show={isOpen} as={Fragment}>
                    <Dialog
                        open={isOpen}
                        onClose={() => {
                            setIsOpen(false);
                            onClose();
                        }}
                        className={`${poppins.variable} font-sans modal relative z-50`}
                    >
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black bg-opacity-60" />
                        </Transition.Child>
                        <div className="fixed inset-0 overflow-y-auto">
                            <div className="flex min-h-full items-center justify-center">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 scale-95"
                                    enterTo="opacity-100 scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 scale-100"
                                    leaveTo="opacity-0 scale-95"
                                >
                                    <Dialog.Panel className="w-full md:max-w-xl rounded-lg bg-white px-3 pt-3.5 pb-3.5">
                                        <>
                                            <div className="w-full bg-white px-4 dark:bg-[#222835]">
                                                <form
                                                    id="newContactForm"
                                                    className="w-full"
                                                >
                                                    <div className="flex items-center pb-2">
                                                        <button
                                                            onClick={() => {
                                                                setIsOpen(
                                                                    false
                                                                );
                                                                onClose();
                                                            }}
                                                            type="button"
                                                            className="hover:opacity-50 transition"
                                                        >
                                                            <HiArrowNarrowLeft
                                                                size={24}
                                                                color="black"
                                                            />
                                                        </button>
                                                        <p className="text-xl font-medium tracking-wide text-zinc-800 ml-2.5">
                                                            Crear contacto
                                                        </p>
                                                    </div>
                                                    <div className="border-t border-slate-200 dark:border-gray-500" />
                                                    <div className="w-full flex flex-col md:flex-row justify-start mt-3 mb-4">
                                                        <ContactForm
                                                            control={control}
                                                            errors={formErrors}
                                                        />
                                                    </div>

                                                    <div className="w-full space-x-3 flex justify-between pt-2.5">
                                                        <button
                                                            type="button"
                                                            onClick={() =>
                                                                reset()
                                                            }
                                                            form="newContactForm"
                                                            className="w-fit flex justify-center items-center border py-1 px-4 rounded-lg tracking-wider hover:opacity-50 transition"
                                                        >
                                                            <p className="text-gray-500 font-medium">
                                                                Limpiar
                                                            </p>
                                                        </button>
                                                        <button
                                                            onClick={handleSubmitContact(
                                                                onSubmitContactForm
                                                            )}
                                                            type="submit"
                                                            className={`w-fit px-9 bg-primary text-white rounded-lg tracking-wider hover:opacity-50 transition font-medium ${
                                                                loading &&
                                                                "cursor-not-allowed pt-1 opacity-50"
                                                            }`}
                                                        >
                                                            {loading ? (
                                                                <Spinner />
                                                            ) : (
                                                                "Guardar"
                                                            )}
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>

                                            <Toaster
                                                position="top-right"
                                                richColors
                                                expand={false}
                                            />
                                        </>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </Transition>
            </div>
            <Toaster position="top-right" richColors expand={false} />
        </>
    );
}
