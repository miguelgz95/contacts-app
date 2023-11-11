import { useState } from "react";
import React from "react";

const ContactsContext = React.createContext<any>({});

const ContactsProvider = (props: any) => {
    const [state, setState] = useState({
        contacts: [],
        favourites: [],
    });
    return (
        <ContactsContext.Provider value={[state, setState]}>
            {props.children}
        </ContactsContext.Provider>
    );
};

export { ContactsContext, ContactsProvider };
