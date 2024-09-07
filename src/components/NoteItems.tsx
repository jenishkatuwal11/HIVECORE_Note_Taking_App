import React, { useState, useContext } from 'react';
import { NoteContext, Note } from '../context/NoteContext';
import EditNoteModal from '../components/EditNoteModel';

const NoteItem: React.FC<{ note: Note }> = ({ note }) => {
  const { deleteNote } = useContext(NoteContext)!;
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <h3>{note.title}</h3>
      <p>{note.content}</p>
      <button onClick={() => setIsEditing(true)}>Edit</button>
      <button onClick={() => deleteNote(note.id)}>Delete</button>
      {isEditing && <EditNoteModal note={note} onClose={() => setIsEditing(false)} />}
    </div>
  );
};

export default NoteItem;