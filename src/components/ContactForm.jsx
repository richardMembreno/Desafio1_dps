import React,{ useState, useRef } from "react";
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';

export const ContactForm = ({
    visible,
    setVisible,
    onAddContact,
    allContacts
}) => {
    const toast = useRef(null);

    const OnHideForm = value =>{
        setVisible(value);
    }

    const [contact, setContact] = useState({
        FirstName:'', LastName:'', Phone:'', IsFavorite: false
    });

    const handleClick = e => {
        e.preventDefault();
        if(contact.FirstName == '' || contact.LastName == '' || contact.Phone == ''){
            toast.current.show({severity:'error', summary: 'Error', detail:'Todos los campos son requeridos!', life: 3000});
            return;
        }

        if(!isNaN(contact.FirstName) || !isNaN(contact.LastName)){
            toast.current.show({severity:'error', summary: 'Error', detail:'El Nombre y Apellido deben ser letras!', life: 3000});
            return;
        }

        if(isNaN(contact.Phone) || contact.Phone < 0){
            toast.current.show({severity:'error', summary: 'Error', detail:'El Teléfono debe ser numérico', life: 3000});
            return;
        }

        if(contact.Phone.length != 8){
            toast.current.show({severity:'error', summary: 'Error', detail:'El Teléfono debe contener 8 digitos!', life: 3000});
            return;
        }

        onAddContact(contact);
        setContact({FirstName:'', LastName:'', Phone:'', IsFavorite: false});
        setVisible(false);
    }

    const handleChangeValue = e => {
        const{name, value} = e.target;
        setContact(data => ({
            ...data, [name]: value
        }));
    };

    return(
        <Dialog header="Nuevo Contacto" visible={visible} style={{ width: '50vw' }} onHide={() => OnHideForm(false)}>
            <Toast ref={toast} />
            <form onSubmit={handleClick}>
            <div className="col">
                <div className="col-10 m-auto">
            <div className="p-inputgroup m-3">
                <span className="p-inputgroup-addon">
                    <i className="pi pi-user"></i>
                </span>
                <InputText placeholder="Nombre" id="FirstName" name="FirstName" onChange={handleChangeValue} />
            </div>
            <div className="p-inputgroup m-3">
                <span className="p-inputgroup-addon">
                    <i className="pi pi-user"></i>
                </span>
                <InputText placeholder="Apellido" id="LastName" name="LastName" onChange={handleChangeValue} />
            </div>
            <div className="p-inputgroup m-3">
                <span className="p-inputgroup-addon">
                    <i className="pi pi-whatsapp"></i>
                </span>
                <InputText placeholder="Teléfono" id="Phone" name="Phone" onChange={handleChangeValue} />
            </div>
            <div className="p-inputgroup m-3 justify-content-center">
                <Button label="Guardar" severity="secondary" outlined type="submit"/>
            </div>
            </div>
            </div>
            </form>
        </Dialog>
    );

}