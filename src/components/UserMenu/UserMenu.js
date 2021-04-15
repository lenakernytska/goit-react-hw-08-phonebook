import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import styles from "./UserMenu.module.css";
import { getUserName } from "../../redux/auth/auth-selectors";
import avatar from "../UserMenu/avatar.png";
import {logOut} from "../../redux/auth/auth-operations"

const UserMenu = () => {
  const name = useSelector(getUserName);
  const dispatch =useDispatch() 

  return (<div className={styles.container}>
    <img src={avatar} alt="" width="32" className={styles.avatar} />
    <span className={styles.name}>Welcome, {name}</span>
    <button type="button" onClick={()=>dispatch(logOut())}>
      Logout
    </button>
  </div>)
  

}

export default UserMenu;