import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';

import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading, selectContacts } from 'redux/selectors';

import { ContactForm } from './ContactsForm/ContactsForm';
import { FilterBox } from './ContactsFilter/ContactsFilter';
import { ContactListBox } from './ContactsList/ContactsList';
import { Layout } from './Layout/Layout';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Layout>
        <h1>Phonebook</h1>
        <ContactForm />
        {isLoading && !error && <b>Request in progress...</b>}
        {error && <b>{error}</b>}
        {/* <p>{contacts.length > 0 && JSON.stringify(contacts, null, 2)}</p> */}
        {contacts.length > 0 && !isLoading && (
          <div>
            <h2>Contacts</h2>
            <FilterBox />
            <ContactListBox />
          </div>
        )}
        <ToastContainer />
      </Layout>
    </div>
  );
};

// import { Phonebook } from '../components/Phonebook/Phonebook';
// import { Layout } from './Layout/Layout';

// export const App = () => {
//   return (
//     <div>
//       <Layout>
//         <Phonebook />
//       </Layout>
//     </div>
//   );
// };
