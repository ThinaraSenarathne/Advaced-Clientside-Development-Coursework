import PropertyCard from "./PropertyCard";

export default function PropertyList({ properties, favourites, setFavourites }) {
  return (
    <div className="results">
      {properties.map(p => (
        <PropertyCard
          key={p.id}
          property={p}
          favourites={favourites}
          setFavourites={setFavourites}
        />
      ))}
    </div>
  );
}
