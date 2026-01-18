import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getComments } from '../services/api';
import CommentList from './CommentList'; // <-- Aquí está la reutilización

export default function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comentarios, setComentarios] = useState([]);

  useEffect(() => {
    // 1. Traer datos del post
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => setPost(data));

    // 2. Traer comentarios usando tu servicio api.js
    getComments(id).then(data => setComentarios(data));
  }, [id]);

  if (!post) return <p>Cargando...</p>;

  return (
    <div className="post-detail">
      <Link to="/">← Volver</Link>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <hr />
      
      {/* REUTILIZACIÓN: Pasamos los datos por props */}
      <CommentList comentarios={comentarios} />
    </div>
  );
}