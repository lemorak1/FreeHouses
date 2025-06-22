import { useParams, useNavigate } from 'react-router-dom'

function PropertyDetail({ properties }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const property = properties.find((p) => p.id === Number(id))

  if (!property) {
    return (
      <div>
        <p>Propiedad no encontrada.</p>
        <button onClick={() => navigate('/')}>Volver</button>
      </div>
    )
  }

  return (
    <div>
      <button onClick={() => navigate('/')}>Volver</button>
      <h2>{property.title}</h2>
      <p>{property.location}</p>
      <p>Precio: ${property.price}</p>
      <img src={property.image} alt={property.title} style={{ width: '100%' }} />
    </div>
  )
}

export default PropertyDetail
