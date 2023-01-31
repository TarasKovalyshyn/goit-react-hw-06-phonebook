import React from 'react';
import { useDispatch } from 'react-redux';
import { removeContacts } from 'redux/contactsSlice';
const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <li>
      {name + ': ' + number}
      <button type="button" onClick={() => dispatch(removeContacts(id))}>
        Delete
      </button>
    </li>
  );
};
export default ContactItem;
