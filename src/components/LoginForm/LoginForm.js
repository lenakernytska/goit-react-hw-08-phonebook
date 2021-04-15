import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./LoginForm.module.css";
import {login} from "../../redux/auth/auth-operations";



export default function LoginForm() {
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  const dispatch = useDispatch();
 
  
   const handleChange = (event) => {
        const { name, value } = event.target;
    switch (name) {
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
   dispatch(login({email, password}))
     setEmail('');
    setPassword('');
  }
    
  
    return (
    
            <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
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
        <button  className={styles.button} type="submit">Log In</button>
      </form>
                
        )
          }


