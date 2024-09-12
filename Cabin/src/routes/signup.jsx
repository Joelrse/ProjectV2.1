import React, { useState, useEffect } from 'react';

const SignUp = () => {
  const [people, setPeople] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(true); 

  
  useEffect(() => {
    fetch('http://localhost:3000/names')
      .then(response => response.json())
      .then(data => {
        setPeople(data);
        setLoading(false); 
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newPerson = { name, email };

    fetch('http://localhost:3000/names', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPerson),
    })
    .then(response => response.json())
    .then(data => {
      setPeople([...people, data]); 
      setName(''); 
      setEmail('');
    })
    .catch(error => {
      console.error('Error posting data:', error);
    });
  };

  return (
    <div>
      <h1>Signup</h1>
      <p>Put your name on the waitlist to be contacted!</p>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Name:</label>
              <input 
                type='text' 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required 
              />
            </div>
            <div>
              <label>Email:</label>
              <input 
                type='email' 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
            </div>
            <button type='submit'>Add Name</button>
          </form>

          <h2>Waitlist</h2>
          <ul>
            {people.map((person) => (
              <li key={person.id}>
                {person.name} ({person.email})
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default SignUp;
