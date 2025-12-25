import {useState} from 'react'
import {Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import data from '../data/properties(1).json'

function SearchPage({favourites}) {
  const[filters, setFilters] = useState({
    type: '',
    minPrice: '',
    maxPrice: '',
    minBedrooms: '',
    maxBedrooms: '',
    postcode: '',
  })

  const [results , setResults] = useState(data.properties)
  
  const handleChange = (e) => {
    const {name , value} = e.target
    setFilters({
        ...filters,
        [name]: value
    })
  }

  const handleSearch = () => {
    const filtered = data.properties.filter((property) => {

        if (filters.type && property.type !== filters.type) {
            return false
        }

        if (filters.minPrice && property.price < Number (filters.minPrice)) {
            return false
        }

        if (filters.maxPrice && property.price > Number (filters.maxPrice)) {
            return false
        }

        if (filters.minBedrooms && property.bedrooms < Number (filters.minBedrooms)) {
            return false
        }

        if (filters.maxBedrooms && property.bedrooms > Number (filters.maxBedrooms)) {
            return false
        }

        if (
            filters.postcode &&
            !property.postcode.toUpperCase().startsWith(filters.postcode.toUpperCase())
        ) {
            return false
        }

        return true
    })

    setResults(filtered)
  }

  return (
    <div style = {{padding: '20px'}}>
      <h1>Property Search</h1>
      
      <Tabs>
        <TabList>
            <Tab>Search Filters</Tab>
            <Tab>Favourites</Tab>
        </TabList>

        <TabPanel>
            <form>
                <div>
                    <label>Property Type</label>
                    <select name = "type" value = {filters.type} onChange = {handleChange}>
                        <option value = "">Any</option>
                        <option value = "House">House</option>
                        <option value = "Flat">Flat</option>
                    </select>
                </div>

                <div>
                    <label>Min Price</label>
                    <input type = "number" name = "minPrice" value = {filters.minPrice} onChange = {handleChange} placeholder = "Min price"/>
                </div>

                <div>
                    <label>Max Price</label>
                    <input type = "number" name = "maxPrice" value = {filters.maxPrice} onChange = {handleChange} placeholder = "Max price"/>
                </div>

                <div>
                    <label>Min Bedrooms</label>
                    <input type = "number" name = "minBedrooms" value = {filters.minBedrooms} onChange = {handleChange}/>
                </div>

                <div>
                    <label>Max Bedrooms</label>
                    <input type = "number" name = "maxBedrooms" value= {filters.maxBedrooms} onChange = {handleChange}/>
                </div>

                <div>
                    <label>Postcode Area</label>
                    <input type = "text" name = "postcode" value = {filters.postcode} onChange = {handleChange} placeholder = "e.g. NW1"/>
                </div>

                <button type="button" onClick = {handleSearch}> Search </button>
            </form>
        </TabPanel>

        <TabPanel>
            
        </TabPanel>
      </Tabs>

      <div style = {{marginTop : '30px'}}>
        <h2>Results</h2>

        {results.length === 0 && <p>No properties found.</p>}

        <div style = {{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: '20px'
        }}>
            {results.map((property) => (
                <div 
                    key = {property.id}
                    style = {{
                        border: '1px solid #ccc',
                        borderRadius: '8px',
                        padding: '10px'
                    }}
                >
                    <img
                        src = {property.picture[0]}
                        alt = {property.type}
                        style = {{
                            width: '100%',
                            height: '150px',
                            objectFit: 'cover'
                        }} 
                    />

                    <h3>{property.type}</h3>
                    <p>£{property.price.toLocaleString()}</p>
                    <p>{property.bedrooms} bedrooms</p>
                    <p>{property.postcode}</p>

                    <a href = {`/property/${property.id}`}>View details</a>
                </div>
            ))}
        </div>
      </div>

      <p style = {{marginTop: '20px'}}>
        Total properties loaded: {data.properties.length}
      </p>
    </div>
  )
}

export default SearchPage
