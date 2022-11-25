import React from 'react';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import { ContactItem } from 'components/ContactsItem/ContactsItem';
import { Item } from './ContactsList.styled';

export const ContactListBox = () => {
  const contacts = useSelector(selectContacts);

  const filter = useSelector(selectFilter);

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
