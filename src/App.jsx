import "./App.css";
import "modern-normalize";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";

function App() {
  const [contactList, setContactList] = useState(() => {
    return JSON.parse(localStorage.getItem("saved-contacts")) ?? [];
  });

  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const filteredContactList = contactList.filter((contact) =>
    contact.name.toLowerCase().includes(inputValue.toLocaleLowerCase())
  );

  const handleDelete = (id) => {
    setContactList((contactList) => {
      return contactList.filter((contact) => contact.id !== id);
    });
  };

  const handleAdd = (values, actions) => {
    const newContact = { id: nanoid(), ...values };
    setContactList((contactList) => {
      return [...contactList, newContact];
    });
    actions.resetForm();
  };

  useEffect(() => {
    localStorage.setItem("saved-contacts", JSON.stringify(contactList));
  }, [contactList]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleAdd} />
      {contactList.length !== 0 && (
        <SearchBox inputValue={inputValue} onUpdate={handleChange} />
      )}
      <ContactList contactList={filteredContactList} onDelete={handleDelete} />
    </>
  );
}

export default App;
