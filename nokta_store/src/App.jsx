import React, { useState } from 'react'
import productos from './data'

function App() {
  const [busqueda, setBusqueda] = useState('')
  const [filtro, setFiltro] = useState('')

  const filtrados = productos.filter((p) => {
    return (
      p.nombre.toLowerCase().includes(busqueda.toLowerCase()) &&
      (filtro === '' || p.tipo === filtro)
    )
  })

  return (
    <div style={{ background: '#0f0f0f', color: '#fff', minHeight: '100vh', padding: '2rem' }}>
      <h1 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '1rem' }}>Nokta Store</h1>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}>
        <input
          placeholder="Buscar cuenta..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
        <select value={filtro} onChange={(e) => setFiltro(e.target.value)}>
          <option value="">Todos</option>
          <option value="NFA">NFA</option>
          <option value="SFA">SFA</option>
          <option value="Cape">Cape</option>
        </select>
      </div>

      <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))' }}>
        {filtrados.map(p => (
          <div key={p.id} style={{ background: '#1a1a1a', padding: '1rem', borderRadius: '10px' }}>
            <h3>{p.nombre}</h3>
            <p>Tipo: {p.tipo}</p>
            <p><strong>€{p.precio}</strong></p>
            <button onClick={() => alert(`Contáctame para comprar esta cuenta (ID ${p.id})`)}>Comprar</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App