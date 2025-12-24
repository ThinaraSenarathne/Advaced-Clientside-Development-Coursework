import { useParams } from 'react-router-dom'
import data from '../data/properties(1).json'
import { useState } from 'react'

function PropertyPage() {
  const { id } = useParams()
  const property = data.properties.find(p => p.id === id)
  const [mainImage, setMainImage] = useState(property.picture[0])


  if (!property) {
    return <p>Property not found</p>
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>{property.type}</h1>
      <p>£{property.price.toLocaleString()}</p>
      <p>{property.bedrooms} bedrooms</p>
      <p>{property.description}</p>

      <img
        src={`/${mainImage}`}
        alt={property.type}
        style={{
          width: '100%',
          maxHeight: '400px',
          objectFit: 'cover',
          borderRadius: '8px'
        }}
      />

      <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
        {property.picture.map((img, index) => (
          <img
            key={index}
            src={`/${img}`}
            alt="Thumbnail"
            onClick={() => setMainImage(img)}
            style={{
              width: '80px',
              height: '60px',
              objectFit: 'cover',
              cursor: 'pointer',
              border: mainImage === img ? '2px solid blue' : '1px solid #ccc'
            }}
          />
        ))}
      </div>

    </div>
  )
}

export default PropertyPage

