import React from "react";
import "./App.css";
import contacts from "./contacts.json";

function App() {
  const baseContacts = [
    contacts[0],
    contacts[1],
    contacts[2],
    contacts[3],
    contacts[4],
  ];

  const [contactArr, setContactArr] = React.useState(baseContacts);

  const addRandom = () => {
    let filteredContacts = contacts.filter((people) => {
      return !contactArr.includes(people);
    });
    let randomIndex = Math.floor(Math.random() * filteredContacts.length);
    let randomContact = filteredContacts[randomIndex];
    setContactArr(contactArr.concat(randomContact));
  };

  const sortByName = () => {
    let contactArrCopy = [...contactArr];
    let byName = contactArrCopy.sort((a, b) => a.name.localeCompare(b.name));
    setContactArr(byName);
  };

  const sortByPopularity = () => {
    let contactArrCopy = [...contactArr];
    let byPopularity = contactArrCopy.sort(
      (a, b) => b.popularity.toFixed(2) - a.popularity.toFixed(2)
    );
    setContactArr(byPopularity);
  };

  const removeContact = (contactToRemove) => {
    let filteredContacts = contactArr.filter((people) => {
      return people !== contactToRemove;
    });
    setContactArr(filteredContacts);
  };

  const iterateContact = contactArr.map((contact) => {
    return (
      <tbody>
        <tr>
          <td>
            <img
              style={{ width: 100 }}
              src={contact.pictureUrl}
              alt="contact"
            />
          </td>
          <td>
            {contact.name}
            <br />
            <button onClick={() => removeContact(contact)}>Delete</button>
          </td>
          <td>{contact.popularity.toFixed(2)}</td>
          <td>{contact.wonOscar ? "🏆" : ""}</td>
          <td>{contact.wonEmmy ? "🏆" : ""}</td>
        </tr>
      </tbody>
    );
  });

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={addRandom}>Add Random Contact</button>
      <button onClick={sortByName}>Sort by Name</button>
      <button onClick={sortByPopularity}>Sort by Popularity</button>
      <table>
        <thead>
          <tr>
            <th style={{ fontSize: 20 }}>Picture</th>
            <th style={{ fontSize: 20 }}>Name</th>
            <th style={{ fontSize: 20 }}>Popularity</th>
            <th style={{ fontSize: 20 }}>Won Oscar</th>
            <th style={{ fontSize: 20 }}>Won Emmy</th>
          </tr>
        </thead>
        {iterateContact}
      </table>
    </div>
  );
}

export default App;
