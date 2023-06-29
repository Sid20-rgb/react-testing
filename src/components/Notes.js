import React from 'react'

export default function Notes() {
    const [notes, setNotes] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then((res) => res.json())
        .then((data) => setNotes(data))
    })
  return (
    <div>
      <h1>List of Notes</h1>
      <ul>
        {
            notes.map((note) => (
                <li key={note.id}>{note.title}</li>
            ))
        }
      </ul>
    </div>
  )
}
