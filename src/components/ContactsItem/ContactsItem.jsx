import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <div>
      <span>
        {contact.name}: {contact.number}
      </span>
      <button type="submit" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};
