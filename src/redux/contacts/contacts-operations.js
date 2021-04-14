import axios from "axios";
import {
    fetchContactRequest,
    fetchContactSuccess,
    fetchContactError,
    addContactRequest,
    addContactSuccess,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError
} from "./contacts-actions";

axios.defaults.baseURL = " http://https://goit-phonebook-api.herokuapp.com/";

export const fetchContacts = () => dispatch => {
    dispatch(fetchContactRequest());
    axios
        .get('/contacts',)
        .then(({ data }) => dispatch(fetchContactSuccess(data)))
        .catch(error => dispatch(fetchContactError(error)));
};

export const addContact = (name, number) => dispatch => {
    const contact = {
        id: "",
        name,
        number,
    };
    dispatch(addContactRequest());

    axios
        .post('/contacts', contact)
        .then(({ data }) => dispatch(addContactSuccess(data)))
        .catch(error => dispatch(addContactError(error)));
};

export const deleteContact = id => dispatch => {
    dispatch(deleteContactRequest());
    axios
        .delete(`/contacts/${id}`)
        .then(() => dispatch(deleteContactSuccess(id)))
        .catch((error) => dispatch(deleteContactError(error)))
};