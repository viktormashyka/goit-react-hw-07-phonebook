import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <div>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
      <span>
        {contact.name}: {contact.number}
      </span>
      {/* <img src={contact.avatar} /> */}
    </div>
  );
};
