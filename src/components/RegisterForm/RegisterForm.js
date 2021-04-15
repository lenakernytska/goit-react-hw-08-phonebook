import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {register} from "../../redux/auth/auth-operations"
import styles from "./RegisterForm.module.css"


export default function RegisterForm() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    

   const handleChange = (event) => {
        const { name, value } = event.target;
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };
    
 const handleSubmit = event => {
     event.preventDefault();
     dispatch(register({name, email, password}))
     setName("");
     setEmail('');
     setPassword('');
    }
      
  
    return (
    
        <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
             <label className={styles.label}>
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
                />
            </label>
         <label className={styles.label}>
            E-mail
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
                />
            </label>
           <label className={styles.label}>
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </label>
        <button  className={styles.button} type="submit">Sign Up</button>
      </form>
                
        )
          }