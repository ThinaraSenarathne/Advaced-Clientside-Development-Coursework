import propertiesData from "../data/properties(1).json"

export default function FavouriteList({ favourites, setFavourites }) {

  const allowDrop = (e) => {
    e.preventDefault()
  }

  const handleDrop = (e) => {
    e.preventDefault()

    const propertyId = e.dataTransfer.getData("propertyId")
    const property = propertiesData.properties.find(p => p.id === propertyId)

    if (!property) return

    if (!favourites.find(f => f.id === property.id)) {
      setFavourites([...favourites, property])
    }
  }

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData("removeId", id)
  }

  const handleRemoveDrop = (e) => {
    e.preventDefault()
    const id = e.dataTransfer.getData("removeId")
    setFavourites(favourites.filter(f => f.id !== id))
  }

  return (
    <aside
      className="favourites"
      onDragOver={allowDrop}
      onDrop={handleDrop}
    >
      <h3>Favourites</h3>

      {favourites.map(f => (
        <div
          key={f.id}
          draggable
          onDragStart={(e) => handleDragStart(e, f.id)}
          className="fav-item"
        >
          {f.shortDescription}
          <button onClick={() => setFavourites(favourites.filter(x => x.id !== f.id))}>
            ❌
          </button>
        </div>
      ))}

      {favourites.length > 0 && (
        <button onClick={() => setFavourites([])}>Clear All</button>
      )}

      <div
        className="remove-zone"
        onDragOver={allowDrop}
        onDrop={handleRemoveDrop}
      >
        🗑 Drag here to remove
      </div>
    </aside>
  )
}
