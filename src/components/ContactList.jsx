import * as actions from "./actions";
import { connect } from "react-redux";
function ContactList(props) {
  return (
    <ul>
      {props.contacts.map((contact, index) => (
        <li key={index}>
          <span>{contact.name}</span>
          <span>
            {contact.number}{" "}
            <button onClick={() => props.deleteContact(contact)}>x</button>
          </span>
        </li>
      ))}
    </ul>
  );
}
function mapStateToProps(state) {
  return {
    contacts: state.contacts,
  };
}

const mapDispatchToProps = {
  addContact: actions.addContact,
  deleteContact: actions.deleteContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
