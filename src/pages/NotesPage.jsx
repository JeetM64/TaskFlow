import { useEffect, useState } from 'react'

const NotesPage = () => {
  const [noteText, setNoteText] = useState('')
  const [notes, setNotes] = useState(() => {
    try {
      const saved = window.localStorage.getItem('flowSyncNotes')
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    window.localStorage.setItem('flowSyncNotes', JSON.stringify(notes))
  }, [notes])

  const handleAddNote = () => {
    if (!noteText.trim()) return

    setNotes((current) => [
      {
        id: Date.now(),
        text: noteText.trim(),
      },
      ...current,
    ])
    setNoteText('')
  }

  const handleDeleteNote = (id) => {
    setNotes((current) => current.filter((note) => note.id !== id))
  }

  return (
    <div className='page-section'>
      <div className='page-header'>
        <h1>Notes</h1>
        <p>Create, save, and manage your notes here.</p>
      </div>

      <div className='note-box'>
        <textarea
          className='note-input'
          rows='4'
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
          placeholder='Write a note...'
        />
        <button className='add-btn' onClick={handleAddNote}>
          Save note
        </button>
      </div>

      <div className='note-list'>
        {notes.length === 0 ? (
          <div className='empty-task'>No notes yet. Write one to get started.</div>
        ) : (
          notes.map((note) => (
            <div key={note.id} className='note-card'>
              <p>{note.text}</p>
              <button className='delete-btn' onClick={() => handleDeleteNote(note.id)}>
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default NotesPage;
