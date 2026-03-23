import React from 'react';
import { Link } from 'react-router-dom';

const NoteCard = ({ note }) => {
  return (
    <Link to={`/note/${note.id}`} className="note-card">
      <h3>{note.title}</h3>
      <span className="subject">{note.subject}</span>
      <p className="preview">{note.content.substring(0, 80)}...</p>
      <div className="note-meta">
        <span className="author">👤 {note.author}</span>
        <span className="date">📅 {note.date}</span>
      </div>
    </Link>
  );
};

export default NoteCard;