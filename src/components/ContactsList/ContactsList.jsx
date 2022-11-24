import React from 'react';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { ContactItem } from 'components/ContactsItem/ContactsItem';
import { Item } from './ContactsList.styled';

export const ContactListBox = () => {
  const contacts = useSelector(getContacts);

  const filter = useSelector(getFilter);

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const visibleContacts = getVisibleContacts();

  console.log('contacts: ', contacts);
  console.log('filter: ', filter);
  console.log('visibleContacts: ', visibleContacts);

  return (
    <div>
      <ul>
        {visibleContacts.map(contact => (
          <Item key={contact.id}>
            <ContactItem contact={contact} />
          </Item>
        ))}
      </ul>
    </div>
  );
};
