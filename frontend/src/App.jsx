import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import PropertyDetail from './pages/PropertyDetail'
import './App.css'

function App() {
  const [properties, setProperties] = useState([])

  const addProperty = (data) => {
    const newProperty = { ...data, id: Date.now() }
    setProperties((prev) => [...prev, newProperty])
  }

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={<HomePage properties={properties} addProperty={addProperty} />}
          />
          <Route
            path="/property/:id"
            element={<PropertyDetail properties={properties} />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
