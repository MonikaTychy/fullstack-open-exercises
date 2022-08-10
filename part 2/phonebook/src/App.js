import { useState } from 'react';

const App = () => {
     const [persons, setPersons] = useState([
      { name: 'Arto Hellas' }
     ])
     const [newName, setNewName] = useState('')

     
     const handleSubmit = (event) => {
       event.preventDefault();
       const newPerson = { name: newName }

       if (persons.some(person => person.name.toLowerCase() === newName)){
        alert (`${newName} is already added to phonebook`)
        setNewName('')
       } else {
         setPersons(persons.concat(newPerson))
         setNewName('');
       }
     }

     const handleNameChange = (event) => {
      setNewName(event.target.value)
     }

  return (
    <div className="App">
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleNameChange} placeholder="enter new name" />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(function(person){
        return (
          <p key={person.name}>{person.name}</p>
        )
      })}
    </div>
  );
}

export default App;
