export default function FavouriteList({ favourites, setFavourites }) {
  return (
    <aside className="favourites">
      <h3>Favourites</h3>

      {favourites.map(f => (
        <div key={f.id}>
          {f.shortDescription}
          <button onClick={() => setFavourites(favourites.filter(x => x.id !== f.id))}>
            ❌
          </button>
        </div>
      ))}

      {favourites.length > 0 && (
        <button onClick={() => setFavourites([])}>Clear All</button>
      )}
    </aside>
  )
}
