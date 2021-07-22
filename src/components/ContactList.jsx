import React from 'react';
export default function ContactList(props) {
  return (
    <ul>
      {props.contacts.map((contact, index) => (
        <li key={index}>
          <span>{contact.name}</span>
          <span>
            {contact.number}{' '}
            <button onClick={() => props.handleDelete(contact.id)}>x</button>
          </span>
        </li>
      ))}
    </ul>
  );
}
