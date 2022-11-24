import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <span>
        {contact.name}: {contact.number}
      </span>
      {/* <img src={contact.avatar} /> */}
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};
