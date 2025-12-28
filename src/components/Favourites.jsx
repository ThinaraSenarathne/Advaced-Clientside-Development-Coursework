import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

export default function Favourites({ favourites, setFavourites }) {

  function handleDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(favourites);
    const [removed] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, removed);

    setFavourites(items);
  }

  function removeFavourite(id) {
    setFavourites(favourites.filter(f => f.id !== id));
  }

  function clearFavourites() {
    setFavourites([]);
  }

  return (
    <div className="favourites">
      <h3>Favourites</h3>

      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="favourites">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {favourites.map((fav, index) => (
                <Draggable key={fav.id} draggableId={fav.id} index={index}>
                  {(provided) => (
                    <div
                      className="fav-item"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <img src={`/${fav.picture[0].replace("public/", "")}`} alt="" />
                      <p>£{fav.price.toLocaleString()}</p>
                      <button onClick={() => removeFavourite(fav.id)}>❌</button>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <button className="clear-btn" onClick={clearFavourites}>
        Clear All
      </button>
    </div>
  );
}
