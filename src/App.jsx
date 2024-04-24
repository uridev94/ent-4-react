import { useEffect, useState } from "react";
import "./App.css";
import useCrud from "./Hooks/useCrud";
import UserForm from "./Components/UserForm";
import UserCard from "./Components/UserCard";

function App() {
  const urlBase = "https://users-crud.academlo.tech/";

  const [isOpen, setIsOpen] = useState(false);

  const [updateUser, setUpdateUser] = useState();

  const [
    users,
    getUsers,
    createUser,
    deleteUser,
    editUser,
    isLoading,
    hasError,
    userDeleted,
    setUserDeleted,
  ] = useCrud(urlBase);

  useEffect(() => {
    const path = "users";
    getUsers(path);
  }, []);

  console.log(users);

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <>
      {isLoading ? (
        <img className="app__loadingStage" src="https://diariopalentino.promecal.es/images/Carga.gif" alt="Loading..." />
      ) : (
        <div className="app">
          <header className="app__header">
            <h1 className="app__title">Crud Users</h1>
            <button className="app__createUserBtn" onClick={handleOpen}>
              {" "}
              + Create user
            </button>
          </header>
          <UserForm
            createUser={createUser}
            updateUser={updateUser}
            editUser={editUser}
            setUpdateUser={setUpdateUser}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
          {
            hasError?
            <div><p>Error en la carga de usuarios</p></div>
            :
          <div className="app__container">
            {users?.map((user) => (
              <UserCard
                key={user.id}
                user={user}
                deleteUser={deleteUser}
                setUpdateUser={setUpdateUser}
              />
            ))}
          </div>
          }
        </div>
      )}
      {
          userDeleted && (
            <div><span>User {userDeleted.first_name} deleted</span>
            <button onClick={()=>setUserDeleted()}>accept</button></div>
          ) 
      }
    </>
  );
}

export default App;
