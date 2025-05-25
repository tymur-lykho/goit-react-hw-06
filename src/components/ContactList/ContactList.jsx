import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";

export default function ContactList({ contactList }) {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);
  const visibleContacts = contacts?.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
  );
  return (
    <>
      {contacts.length === 0 && (
        <div className={css.empty}>Phonebook is empty</div>
      )}
      <ul className={css.list}>
        {visibleContacts.map((contact) => (
          <li key={contact.id} className={css.card}>
            <Contact data={contact} />
          </li>
        ))}
      </ul>
    </>
  );
}
