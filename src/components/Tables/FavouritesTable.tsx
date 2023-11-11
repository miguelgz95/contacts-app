import EmptyCard from "@components/Cards/EmptyCard";
import { Menu, Transition } from "@headlessui/react";
import { Contact } from "@interfaces/contact";
import { Fragment } from "react";
import { BiDotsHorizontal } from "react-icons/bi";
import { TbTrash } from "react-icons/tb";

interface FavouritesTableProps {
    key: string;
    contacts: Contact[];
    page: number;
    setPage: (value: number) => void;
    deleteContactFromFavourite: (value: Contact) => void;
}

export default function FavouritesTable({
    key,
    contacts,
    page,
    setPage,
    deleteContactFromFavourite,
}: FavouritesTableProps) {
    const nextPage = () => {
        setPage(page + 1);
    };
    const prevPage = () => {
        setPage(page - 1);
    };

    return (
        <div>
            {contacts.length ? (
                <div className="overflow-x-auto border border-slate-200 rounded-md mt-3 mx-1.5">
                    <table className="w-full table-auto mt-3">
                        <thead className="w-full table-auto mt-3">
                            <tr>
                                <th className="px-4 pb-3 text-left font-medium text-zinc-600 text-xs tracking-wider whitespace-nowrap dark:text-white"></th>
                                <th className="px-4 pb-3 text-left font-medium text-zinc-600 text-xs tracking-wider whitespace-nowrap dark:text-white">
                                    Nombre
                                </th>
                                <th className="px-4 pb-3 text-left font-medium text-zinc-600 text-xs tracking-wider whitespace-nowrap dark:text-white">
                                    Correo electrónico
                                </th>
                                <th className="px-4 pb-3 text-left font-medium text-zinc-600 text-xs tracking-wider whitespace-nowrap dark:text-white">
                                    Teléfono
                                </th>
                                <th className="px-4 pb-3 text-left font-medium text-zinc-600 text-xs tracking-wider whitespace-nowrap dark:text-white"></th>
                            </tr>
                        </thead>

                        <tbody>
                            {contacts.map((contact: Contact) => (
                                <tr key={key}>
                                    <td className="px-3 py-2 border-t text-sm border-slate-200 bg-white text-md text-gray-500 tracking-wider not-italic dark:bg-[#222835] dark:border-gray-700">
                                        <div className="flex-shrink-0 w-10 h-10">
                                            <img
                                                className="w-full h-full rounded-full"
                                                src={contact.picture.thumbnail}
                                                alt=""
                                            />
                                        </div>
                                    </td>
                                    <td className="px-3 py-3 border-t text-sm border-slate-200 bg-white text-md tracking-wider not-italic">
                                        <div className="flex items-center">
                                            <p className="text-zinc-900 whitespace-nowrap">
                                                {contact.name.first}{" "}
                                                {contact.name.last}
                                            </p>
                                        </div>
                                    </td>
                                    <td className="px-3 py-3 border-t text-sm border-slate-200 bg-white text-md tracking-wider not-italic">
                                        <div className="flex items-center">
                                            <p className="text-zinc-900 whitespace-no-wrap">
                                                {contact.email}
                                            </p>
                                        </div>
                                    </td>
                                    <td className="px-3 py-3 border-t text-sm border-slate-200 bg-white  tracking-wider not-italic">
                                        <p className="text-zinc-900 whitespace-nowrap">
                                            {contact.phone}
                                        </p>
                                    </td>
                                    <td className="px-3 py-3 border-t text-sm border-slate-200 bg-white text-md tracking-wider not-italic">
                                        <Menu as="div" className="text-left">
                                            <Menu.Button className="flex w-full justify-center rounded-md  bg-opacity-20 px-4 py-2 text-sm font-medium hover:bg-opacity-30 focus:outline-none pr-11">
                                                <BiDotsHorizontal size={17} />
                                            </Menu.Button>
                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-100"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                <Menu.Items className="absolute mt-0.5 w-21 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <button
                                                                type="button"
                                                                onClick={() =>
                                                                    deleteContactFromFavourite(
                                                                        contact
                                                                    )
                                                                }
                                                                className={`${
                                                                    active
                                                                        ? "bg-red-700 text-white "
                                                                        : "text-gray-700 dark:bg-[#222835] dark:text-white dark:border dark:border-gray-700"
                                                                } group flex w-full items-center rounded-md px-5 py-1 text-sm `}
                                                            >
                                                                <TbTrash
                                                                    size={16}
                                                                />
                                                                <p className="ml-2  pt-0.5 tracking-wider whitespace-nowrap">
                                                                    Eliminar
                                                                    favorito
                                                                </p>
                                                            </button>
                                                        )}
                                                    </Menu.Item>
                                                </Menu.Items>
                                            </Transition>
                                        </Menu>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <EmptyCard
                    src="/images/empty-data.png"
                    title="No hay favoritos"
                    text=""
                />
            )}

            <div className="w-full flex justify-end my-2.5 space-x-3 pr-3">
                {page > 0 && (
                    <div
                        onClick={prevPage}
                        className="flex rounded-md px-4 py-1 bg-white border border-primary text-primary tracking-wider text-sm cursor-pointer hover:opacity-50 transition"
                    >
                        Anterior
                    </div>
                )}
                {contacts.length >= 10 && (
                    <div
                        onClick={nextPage}
                        className="flex rounded-md px-4 py-1 bg-white border border-primary text-primary tracking-wider text-sm cursor-pointer hover:opacity-50 transition"
                    >
                        Siguiente
                    </div>
                )}
            </div>
        </div>
    );
}
