import { useContext } from 'react';
import { NoteContext, Note } from '../context/NoteContext';

const useNotes = () => {
  const { notes, addNote, deleteNote, updateNote } = useContext(NoteContext)!;

  return {
    notes,
    addNote,
    deleteNote,
    updateNote,
  };
};

export default useNotes;