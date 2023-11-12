import useContacts from "@hooks/useContacts.";
import React, { useState } from "react";
import { Controller } from "react-hook-form";

interface ContactsFilterProps {
    filter: string;
    setFilter: (value: string) => void;
}

export default function ContactsFilter({
    filter,
    setFilter,
}: ContactsFilterProps) {
    return (
        <div className="px-2 mb-1">
            <label
                htmlFor="contact"
                className="text-zinc-600 text-sm tracking-wider font-medium dark:text-white"
            >
                Nombre
            </label>
            <input
                className="w-[300px] bg-white border border-slate-200 pl-2 h-7 mt-1 rounded-md  flex self-center tracking-wide focus:outline-none"
                type="text"
                name="contact"
                value={filter}
                onChange={e => setFilter(e.target.value)}
                placeholder="Buscar contacto"
            />
        </div>
    );
}
