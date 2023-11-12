import { useContext } from "react";
import { ContactsContext } from "./ContactsContext";
import { useRouter } from "next/navigation";
import { Contact } from "@interfaces/contact";

const API_URL = "https://randomuser.me/api/?results=25";

function useContacts() {
    const [state, setState] = useContext(ContactsContext);
    const navigate = useRouter();

    function fetchContacts() {
        if (state.contacts.length === 0) {
            const url = API_URL;
            fetch(url)
                .then(result => result.json())
                .then(data => {
                    setState((state: any) => ({
                        ...state,
                        contacts: data.results,
                    }));
                });
        }
    }

    function getContacts(page: number, filter: string) {
        let contactList = [];

        if (!filter.length || !filter || filter == null) {
            contactList = state.contacts;
        } else {
            page = 0;
            contactList = state.contacts.filter(
                (contact: { name: { first: string; last: string } }) => {
                    const name = contact.name.first.toLowerCase();
                    const lastName = contact.name.last.toLowerCase();

                    return name.includes(filter) || lastName.includes(filter);
                }
            );
        }

        //return contactList;
        if (contactList.length) {
            return contactList.slice(page * 10, page * 10 + 10);
        } else {
            return [];
        }
    }

    function getContactByEmail(email: string) {
        return state.contacts.find(
            (contact: Contact) => contact.email == email
        );
    }

    function deleteContact(email: string) {
        setState((state: { contacts: Contact[] }) => ({
            ...state,
            contacts: state.contacts.filter(
                (contact: Contact) => contact.email != email
            ),
        }));
    }

    function updateContact(
        contact: Contact,
        values: {
            firstName: string;
            lastName: string;
            email: string;
            phone: string;
            image: string;
        }
    ) {
        contact.name.first = values.firstName;
        contact.name.last = values.lastName;
        contact.email = values.email;
        contact.phone = values.phone;
        contact.picture.thumbnail = values.image;

        const newContacts = state.contacts.map((item: { email: string }) => {
            if (item.email == contact.email) {
                return contact;
            }
            return item;
        });

        setState((state: any) => ({ contacts: newContacts, ...state }));

        navigate.push("/home");
    }

    function createContact(values: {
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        image: string;
    }) {
        const newContact = {
            name: {
                first: values.firstName,
                last: values.lastName,
            },
            email: values.email,
            phone: values.phone,
            picture: {
                thumbnail: values.image,
            },
        };

        setState((state: { contacts: any }) => ({
            ...state,
            contacts: [newContact, ...state.contacts],
        }));

        navigate.push("/home");
    }

    function getFavourites() {
        return state.favourites;
    }

    function addToFavourites(contact: Contact) {
        deleteContactFromFavourites(contact);

        const newContact = contact;

        setState((state: { favourites: any }) => ({
            ...state,
            favourites: [...state.favourites, newContact],
        }));
    }

    function deleteContactFromFavourites(contact: Contact) {
        setState((state: { favourites: any[] }) => ({
            ...state,
            favourites: state.favourites.filter(
                el => el.email != contact.email
            ),
        }));
    }

    return {
        getContacts,
        fetchContacts,
        deleteContact,
        getContactByEmail,
        updateContact,
        createContact,
        getFavourites,
        addToFavourites,
        deleteContactFromFavourites,
    };
}

export default useContacts;
