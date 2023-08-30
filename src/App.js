import { useState } from "react";
import { ContactList } from "./components/ContactList";

function App() {
  let contactData = require('./data.json');
  const [allContacts, setAllContacts] = useState(contactData);
  const [visible, setVisible] = useState(false);
  return (
    <>
      <ContactList 
        allContacts = {allContacts} 
        setAllContacts = {setAllContacts}
        visible = {visible}
        setVisible = {setVisible}/>
    </>
  );
}

export default App;
