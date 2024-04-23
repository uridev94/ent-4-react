import React from "react";
import './Styles/userCard.css';

const UserCard = ({user, deleteUser, setUpdateUser }) => {

    // console.log(user)

    const handleDelete = () => {
        deleteUser('users', user.id);
    }

    const handleEdit = () => {
            setUpdateUser(user);
    }
  return (
    <section className="user">
        <h2 className="user__name">{user.first_name} {user.last_name}</h2>
        <hr  className='user__line' />
        <ul className="user__list">
            <li className="user__item"><span>Email:</span><span>{user.email}</span></li>
            <li className="user__item"><span>Birthday:</span><span><i class="fa-solid fa-gift"></i> {user.birthday}</span></li>
        </ul>
        <hr className="user__line" />
        <div className="user__buttons">
            <button className='user__btn--delete' onClick={handleDelete} ><ion-icon name="trash-outline"></ion-icon></button>
            <button className='user__btn--edit' onClick={handleEdit}><ion-icon name="create-outline"></ion-icon></button>
        </div>
    </section>
  )
}

export default UserCard;
