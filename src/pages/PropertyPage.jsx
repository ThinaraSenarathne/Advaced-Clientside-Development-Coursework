import { useParams } from 'react-router-dom'
import data from '../data/properties(1).json'
import { useState } from 'react'
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs'
import 'react-tabs/style/react-tabs.css'

function PropertyPage({ favourites, setFavourites }) {
  const { id } = useParams()
  const property = data.properties.find(p => p.id === id)
  const [mainImage, setMainImage] = useState(property.picture[0])
  const isFavourite = favourites.some(fav => fav.id === property.id)

  const addToFavourites = () => {
    if (!isFavourite) {
      setFavourites([...favourites, property])
    }
  }

  if (!property) {
    return <p>Property not found</p>
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>{property.type}</h1>
      <p>£{property.price.toLocaleString()}</p>
      <p>{property.bedrooms} bedrooms</p>
      
      <button
        onClick={addToFavourites}
        disabled={isFavourite}
        style={{
          padding: '10px 10px',
          marginBottom: '20px',
          backgroundColor: isFavourite ? '#ccc' : '007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: isFavourite ? 'not-allowed' : 'pointed'
        }}
      >
        {isFavourite ? 'Added to favourites' : 'Add to Favourites'}
      </button>

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

      <Tabs style={{ marginTop: '30px' }}>
        <TabList>
          <Tab>Description</Tab>
          <Tab>Floor Plan</Tab>
          <Tab>Map</Tab>
        </TabList>

        <TabPanel>
          <p>{property.description}</p>
        </TabPanel>

        <TabPanel>
          <img
            src={`/${property.picture[0]}`}
            alt="Floor plan"
            style={{ width: '100%', maxWidth: '600px' }}
          />
        </TabPanel>

        <TabPanel>
          <iframe
            title="Google Map"
            width="100%"
            height="300"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src={`https://www.google.com/maps?q=${encodeURIComponent(property.location)}&output=embed`}
          />
        </TabPanel>
      </Tabs>


    </div>
  )
}

export default PropertyPage

