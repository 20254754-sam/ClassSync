import React from 'react';
import UploadForm from '../components/UploadForm';

const UploadPage = ({ notes, setNotes }) => {
  const handleSubmit = (newNote) => {
    setNotes(prevNotes => [...prevNotes, newNote]);
  };

  return (
    <div className="upload-page-wrapper">
      <div className="page">
        <h1>📝 Upload New Note</h1>
        
        {/* PERFECT CENTERED SUBTITLE */}
        <div className="upload-subtitle fade-in">
          <p>Share your class notes with other students</p>
        </div>
        
        <UploadForm notes={notes} onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default UploadPage;