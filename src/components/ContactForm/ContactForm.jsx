import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

export default function ContactForm({ onSubmit }) {
  const initialValues = {
    name: "",
    number: "",
  };

  const nameFieldId = useId();
  const numberFieldId = useId();

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required!"),
    number: Yup.string()
      .min(7, "Number too short! Min. 7 symbols")
      .max(50, "Too long!")
      .required("Required!"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <label htmlFor={nameFieldId}>Name:</label>
        <Field type="text" name="name" className={css.name} id={nameFieldId} />
        <ErrorMessage className={css.error} name="name" component="span" />

        <label htmlFor={numberFieldId}>Number:</label>
        <Field
          type="text"
          name="number"
          className={css.number}
          id={numberFieldId}
        />
        <ErrorMessage className={css.error} name="number" component="span" />

        <button type="submit" className={css.button}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
