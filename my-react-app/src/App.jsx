import { useState } from "react";
import ContactList from "./ContactList";
import HelloComponent from "./HelloComponent";
import InputComponent from "./InputComponent";

const App = () => {
  const usernames = ["Razal", "Reem", "Rizin", "Najah", "Noushaja"];
  const [contacts, setContacts] = useState(usernames);

  const deleteContact = (indexToDelete) => {
    const updatedContact = contacts.filter(
      (_, index) => index !== indexToDelete
    );
    setContacts(updatedContact);
  };
  return (
    <div>
      <h1>Hello, React with Vite!</h1>
      <p>Welcome to your first React app with Vite.</p>

      <HelloComponent
        name="Razal"
        description="You are doing great! Keep going!"
      />

      <InputComponent />

      <ContactList contacts={contacts} deleteContact={deleteContact} />
    </div>
  );
};

export default App;
