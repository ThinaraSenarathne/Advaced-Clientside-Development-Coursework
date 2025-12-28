import { Link } from "react-router-dom"

export default function PropertyCard({ property, favourites, setFavourites }) {
  const addFavourite = () => {
    if (!favourites.find(f => f.id === property.id)) {
      setFavourites([...favourites, property])
    }
  }

  return (
    <div className="card">
      <img src={`/${property.picture[0]}`} alt="" />
      <h3>£{property.price.toLocaleString()}</h3>
      <p>{property.shortDescription}</p>
      <Link to={`/property/${property.id}`}>View Details</Link>
      <button onClick={addFavourite}>❤️ Favourite</button>
    </div>
  )
}
