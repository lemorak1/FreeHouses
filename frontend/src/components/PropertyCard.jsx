import './PropertyCard.css'

function PropertyCard({ property }) {
  return (
    <div className="property-card">
      <img src={property.image} alt={property.title} className="property-image" />
      <div className="property-info">
        <h3>{property.title}</h3>
        <p>{property.location}</p>
        <p className="price">${property.price}</p>
      </div>
    </div>
  )
}

export default PropertyCard
