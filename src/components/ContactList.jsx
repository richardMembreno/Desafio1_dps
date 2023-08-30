import React from "react";
import { Contact } from "./Contact";
import {ContactForm} from "./ContactForm";
import { Button } from 'primereact/button';

export const ContactList = ({
    allContacts,
    setAllContacts,
    visible,
    setVisible
}) => {
    const OnShowForm = value => {
        setVisible(value);
    }

    const addNewContact = newContact => {
        setAllContacts([...allContacts, newContact]);
    }

    const deleteContact = contact => {
        const contacts = allContacts.filter(
            item => item.Phone !== contact.Phone
        );
        setAllContacts(contacts);
    }

    const changeFavoriteStatus = contact => {
        const contacts = allContacts.map(value => {
            if(value === contact){
                return {...value, IsFavorite: !value.IsFavorite};
            }
            return value;
        });
        setAllContacts(contacts);
    }

    const sortedAllContacts = [...allContacts].sort((a, b) => (a.status === b.IsFavorite ? 0 : a.IsFavorite ? -1 : 1));

    return(
        <div className="layout-wrapper surface-200 m-0 p-0">
            <div className="layout-content">
                <div className="block-section">
                    <div className="block-header">
                        <div className="grid">
                            <div className="col-10 m-auto flex flex-wrap border-round bg-white">
                                <div className="col-6 justify-content-start">
                                    <p className="text-2xl font-medium">Contactos</p>
                                </div>
                                <div className="col-6 flex justify-content-end flex-wrap py-4">
                                    <Button icon="pi pi-user-plus" label="Agregar Contacto" outlined onClick={() => OnShowForm(true)} />
                                </div>
                            </div>
                        </div>
                    </div>
                    {visible ? <ContactForm visible={visible} setVisible={setVisible} onAddContact={addNewContact} /> : null}
                    <div className="block-content">
                        <div>
                                <div className="col-10 m-auto px-6 py-5">
                                    <div className="flex flex-wrap lg:flex-row lg:justify-content-center">
                                        {sortedAllContacts.map((contact, index) => (
                                            <Contact key={index} 
                                                    onDeleteContact={deleteContact}  
                                                    contact={contact} 
                                                    onChangeFavoriteStatus={changeFavoriteStatus}
                                                    allContacts={allContacts} />
                                        ))}
                                    </div>
                                </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}