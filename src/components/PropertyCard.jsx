import { Link } from "react-router-dom"

export default function PropertyCard({ property, favourites, setFavourites }) {

  const handleDragStart = (e) => {
    e.dataTransfer.setData("propertyId",property.id)
  } 

  const addFavourite = () => {
    if (!favourites.find(f => f.id === property.id)) {
      setFavourites([...favourites, property])
    }
  }

  const isFavourite = favourites.some(f => f.id === property.id)

  return (
    <div 
        className="card"
        draggable
        onDragStart={handleDragStart}
    >
      <img src={`/${property.picture[0]}`} alt="" />
      <h3>£{property.price.toLocaleString()}</h3>
      <p>{property.shortDescription}</p>

      <Link to={`/property/${property.id}`}>View Details</Link>
      
      <button 
        className={isFavourite ? "added" : "not-added"}
        onClick={addFavourite}
        disabled={isFavourite}
       > 
        {isFavourite ? "✔ Added to favourites" : "❤️ Add to favourites"}

      </button>
    </div>
  )
}
