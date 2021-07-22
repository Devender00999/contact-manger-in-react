import React from "react";
import ContactList from "./ContactList";
import NewContactForm from "./NewContactForm";
import { connect } from "react-redux";
import * as actions from "./actions";

function ContactManager(props) {
  return (
    <div className="container">
      <div>
        <h1>Contact Manager</h1>
        <NewContactForm />
        <ContactList />
      </div>
    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ContactManager);
