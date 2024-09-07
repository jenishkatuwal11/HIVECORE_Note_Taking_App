import React, { useContext } from 'react';
import { NoteContext } from '../context/NoteContext';
import NoteItem from '../components/NoteItems';

const NoteList: React.FC = () => {
  const { notes } = useContext(NoteContext)!;

  return (
    <div>
      {notes.length > 0 ? notes.map(note => <NoteItem key={note.id} note={note} />) : <p>No Notes</p>}
    </div>
  );
};

export default NoteList;
