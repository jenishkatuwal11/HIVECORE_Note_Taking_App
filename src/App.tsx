import React from 'react';
import { NoteProvider } from './context/NoteContext';
import AddNote from './components/AddNote';
import NoteList from './components/NoteList';

const App: React.FC = () => {
  return (
    <NoteProvider>
      <div className="app">
        <h1>Note Taking App</h1>
        <AddNote />
        <NoteList />
      </div>
    </NoteProvider>
  );
};

export default App;
