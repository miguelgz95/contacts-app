import ShortCutButton from "@components/Buttons/ShortCutButton";
import { TABLE_TYPES } from "@constants/tableTypes";
import { Transition } from "@headlessui/react";
import { Contact } from "@interfaces/contact";
import React, { ReactNode, useState } from "react";
import { FiChevronDown, FiChevronUp, FiFilter } from "react-icons/fi";

interface IProps {
    title?: string;
    children: ReactNode;
    handleChangeSelectedTableType: (value: any) => void;
    isSelectedFavouritesTable: boolean;
    isSelectedContactsTable: boolean;
}

export const Collapsible = ({
    title,
    children,
    handleChangeSelectedTableType,
    isSelectedContactsTable,
    isSelectedFavouritesTable,
}: IProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleFilterOpening = () => {
        setIsOpen(prev => !prev);
    };

    return (
        <div className="w-full ">
            <div className="w-full flex items-end">
                <div className="w-full absolute flex ">
                    <div className="w-full flex justify-end md:justify-between items-center">
                        <p className="w-full hidden md:flex md:ml-2 tracking-wider font-medium text-zinc-700">
                            {title}
                        </p>
                        <div className="flex items-center">
                            <div>
                                <ShortCutButton
                                    className="rounded-l-md"
                                    selected={isSelectedContactsTable}
                                    title="Contactos"
                                    handleChange={() =>
                                        handleChangeSelectedTableType(
                                            TABLE_TYPES.CONTACTS
                                        )
                                    }
                                />
                            </div>
                            <ShortCutButton
                                className="rounded-r-md"
                                selected={isSelectedFavouritesTable}
                                title="Favoritos"
                                handleChange={() =>
                                    handleChangeSelectedTableType(
                                        TABLE_TYPES.FAVOURITES
                                    )
                                }
                            />
                            <button
                                type="button"
                                className="w-fit ml-3 mr-12 md:mr-16 tracking-wide border  border-[#3397F3] text-[#3397F3] flex items-center md:px-4 h-[29px] rounded-md hover:opacity-50 transition ease-in-out"
                                onClick={handleFilterOpening}
                            >
                                <div className="w-full flex items-center">
                                    <div className="hidden md:flex">
                                        <FiFilter />
                                    </div>

                                    <p className="ml-2 md:mr-3">Filtros</p>
                                    <div className="pr-3">
                                        {!isOpen ? (
                                            <div className="transition ease-in-out delay-150">
                                                <FiChevronDown size={20} />
                                            </div>
                                        ) : (
                                            <div className="transition ease-in-out delay-150">
                                                <FiChevronUp size={20} />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Transition
                show={isOpen}
                enter="ease-out duration-150"
                enterFrom="opacity-0 translate-y-20 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
                <div className="w-full ">
                    <div className="w-full">
                        {isOpen && <div className="w-full">{children}</div>}
                    </div>
                </div>
            </Transition>
        </div>
    );
};
