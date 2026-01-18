import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { getPosts } from './services/api';

// Importación de componentes
import SearchBar from './components/SearchBar';
import PostCard from './components/PostCard';
import PostDetail from './components/PostDetail';

// 1. Componente para la Vista de Lista
const PostList = ({ posts, busqueda, setBusqueda, usuarioId, setUsuarioId, pagina, setPagina }) => {
  const postsPorPagina = 6;

  // Filtrado
  const filtrados = posts.filter(post => {
    const coincideTexto = post.title.toLowerCase().includes(busqueda.toLowerCase()) || 
                          post.body.toLowerCase().includes(busqueda.toLowerCase());
    const coincideUsuario = usuarioId === '' || post.userId === parseInt(usuarioId);
    return coincideTexto && coincideUsuario;
  });

  // Paginación
  const totalPaginas = Math.ceil(filtrados.length / postsPorPagina);
  const inicio = (pagina - 1) * postsPorPagina;
  const visibles = filtrados.slice(inicio, inicio + postsPorPagina);

  return (
    <>
      <SearchBar 
        setBusqueda={setBusqueda} 
        setUsuarioId={setUsuarioId} 
        setPagina={setPagina} 
      />
      <div className="posts-grid">
        {visibles.map(post => <PostCard key={post.id} post={post} />)}
      </div>
      <div className="pagination-controls">
        <button disabled={pagina === 1} onClick={() => setPagina(pagina - 1)}>Anterior</button>
        <span>Página {pagina} de {totalPaginas || 1}</span>
        <button disabled={pagina >= totalPaginas} onClick={() => setPagina(pagina + 1)}>Siguiente</button>
      </div>
    </>
  );
};

// 2. Componente Principal App con Rutas
function App() {
  const [posts, setPosts] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [usuarioId, setUsuarioId] = useState('');
  const [pagina, setPagina] = useState(1);

  useEffect(() => {
    getPosts().then(data => setPosts(data));
  }, []);

  return (
    <BrowserRouter>
      <div className="container">
        <h1>Blog de Noticias</h1>
        <Routes>
          {/* Ruta para la lista principal */}
          <Route path="/" element={
            <PostList 
              posts={posts} 
              busqueda={busqueda} setBusqueda={setBusqueda}
              usuarioId={usuarioId} setUsuarioId={setUsuarioId}
              pagina={pagina} setPagina={setPagina}
            />
          } />
          
          {/* Ruta para el detalle del post */}
          <Route path="/post/:id" element={<PostDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;