import { Link } from "react-router-dom";

export default function PropertyCard({ property, favourites, setFavourites }) {
  const isFav = favourites.find(f => f.id === property.id);

  function addFavourite() {
    if (!isFav) setFavourites([...favourites, property]);
  }

  return (
    <div className="card">
      <img src={property.picture[0]} alt="" />
      <h3>£{property.price.toLocaleString()}</h3>
      <p>{property.shortDescription}</p>
      <Link to={`/property/${property.id}`}>View Details</Link>
      <button onClick={addFavourite}>❤️</button>
    </div>
  );
}
