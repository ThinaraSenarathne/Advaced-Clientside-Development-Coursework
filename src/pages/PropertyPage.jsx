import { useParams } from "react-router-dom"
import data from "../data/properties(1).json"
import { useState } from "react"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import "react-tabs/style/react-tabs.css"
import FavouriteList from "../components/FavouriteList"

export default function PropertyPage({ favourites, setFavourites }) {
  const { id } = useParams()
  const property = data.properties.find(p => p.id === id)
  const [mainImg, setMainImg] = useState(property.picture[0])

  const addFavourite = () => {
    if (!favourites.find(f => f.id === property.id)) {
      setFavourites([...favourites, property])
    }
  }

  return (
    <main className="property-container">
      
      {/* LEFT MAIN CONTENT */}
      <section className="property-main">

        {/* IMAGE GALLERY */}
        <div className="gallery">
          <img
            className="main-img"
            src={`/${mainImg}`}
            alt="Property"
          />

          <div className="thumbs">
            {property.picture.map(img => (
              <img
                key={img}
                src={`/${img}`}
                alt=""
                onClick={() => setMainImg(img)}
              />
            ))}
          </div>
        </div>

        {/* PROPERTY INFO */}
        <div className="property-info">
          <h2>£{property.price.toLocaleString()}</h2>
          <p className="location">{property.location}</p>

          <ul className="features">
            <li><strong>Type:</strong> {property.type}</li>
            <li><strong>Bedrooms:</strong> {property.bedrooms}</li>
            <li><strong>Tenure:</strong> {property.tenure}</li>
            <li><strong>Postcode:</strong> {property.postcode}</li>
          </ul>

          <button className="fav-btn" onClick={addFavourite}>
            ❤️ Add to favourites
          </button>
        </div>

        {/* TABS */}
        <Tabs>
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
              className="floorplan"
              src={`/${property.floorPlan}`}
              alt="Floor Plan"
            />
          </TabPanel>

          <TabPanel>
            <iframe
              title="map"
              src={`https://maps.google.com/maps?q=${property.postcode}&output=embed`}
            />
          </TabPanel>
        </Tabs>

      </section>

      {/* RIGHT SIDEBAR */}
      <aside className="property-sidebar">
        <FavouriteList
          favourites={favourites}
          setFavourites={setFavourites}
        />
      </aside>

    </main>
  )
}
