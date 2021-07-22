import * as actions from "./actions";
import { connect } from "react-redux";
import { useState } from "react";
function NewContactForm(props) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  function handleSubmit(e) {
    if (
      name !== "" &&
      number !== "" &&
      !isNaN(number) &&
      number.length === 10
    ) {
      props.addContact({ id: props.contacts.length, name, number });
      setName("");
      setNumber("");
    }
    e.preventDefault();
  }
  return (
    <form>
      <input
        placeholder="Enter Name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Enter Number"
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <input type="submit" value="+" onClick={handleSubmit} />
    </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(NewContactForm);
