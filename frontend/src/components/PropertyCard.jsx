import { Link } from 'react-router-dom'
import './PropertyCard.css'

function PropertyCard({ property }) {
  return (
    <Link to={`/property/${property.id}`} className="property-card">
      <img src={property.image} alt={property.title} className="property-image" />
      <div className="property-info">
        <h3>{property.title}</h3>
        <p>{property.location}</p>
        <p className="price">${property.price}</p>
      </div>
    </Link>
  )
}

export default PropertyCard
