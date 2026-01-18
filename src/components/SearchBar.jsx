import React from 'react';

export default function SearchBar({ setBusqueda, setUsuarioId, setPagina }) {
  
  // Función para manejar el cambio en el texto de búsqueda
  const onTextChange = (e) => {
    setBusqueda(e.target.value);
    setPagina(1); // Importante: volver a la página 1 al filtrar
  };

  // Función para manejar el cambio de usuario
  const onUserChange = (e) => {
    setUsuarioId(e.target.value);
    setPagina(1); // Importante: volver a la página 1 al filtrar
  };

  return (
    <div className="search-container">
      {/* Input de Texto */}
      <input 
        type="text" 
        placeholder="🔍 Buscar publicaciones..." 
        className="search-input"
        onChange={onTextChange} 
      />
      
      {/* Selector de Usuario */}
      <select className="user-select" onChange={onUserChange}>
        <option value="">👤 Todos los usuarios</option>
        {/* Generamos 10 opciones para los 10 usuarios de JSONPlaceholder */}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(id => (
          <option key={id} value={id}>
            Usuario {id}
          </option>
        ))}
      </select>
    </div>
  );
}