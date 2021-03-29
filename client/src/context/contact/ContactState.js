import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './ContactContext';
import contactReducer from './ContactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../types';

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Linda Johson',
        email: 'ljohnson@gmail.com',
        phone: '555-555-5555',
        type: 'personal',
      },
      {
        id: 2,
        name: 'Sara Smith',
        email: 'ssmith@gmail.com',
        phone: '111-111-1111',
        type: 'professional',
      },
      {
        id: 3,
        name: 'Brad Token',
        email: 'btoken@gmail.com',
        phone: '222-222-2222',
        type: 'professional',
      },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact

  // Delete contact

  // Set current contact

  // Clear current contact

  // Update contact

  // Filter contacts

  // Clear filter

  return (
    <ContactContext.Provider value={{ contacts: state.contacts }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
