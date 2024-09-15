import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import css from './ContactForm.module.css'
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";


const ContactForm = () => {
  const phoneRegExp = /^[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}$/;
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Must be at least 3 characters")
      .max(50, "Must be less than 50 characters")
      .required("This field is required"),
    number: Yup.string()
      .matches(
        phoneRegExp,
        "The phone number must match the format 'xxx-xxx-xx-xx'"
      )
      .required("This field is required"),
  });

  const initialContact = {
    name: "",
    number: "",
  };

  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    dispatch(addContact(newContact));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialContact}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.contactForm}>
        <div className={css.formGroup}>
          <label htmlFor="name" className={css.label}>Name</label>
          <Field
            id="name"
            type="text"
            name="name"
            className={css.field}
          />
          <ErrorMessage name="name" component="span" className={css.errorMessage} />
        </div>

        <div className={css.formGroup}>
          <label htmlFor="number" className={css.label}>Number</label>
          <Field
            id="number"
            type="text"
            name="number"
            className={css.field}
          />
          <ErrorMessage name="number" component="span" className={css.errorMessage} />
        </div>

        <button type="submit" className={css.submitButton}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
