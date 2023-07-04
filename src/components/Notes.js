import React, { useState, useEffect } from 'react';

export default function Notes() {
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.json())
      .then((data) => setNotes(data))
      .catch((err) => setError('Error fetching data'));
  }, []);

  return (
    <div>
      <h1>List of Notes</h1>
      {error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {notes.map((note) => (
            <li key={note.id}>{note.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
