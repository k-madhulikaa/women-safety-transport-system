import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

function EmergencyContacts() {

  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const contactsRef = collection(db, "contacts");

  const loadContacts = async () => {
    const data = await getDocs(contactsRef);
    setContacts(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
  };

  const addContact = async () => {

    if (!name || !phone) {
      alert("Enter name and phone");
      return;
    }

    await addDoc(contactsRef, {
      name: name,
      phone: phone
    });

    setName("");
    setPhone("");

    loadContacts();
  };

  useEffect(() => {
    loadContacts();
  }, []);

  return (

    <div style={{ padding: "40px" }}>

      <h2>Emergency Contacts</h2>

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        style={{ marginLeft: "10px" }}
      />

      <button onClick={addContact} style={{ marginLeft: "10px" }}>
        Add Contact
      </button>

      <ul>

        {contacts.map((c) => (
          <li key={c.id}>
            {c.name} - {c.phone}
          </li>
        ))}

      </ul>

    </div>
  );
}

export default EmergencyContacts;