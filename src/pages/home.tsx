import HomeCard from "@components/Cards/HomeCard";
import { Collapsible } from "@components/Containers/Collapsible";
import ContactsFilter from "@components/Forms/FilterForms/ContactsFilter";
import AddNewContactModal from "@components/Modals/AddNewContactModal";
import ContactsTable from "@components/Tables/ContactsTable";
import FavouritesTable from "@components/Tables/FavouritesTable";
import { TABLE_TYPES } from "@constants/tableTypes";
import useContacts from "@hooks/useContacts.";
import Layout from "Layouts/Layout";
import { getUsers } from "app/api/users";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BiSolidStar, BiUser } from "react-icons/bi";

const Home: NextPage = () => {
    const router = useRouter();

    const { fetchContacts, getContacts, deleteContact } = useContacts();
    const addToFavourites = useContacts().addToFavourites;
    const deleteContactFromFavourites =
        useContacts().deleteContactFromFavourites;
    const favourites = useContacts().getFavourites();

    const data = getUsers();

    const [filter, setFilter] = useState<string>("");
    const [openContactModal, setOpenContactModal] = useState<boolean>(false);
    const [page, setPage] = useState<number>(0);
    const [selectedTableType, setSelectedTableType] = useState<
        (typeof TABLE_TYPES)[keyof typeof TABLE_TYPES]
    >(TABLE_TYPES.CONTACTS);

    const isSelectedFavouritesTable =
        selectedTableType === TABLE_TYPES.FAVOURITES;

    const isSelectedContactsTable = selectedTableType === TABLE_TYPES.CONTACTS;

    const handleChangeSelectedTableType = (
        tableType: typeof selectedTableType
    ) => {
        setSelectedTableType(tableType);
    };

    const contacts = getContacts(page, filter);

    function removeContact(email: string) {
        deleteContact(email);
    }

    const handleNewContactModalClose = () => {
        setOpenContactModal(false);
        router.push({
            pathname: window.location.pathname,
        });
    };

    useEffect(() => {
        if (!contacts.length) {
            fetchContacts();
        }
    }, []);

    useEffect(() => {
        if (router.asPath === "/home?add") {
            setOpenContactModal(true);
        }
    }, [router]);

    console.log(contacts);

    return (
        <div>
            <Layout>
                <div className="w-full mt-3.5 mb-10">
                    <div className="w-full md:w-fit rounded-md px-4 py-1.5 bg-white border border-slate-200">
                        <div className="w-full flex items-center space-x-2">
                            <p className="text-zinc-900 text-lg font-medium tracking-wider">
                                Hola,
                            </p>
                            <p className="text-slate-400 font-medium tracking-wider">
                                {data[0].name}
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
                        <div className="w-full mt-2.5 px-2 pt-2 border border-slate-200 bg-white overflow-x-auto rounded-md">
                            <div className="flex mt-8">
                                <Collapsible
                                    title="Lista de contactos"
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
                                    key={contacts.email}
                                    contacts={contacts}
                                    page={page}
                                    setPage={setPage}
                                    removeContact={removeContact}
                                    addToFavourites={addToFavourites}
                                />
                            )}
                            {isSelectedFavouritesTable && (
                                <FavouritesTable
                                    key={favourites.email}
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
            />
        </div>
    );
};

export default Home;
