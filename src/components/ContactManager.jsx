import ContactList from "./ContactList";
import { useState } from "react";
import NewContactForm from "./NewContactForm";

export default function ContactManager() {
  function addContact(contact) {
    setContacts([...contacts, contact]);
    console.log(contacts);
  }

  function handleDelete(id) {
    setContacts(contacts.filter((contact) => id !== contact.id));
  }

  const [contacts, setContacts] = useState([
    { id: 0, name: "Devender", number: "9873455981" },
    { id: 1, name: "Deepak Kumar", number: "9873455982" },
    { id: 2, name: "Raj Kumar", number: "9873455983" },
  ]);

  return (
    <div className="container">
      <h1>Contact Manager</h1>
      <NewContactForm addContact={addContact} count={contacts.length} />
      <ContactList contacts={contacts} handleDelete={handleDelete} />
    </div>
  );
}
