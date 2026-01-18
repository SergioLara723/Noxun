import React from 'react';

export default function CommentList({ comentarios }) {
  if (comentarios.length === 0) return <p>No hay comentarios aún.</p>;

  return (
    <div className="comment-section">
      <h3>Comentarios ({comentarios.length})</h3>
      {comentarios.map(c => (
        <div key={c.id} className="comment-item" style={{ borderBottom: '1px solid #eee', padding: '10px 0' }}>
          <strong>{c.email}</strong>
          <p>{c.body}</p>
        </div>
      ))}
    </div>
  );
}