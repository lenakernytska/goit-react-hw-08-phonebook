import React from "react";
import styles from './ContactList.module.css';
import { deleteContact } from "../redux/contacts/contacts-operations";
import { useDispatch, useSelector } from "react-redux";
import { getVisibleContacts } from "../redux/contacts/contacts-selectors";



export default function ContactList  () {
    const contacts = useSelector(getVisibleContacts);

    const dispatch = useDispatch();

    const onDeleteContact = id => dispatch(deleteContact(id));
    
    return (
        <ul className={styles.list}>
        {
            contacts.map(({ id, name, number }) => (
                <li
                    className={styles.item}
                    key={id}
                >{name}: {number}
                <button className={styles.button} type="button" onClick={()=>onDeleteContact(id)}>Delete</button>
                </li>
            ))
        }
    </ul>
    )
    
}

