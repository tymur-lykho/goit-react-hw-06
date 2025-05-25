import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ contactList, onDelete }) {
  return (
    <>
      {contactList.length === 0 && (
        <div className={css.empty}>Phonebook is empty</div>
      )}
      <ul className={css.list}>
        {contactList.map((contact) => (
          <li key={contact.id} className={css.card}>
            <Contact data={contact} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    </>
  );
}
