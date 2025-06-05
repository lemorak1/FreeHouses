import { useState } from 'react'
import PropertyList from './PropertyList'
import PropertyForm from './PropertyForm'
import './Layout.css'

function Layout() {
  const [properties, setProperties] = useState([])
  const [showForm, setShowForm] = useState(false)

  const addProperty = (data) => {
    const newProperty = { ...data, id: Date.now() }
    setProperties((prev) => [...prev, newProperty])
    setShowForm(false)
  }

  return (
    <div className="layout">
      <header>
        <h1>FreeHouses</h1>
        <button onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Close' : 'Add Property'}
        </button>
      </header>
      {showForm && <PropertyForm onSubmit={addProperty} />}
      <main>
        {properties.length === 0 ? (
          <p>No properties yet.</p>
        ) : (
          <PropertyList properties={properties} />
        )}
      </main>
    </div>
  )
}

export default Layout
