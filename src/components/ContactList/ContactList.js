import { useDispatch, useSelector } from 'react-redux';

import { deleteContact } from 'redux/operations';
import { selectContacts } from 'redux/contactsSlice';
import { selectFilters } from 'redux/filtersSlice';
import { ButtonDelete, ContactItem, ListContact } from './ContactList.styled';

export const ContactList = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilters);
    const contacts = useSelector(selectContacts);
    // console.log(contacts);

    const getVizibleContact = () => {
        return filter 
        ? contacts.filter(contact => contact.name.toLowerCase().includes(filter))
        : contacts;
    };
    const vizibleContact = getVizibleContact()
    // console.log(vizibleContact);

    return (
        <ListContact>
            {vizibleContact.map(contact => (
                <ContactItem key={contact.id}>
                    {contact.name}: {contact.phone}
                    <ButtonDelete type="button" onClick={() => dispatch(deleteContact(contact.id))}>
                        Delete
                    </ButtonDelete>
                </ContactItem> 
            ))}
        </ListContact>
    );
};