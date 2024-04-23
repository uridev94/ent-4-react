import { useEffect } from "react";
import { useForm } from "react-hook-form";
import "../Components/Styles/userForm.css";
const UserForm = ({
  createUser,
  updateUser,
  editUser,
  setUpdateUser,
  isOpen,
  setIsOpen,
}) => {
  /* first_name, last_name, email, password, birthday */

  const { handleSubmit, register, reset } = useForm();

  useEffect(() => {
    if (updateUser) {
      reset(updateUser);
      setIsOpen(true);
    }
  }, [updateUser]);

  const submit = (data) => {
    console.log(data);
    if (updateUser) {
      editUser("users", data, updateUser.id);
      setUpdateUser(undefined);
    } else {
      createUser("users", data);
    }
    setIsOpen(false);
    reset({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      birthday: "",
      imgUrl: "",
    });
  };

  // const onError = (errors:FieldErrors<user>) => {
  //  console.log("form errors", errors)
  // };

  const handleClose = () => {
    setIsOpen(false);
    setUpdateUser();
    reset({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      birthday: "",
      imgUrl: "",
    });
  };

  return (
    <div className={`form__back ${isOpen && "active"}`}>
      <form className="form" onSubmit={handleSubmit(submit)}>
        <button onClick={handleClose} type="button" className="form__close">
          x
        </button>
        <h2 className="form__title">Edit/Add user</h2>
        <div className="form__item">
          <label htmlFor="first_name">First name</label>
          <input {...register("first_name")} id="first_name" type="text" />
        </div>
        <div className="form__item">
          <label htmlFor="last_name">Last name</label>
          <input {...register("last_name")} id="last_name" type="text" />
        </div>
        <div className="form__item">
          <label htmlFor="email">Email</label>
          <input {...register("email")} id="Email" type="text" />
        </div>
        <div className="form__item">
          <label htmlFor="password">Password</label>
          <input {...register("password")} id="Password" type="password" />
        </div>
        <div className="form__item">
          <label htmlFor="Birthday">Birthday</label>
          <input {...register("birthday")} id="Birthday" type="date" />
        </div>
        <div className="form__item">
          <label htmlFor="imgUrl">Img URL</label>
          <input {...register("imgUrl")} id="imgUrl" type="url" />
        </div>
        <button className="form__button">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
