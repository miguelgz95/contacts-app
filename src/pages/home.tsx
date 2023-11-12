import HomeCard from "@components/Cards/HomeCard";
import { Collapsible } from "@components/Containers/Collapsible";
import ContactsFilter from "@components/Forms/FilterForms/ContactsFilter";
import AddNewContactModal from "@components/Modals/AddNewContactModal";
import ContactsTable from "@components/Tables/ContactsTable";
import FavouritesTable from "@components/Tables/FavouritesTable";
import { TABLE_TYPES } from "@constants/tableTypes";
import useContacts from "@hooks/useContacts.";
import Layout from "Layouts/Layout";
import { NextPage } from "next";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BiSolidStar, BiUser } from "react-icons/bi";

const Home: NextPage = () => {
    const router = useRouter();

    const session = useSession();

    const userName = session?.data?.user?.name || "";

    const [filter, setFilter] = useState<string>("");
    const [openContactModal, setOpenContactModal] = useState<boolean>(false);
    const [page, setPage] = useState<number>(0);
    const [email, setEmail] = useState<string>("");
    const [selectedTableType, setSelectedTableType] = useState<
        (typeof TABLE_TYPES)[keyof typeof TABLE_TYPES]
    >(TABLE_TYPES.CONTACTS);

    const { fetchContacts, getContacts, getContactByEmail, deleteContact } =
        useContacts();
    const addToFavourites = useContacts().addToFavourites;
    const deleteContactFromFavourites =
        useContacts().deleteContactFromFavourites;
    const favourites = useContacts().getFavourites();
    const contacts = getContacts(page, filter);

    const isSelectedFavouritesTable =
        selectedTableType === TABLE_TYPES.FAVOURITES;
    const isSelectedContactsTable = selectedTableType === TABLE_TYPES.CONTACTS;

    const handleChangeSelectedTableType = (
        tableType: typeof selectedTableType
    ) => {
        setSelectedTableType(tableType);
    };

    function editContact(email: string) {
        setEmail(email);
    }

    function removeContact(email: string) {
        deleteContact(email);
    }

    const handleNewContactModalClose = () => {
        setOpenContactModal(false);
        setEmail("");
        router.push({
            pathname: window.location.pathname,
        });
    };

    let contact = null;

    if (email as string) {
        contact = getContactByEmail(email);
    }

    useEffect(() => {
        if (!contacts.length) {
            fetchContacts();
        }
    }, []);

    useEffect(() => {
        if (router.asPath === "/home?add" || email) {
            setOpenContactModal(true);
        }
    }, [router, email]);

    return (
        <div>
            <Layout>
                <div className="w-full mt-3.5 mb-10">
                    <div className="w-full md:w-fit rounded-lg px-4 py-1.5 bg-white border border-slate-200">
                        <div className="w-full flex items-center space-x-2">
                            <p className="text-zinc-900 text-lg font-medium tracking-wider">
                                Hola,
                            </p>
                            <p className="text-slate-500 font-medium tracking-wider">
                                {userName}
                            </p>
                            <p className="wave text-xl mt-[-2.5px]"> 👋</p>
                        </div>
                        <p className="tracking-wider text-zinc-900 ">
                            Bienvenido a la página principal de Contacts App
                        </p>
                    </div>
                    <div className="md:flex mt-2.5 md:space-x-2.5 ">
                        <div className="w-full md:w-fit">
                            <HomeCard
                                href="?add"
                                icon={<BiUser color="white" size={22} />}
                                title="Añadir contacto"
                                description="Crea y guarda un nuevo contacto"
                            />
                        </div>
                        <div className="w-full md:w-fit mt-2.5 md:mt-0">
                            <HomeCard
                                handleChange={() =>
                                    handleChangeSelectedTableType(
                                        TABLE_TYPES.FAVOURITES
                                    )
                                }
                                href=""
                                bgColorIcon="bg-yellow-300"
                                icon={<BiSolidStar color="white" size={20} />}
                                title="Favoritos"
                                description="Visualiza contactos marcados como favorito"
                            />
                        </div>
                    </div>
                    <div className="w-full mt-2.5">
                        <div className="w-full mt-2.5 px-2 pt-2 border border-slate-200 bg-white overflow-x-auto rounded-lg">
                            <div className="flex mt-8">
                                <Collapsible
                                    title={
                                        isSelectedContactsTable
                                            ? "Lista de contactos"
                                            : "Lista de favoritos"
                                    }
                                    handleChangeSelectedTableType={
                                        handleChangeSelectedTableType
                                    }
                                    isSelectedContactsTable={
                                        isSelectedContactsTable
                                    }
                                    isSelectedFavouritesTable={
                                        isSelectedFavouritesTable
                                    }
                                >
                                    <ContactsFilter
                                        filter={filter}
                                        setFilter={setFilter}
                                    />
                                </Collapsible>
                            </div>
                            {isSelectedContactsTable && (
                                <ContactsTable
                                    contacts={contacts}
                                    page={page}
                                    setPage={setPage}
                                    editContact={editContact}
                                    removeContact={removeContact}
                                    favourites={favourites}
                                    addToFavourites={addToFavourites}
                                />
                            )}
                            {isSelectedFavouritesTable && (
                                <FavouritesTable
                                    contacts={favourites}
                                    page={page}
                                    setPage={setPage}
                                    deleteContactFromFavourite={
                                        deleteContactFromFavourites
                                    }
                                />
                            )}
                        </div>
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
            </Layout>
            <AddNewContactModal
                onClose={handleNewContactModalClose}
                setIsOpen={setOpenContactModal}
                isOpen={openContactModal}
                contactData={contact}
            />
        </div>
    );
};

export default Home;
