import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import {
    FieldValues,
    useForm,
    SubmitHandler,
    Controller,
    Control,
} from "react-hook-form";
import loginSchema from "@schemas/login";
import Spinner from "@components/Spinners/Spinner";

interface LoginFormProps {
    onSubmit: SubmitHandler<FieldValues>;
    isLoading: boolean;
}

export const LoginForm = ({ onSubmit, isLoading }: LoginFormProps) => {
    const [, setErrors] = useState([]);

    const { handleSubmit, control } = useForm({
        resolver: yupResolver(loginSchema),
    });

    return (
        <form
            className="w-full flex flex-col "
            onSubmit={handleSubmit(onSubmit)}
        >
            <label htmlFor="email" className="font-medium tracking-wider">
                Nombre de usuario
            </label>
            <Controller
                control={control}
                name="username"
                render={({ field: { onChange } }) => (
                    <input
                        type="text"
                        id="username"
                        className="bg-white tracking-wider mt-1.5 border border-slate-300 md:border-[#E2E8F0] h-9 rounded-md pl-3 w-full flex self-center focus:outline-none"
                        onChange={onChange}
                    />
                )}
            />
            <div className="w-full flex items-center justify-between  mt-2 ">
                {" "}
                <label
                    htmlFor="password"
                    className="font-medium tracking-wider"
                >
                    Contraseña
                </label>{" "}
            </div>
            <Controller
                control={control}
                name="password"
                render={({ field: { onChange } }) => (
                    <input
                        type="password"
                        id="password"
                        className="bg-white tracking-wider mt-1.5 border border-slate-300 md:border-[#E2E8F0] h-9 rounded-md pl-3 w-full flex self-center focus:outline-none"
                        onChange={onChange}
                    />
                )}
            />

            <button
                type="submit"
                className={`${
                    isLoading && "pt-1"
                } border border-primary bg-primary font-medium md:font-normal text-white rounded-md h-10 mt-7 md:mt-6 tracking-widest  hover:opacity-60 transition ease-in-out`}
            >
                {isLoading ? <Spinner /> : "Iniciar sesión"}
            </button>
        </form>
    );
};
