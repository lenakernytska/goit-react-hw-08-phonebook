import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from './ContactForm.module.css'
import {addContact} from "../../redux/contacts/contacts-operations";


export default function ContactForm (){
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

   const handleNameChange = event => {
       setName(event.target.value)
  };
  
   const handleNumberChange = event => {
       setNumber(event.target.value)
    };
    
 const handleSubmit = event => {
    event.preventDefault();
    dispatch(addContact( name, number ));
    setName('');
    setNumber('');
  }
    
  
  return (
            <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>
                    Name
         <input
                className={styles.input}
                type="text"
                name="name"
                value={name}
                autoComplete="off"
                onChange={handleNameChange}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
/>
                </label>
                 <label className={styles.label}>
                    Number
          <input
            className={styles.input}
            type="tel"
            name="number"
            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
            required
            value={number}
            autoComplete="off"
            onChange={handleNumberChange}
          />
        </label>

        <button  className={styles.button} type="submit">Add contact</button>
      </form>
        )
    }

