import propertiesData from "../data/properties(1).json"
import { useState } from "react"
import SearchForm from "../components/SearchForm"
import PropertyList from "../components/PropertyList"
import FavouriteList from "../components/FavouriteList"

export default function SearchPage({ favourites, setFavourites }) {
  const [results, setResults] = useState(propertiesData.properties)

  return (
    <main className="container">
      <SearchForm properties={propertiesData.properties} setResults={setResults} />
      <div className="content">
        <PropertyList
          properties={results}
          favourites={favourites}
          setFavourites={setFavourites}
        />
        <FavouriteList favourites={favourites} setFavourites={setFavourites} />
      </div>
    </main>
  )
}
