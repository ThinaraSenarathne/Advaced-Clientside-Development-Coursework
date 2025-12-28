import { useParams } from "react-router-dom"
import data from "../data/properties(1).json"
import { useState } from "react"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import "react-tabs/style/react-tabs.css"

export default function PropertyPage({ favourites, setFavourites }) {
  const { id } = useParams()
  const property = data.properties.find(p => p.id === id)
  const [mainImg, setMainImg] = useState(property.picture[0])

  return (
    <div className="property-page">
      <img className="main-img" src={`/${mainImg}`} alt="" />

      <div className="thumbs">
        {property.picture.map(img => (
          <img key={img} src={`/${img}`} onClick={() => setMainImg(img)} />
        ))}
      </div>

      <button
        onClick={() =>
          !favourites.find(f => f.id === property.id) &&
          setFavourites([...favourites, property])
        }
      >
        ❤️ Add to favourites
      </button>

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
          <img src={`/${property.floorPlan}`} alt="Floor Plan" />
        </TabPanel>

        <TabPanel>
          <iframe
            title="map"
            src={`https://maps.google.com/maps?q=${property.postcode}&output=embed`}
          />
        </TabPanel>
      </Tabs>
      
    </div>
  )
}
