import { useState } from "react";
import { useDispatch } from "react-redux";

import styles from "./FormPost.module.css";

import Subtitle from "../Subtitle/Subtitle";
import FormInput from "../FormInput/FormInput";
import BtnSubmit from "../BtnSubmit/BtnSubmit";

import { postAdd } from "../../redux/actions/postsAction";

function initialFormValues() {
  return {
    title: "",
    description: "",
  };
}

export default function FormPost() {
  const dispatch = useDispatch();
  const [values, setValues] = useState(initialFormValues);

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(postAdd(values));
    setValues(initialFormValues);
  };

  return (
    <>
      <Subtitle message="Your post:" />
      <form className={styles.form} onSubmit={handleSubmit}>
        <FormInput
          name="title"
          value={values.title}
          onChange={handleChange}
          placeholder="Title"
        />
        <FormInput
          name="description"
          value={values.description}
          onChange={handleChange}
          placeholder="Description"
        />
        <BtnSubmit btnText="Add Post" />
      </form>
    </>
  );
}
