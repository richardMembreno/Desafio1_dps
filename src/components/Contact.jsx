import React from "react";
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

export const Contact = ({
    contact,
    onDeleteContact,
    onChangeFavoriteStatus
}) => {

    const DeleteContact = () =>{
        onDeleteContact(contact);
    }

    const ChangeFavoriteStatus = () => {
        onChangeFavoriteStatus(contact);
    }

    return(
        <Card className="m-4">
        <div className="flex align-items-start">
            <img src="https://cdn-icons-png.flaticon.com/512/6073/6073873.png" className="mr-5 mb-3 lg:mb-0" alt="avatar-f-1@2x" width={90} height={90} />
            <div>
                <span className="text-900 font-medium text-3xl">{contact.FirstName} {contact.LastName}</span>
                {contact.IsFavorite ? (<i className="pi pi-star text-2xl ml-4 text-yellow-500"></i>) : ('')}
                
                <div className="flex align-items-center flex-wrap text-sm">
                    <div className="mr-5 mt-3">
                        <span className="font-medium text-500">TELÉFONO</span>
                        <div className="text-700 mt-2">{contact.Phone}</div>
                    </div>
                    <div className="mr-5 mt-3 lg:mt-0">
                        <Button onClick={ChangeFavoriteStatus} 
                                tooltip={contact.IsFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'} 
                                icon={contact.IsFavorite ? 'pi pi-heart-fill' : 'pi pi-heart'} 
                                className="ml-3 mr-2" 
                                rounded outlined severity="help" aria-label="Favorite" />

                        <Button icon="pi pi-times" 
                                rounded outlined severity="danger" aria-label="Cancel" 
                                onClick={DeleteContact}
                                tooltip="Eliminar" />
                    </div>
                </div>
            </div>
        </div> 
        </Card>   
    );
}