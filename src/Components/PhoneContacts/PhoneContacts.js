import React, { useEffect } from "react";
import PropTypes from "prop-types";
import s from "./PhoneBook.module.css";
import { fetchContacts } from "../../redux/telbook/contacts-operation";
import { connect } from "react-redux";
const ContactsList = ({ contacts = [], delContact }) => {
  // useEffect(() => {
  //   fetchContacts();
  //   console.log("test");
  //   console.log(contacts);
  // }, []);

  return (
    <ul className={s.Contact__list}>
      {contacts.map((el) => (
        <li key={el.id} className={s.Contact__item}>
          <span>
            {el.createdAt}:{el.name} : {el.phone}
          </span>
          <button
            type="button"
            onClick={() => delContact(el.id)}
            className={s.Button__remove}
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
};
ContactsList.propTypes = {
  contactsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

// const mapDispatchToprops = (dispatch) => ({
//   fetchContacts: () => dispatch(fetchContacts()),
// });
export default ContactsList;
