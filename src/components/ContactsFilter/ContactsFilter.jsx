import React from 'react';
import { useDispatch } from 'react-redux';

import { changeFilter } from 'redux/filterSlice';

export const FilterBox = ({ value }) => {
  const dispatch = useDispatch();

  const handleChangeFilter = evt => {
    const filter = evt.currentTarget.value;
    dispatch(changeFilter(filter));
    console.log('filter: ', filter);
  };

  return (
    <label htmlFor="">
      Find contacts by name
      <br />
      <input
        type="text"
        name="filterContacts"
        value={value}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        // placeholder="Enter name for search..."
        onChange={handleChangeFilter}
      />
    </label>
  );
};
