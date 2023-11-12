import React from "react";
import { Control, Controller, FieldErrors } from "react-hook-form";

interface ContactFormProps {
    control: Control<any, unknown>;
    errors: FieldErrors;
}

export default function ContactForm({ control, errors }: ContactFormProps) {
    return (
        <div className="w-full pt-3.5 pb-5">
            <div className="w-full">
                <label
                    htmlFor="firstName"
                    className="text-zinc-600 text-sm tracking-wider font-medium dark:text-white"
                >
                    Nombre
                </label>
                <div className="mt-2 md:mt-0">
                    <Controller
                        control={control}
                        name="firstName"
                        render={({ field: { onChange, value } }) => (
                            <div className="flex items-center border pl-3 mt-1 h-7 rounded-lg tracking-wide  transition dark:bg-gray-600 dark:border-gray-600">
                                <input
                                    value={value}
                                    onChange={onChange}
                                    type="text"
                                    id="firstName"
                                    className="w-full text-gray-500 h-6 mr-1 text-sm tracking-wider focus:outline-none text-start dark:bg-gray-600 dark:text-white"
                                />
                            </div>
                        )}
                    />
                    {errors?.firstName && (
                        <p className="text-xs pt-1 pl-2 text-red-500 tracking-wide">
                            {errors?.firstName?.message as string}
                        </p>
                    )}
                </div>
            </div>
            <div className="w-full mt-3.5">
                <label
                    htmlFor="lastName"
                    className="text-zinc-600 text-sm tracking-wider font-medium dark:text-white"
                >
                    Apellidos
                </label>
                <div className=" mt-2 md:mt-0">
                    <Controller
                        control={control}
                        name="lastName"
                        render={({ field: { onChange, value } }) => (
                            <div className="flex items-center border  pl-3 mt-1 h-7 rounded-lg tracking-wide  transition dark:bg-gray-600 dark:border-gray-600">
                                <input
                                    value={value}
                                    onChange={onChange}
                                    type="text"
                                    id="lastName"
                                    className="w-full text-gray-500 h-6 mr-1 text-sm tracking-wider focus:outline-none text-start dark:bg-gray-600 dark:text-white"
                                />
                            </div>
                        )}
                    />
                    {errors?.lastName && (
                        <p className="text-xs pt-1 pl-2 text-red-500 tracking-wide">
                            {errors?.lastName?.message as string}
                        </p>
                    )}
                </div>
            </div>
            <div className="w-full mt-3.5">
                <label
                    htmlFor="email"
                    className="text-zinc-600 text-sm tracking-wider font-medium dark:text-white"
                >
                    Correo electrónico
                </label>
                <div className=" mt-2 md:mt-0">
                    <Controller
                        control={control}
                        name="email"
                        render={({ field: { onChange, value } }) => (
                            <div className="flex items-center border pl-3 mt-1 h-7 rounded-lg tracking-wide  transition dark:bg-gray-600 dark:border-gray-600">
                                <input
                                    value={value}
                                    onChange={onChange}
                                    type="text"
                                    id="email"
                                    className="w-full text-gray-500 h-6 mr-1 text-sm tracking-wider focus:outline-none text-start dark:bg-gray-600 dark:text-white"
                                />
                            </div>
                        )}
                    />
                    {errors?.email && (
                        <p className="text-xs pt-1 pl-2 text-red-500 tracking-wide">
                            {errors?.email?.message as string}
                        </p>
                    )}
                </div>
            </div>
            <div className="w-full mt-3.5">
                <label
                    htmlFor="phone"
                    className="text-zinc-600 text-sm tracking-wider font-medium dark:text-white"
                >
                    Número de teléfono
                </label>
                <div className=" mt-2 md:mt-0">
                    <Controller
                        control={control}
                        name="phone"
                        render={({ field: { onChange, value } }) => (
                            <div className="flex items-center border  pl-3 mt-1 h-7 rounded-lg tracking-wide  transition dark:bg-gray-600 dark:border-gray-600">
                                <input
                                    value={value}
                                    onChange={onChange}
                                    type="text"
                                    id="phone"
                                    className="w-full text-gray-500 h-6 mr-1 text-sm tracking-wider focus:outline-none text-start dark:text-white dark:bg-gray-600"
                                />
                            </div>
                        )}
                    />
                    {errors?.phone && (
                        <p className="text-xs pt-1 pl-2 text-red-500 tracking-wide">
                            {errors?.phone?.message as string}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
