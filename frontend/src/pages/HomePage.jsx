import { useState } from 'react'
import PropertyList from '../components/PropertyList'
import PropertyForm from '../components/PropertyForm'
import SearchBar from '../components/SearchBar'

function HomePage({ properties, addProperty }) {
  const [showForm, setShowForm] = useState(false)
  const [query, setQuery] = useState('')

  const filtered = properties.filter(
    (p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.location.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div>
      <button onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Cerrar' : 'Agregar propiedad'}
      </button>
      {showForm && <PropertyForm onSubmit={addProperty} />}
      <SearchBar value={query} onChange={setQuery} />
      {filtered.length === 0 ? (
        <p>No hay propiedades.</p>
      ) : (
        <PropertyList properties={filtered} />
      )}
    </div>
  )
}

export default HomePage
