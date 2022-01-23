import PhoneBook from "./Components/PhoneBook/PhoneBook";
import s from "./Components/PhoneBook/PhoneBook.module.css";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchContacts } from "./redux/telbook/contacts-operation";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (fetchContacts) {
      dispatch(fetchContacts());
    }
  }, [dispatch]);
  return (
    <div className={s.Container}>
      <PhoneBook />
    </div>
  );
}

export default App;
