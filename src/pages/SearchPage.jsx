import data from '../data/properties(1).json'

function SearchPage() {
  return (
    <div>
      <h1>Property Search</h1>
      <p>Total properties loaded: {data.properties.length}</p>
    </div>
  )
}

export default SearchPage
