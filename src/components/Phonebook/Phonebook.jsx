import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { getError, getIsLoading, getItems } from 'redux/selectors';

import { ContactForm } from '../ContactsForm/ContactsForm';
import { FilterBox } from '../ContactsFilter/ContactsFilter';
import { ContactListBox } from '../ContactsList/ContactsList';

export const Phonebook = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const contacts = useSelector(getContacts);

  // const { items, isLoading, error } = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      {isLoading && !error && <b>Request in progress...</b>}
      {error && <p>{error}</p>}
      {/* <p>{contacts.length > 0 && JSON.stringify(contacts, null, 2)}</p> */}
      {contacts.length > 0 && !isLoading && (
        <div>
          <h2>Contacts</h2>
          <FilterBox />
          <ContactListBox />
        </div>
      )}

      <ToastContainer />
    </div>
  );
};

// import React from 'react';
// import { useSelector } from 'react-redux';
// import { getContacts } from 'redux/selectors';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// import { ContactForm } from '../ContactsForm/ContactsForm';
// import { FilterBox } from '../ContactsFilter/ContactsFilter';
// import { ContactListBox } from '../ContactsList/ContactsList';

// export const Phonebook = () => {
//   const contacts = useSelector(getContacts);

//   return (
//     <div>
//       <h1>Phonebook</h1>
//       <ContactForm />
//       {contacts.length > 0 && (
//         <div>
//           <h2>Contacts</h2>
//           <FilterBox />
//           <ContactListBox />
//         </div>
//       )}
//       <ToastContainer />
//     </div>
//   );
// };
