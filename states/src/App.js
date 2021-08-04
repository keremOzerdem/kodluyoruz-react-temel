import { useState } from "react";

function App() {
  const [name, setName] = useState('Mehmet')
  const [age, setAge] = useState(29)
  const [friends, setFriends] = useState(["Ahmet", "Murat"])
  const [address, setAdress] = useState({ title: "Istanbul", zip: 34756 })

  return (
    <div className="App">
      <h1>Merhaba {name}!</h1>
      <h2>{age}</h2>
      <button onClick={() => setName('Ahmet')}>Change name</button>
      <button onClick={() => setAge(25)}>Change age</button>

      <hr />
      <br></br>

      <h2>Friends</h2>
      {
        friends.map((friend, index) => <div key={index}>{friend}</div>)
      }

      <br />

      <button onClick={() => setFriends([...friends, 'Ayşe'])}>Add new friend</button>

      <hr />
      <br></br>

      <h2>Address</h2>
      <div>{address.title} {address.zip}</div>

      <br />

      <button onClick={() => setAdress({ ...address, zip: 44444, title: "Ankara" })}>
        change the address
      </button>

    </div>
  );
}

export default App;
