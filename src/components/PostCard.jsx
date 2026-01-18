import React from 'react';
import { Link } from 'react-router-dom';

export default function PostCard({ post }) {
  return (
    <div className="post-card">
      <small>Publicación #{post.id}</small>
      <h4>{post.title}</h4>
      
      {/* Mostramos solo un resumen del texto */}
      <p>{post.body.substring(0, 80)}...</p>
      
      {/* Este Link redirige a la sub-ruta de detalles */}
      <Link to={`/post/${post.id}`} className="btn-detalle">
        Ver detalles y comentarios
      </Link>
    </div>
  );
}