import React, { useState, useContext } from 'react';
import { NoteContext, Note } from '../context/NoteContext';

const EditNoteModal: React.FC<{ note: Note; onClose: () => void }> = ({ note, onClose }) => {
  const { updateNote } = useContext(NoteContext)!;
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateNote(note.id, title, content);
    onClose();
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
        />
        <textarea 
          value={content} 
          onChange={(e) => setContent(e.target.value)} 
        />
        <button type="submit">Save</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default EditNoteModal;
