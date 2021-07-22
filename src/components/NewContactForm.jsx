import { useState } from "react";
export default function NewContactForm(props) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  function handleSubmit(e) {
    if (
      name !== "" &&
      number !== "" &&
      !isNaN(number) &&
      number.length === 10
    ) {
      props.addContact({ id: props.count, name, number });
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
