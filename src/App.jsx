import "./App.css";
import "modern-normalize";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { useSelector } from "react-redux";

function App() {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      {contacts.length !== 0 && <SearchBox inputValue={filter} />}
      <ContactList />
    </>
  );
}

export default App;
