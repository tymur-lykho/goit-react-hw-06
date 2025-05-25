import css from "./Contact.module.css";
import { IoMdContact } from "react-icons/io";
import { MdLocalPhone } from "react-icons/md";
import { MdDelete } from "react-icons/md";

export default function Contact({ data: { id, name, number }, onDelete }) {
  const link = `tel:${number}`;

  return (
    <>
      <div className={css.data}>
        <div className={css.dataWrapper}>
          <IoMdContact size={25} />
          <h3>{name}</h3>
        </div>
        <div className={css.dataWrapper}>
          <MdLocalPhone size={23} />
          <a className={css.numberLink} href={link}>
            {number}
          </a>
        </div>
      </div>
      <button className={css.button} type="button" onClick={() => onDelete(id)}>
        <MdDelete size={25} />
      </button>
    </>
  );
}
