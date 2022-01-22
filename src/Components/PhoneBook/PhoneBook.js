import { useSelector, useDispatch, connect } from "react-redux";
import { useEffect } from "react";
import { addFilter } from "../../redux/telbook/action";
import {
  addContact,
  deleteContact,
  fetchContacts,
} from "../../redux/telbook/contacts-operation";
import { filterContacts, getFilter } from "../../redux/telbook/selector.js";
import Form from "../Forma/FormPhonebook";
import ContactsList from "../PhoneContacts/PhoneContacts";
import Filter from "../Filter/Filter";
import s from "./PhoneBook.module.css";
function PhoneBook() {
  const contacts = useSelector(filterContacts);
  const filters = useSelector(getFilter);
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const contact = {
      name: data.name,
      number: data.number,
    };
    if (availabilityContact(contact.name)) {
      return alert(`Name ${contact.name}already on your list
      `);
    } else {
      dispatch(addContact(contact));
    }
  };

  const availabilityContact = (value) => {
    return contacts.find((el) => el.name === value);
  };

  const delContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };
  const filterContact = (e) => {
    const { value } = e.currentTarget;
    dispatch(addFilter(value));
  };

  const normalizedFilter = filters.toLowerCase();
  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <>
      <div className={s.PhoneBookBlock}>
        <Form onSubmit={onSubmit} />
      </div>
      <div>
        <div>
          <h2 className={s.Contacts__title}>Contacts</h2>
          {contacts.length > 0 ? (
            <Filter filterContact={filterContact} value={filters} />
          ) : (
            <p className={s.Filter__text}>No contacts🙁</p>
          )}
        </div>
        <ContactsList contacts={visibleContacts} delContact={delContact} />
      </div>
    </>
  );
}
export const mapDispatchTopProps = (dispatch) => ({
  fetchContacts: () => dispatch(fetchContacts()),
});
export default connect(null, mapDispatchTopProps)(PhoneBook);
