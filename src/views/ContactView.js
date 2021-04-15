import React, { useEffect } from "react";
import { useDispatch, useSelector  } from "react-redux";
import ContactForm from "../components/ContactForm";
import ContactList from "../components/ContactList";
import Filter from "../components/Filter";
import { fetchContacts } from "../redux/contacts/contacts-operations";
import Loader from "react-loader-spinner";
import {getIsLoadingStatus} from "../redux/contacts/contacts-selectors"



function ContactView() {

  const isLoading = useSelector(getIsLoadingStatus);

  const dispatch = useDispatch();

  useEffect(() => {
       dispatch(fetchContacts())
    }, [dispatch]);

   return (
    <div>
  <h1>Phonebook</h1>
       <ContactForm />
       {isLoading && <Loader
        type="Puff"
        color="#00BFFF"
        height={30}
        width={30}
        timeout={3000} 
      />}
  <h2>Contacts</h2>
        <Filter/>
        <ContactList />
</div>
  )
}



export default ContactView;
