import {Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import data from '../data/properties(1).json'

function SearchPage() {
  return (
    <div style = {{padding: '20px'}}>
      <h1>Property Search</h1>
      
      <Tabs>
        <TabList>
            <Tab>Search Filters</Tab>
            <Tab>Favourittes</Tab>
        </TabList>

        <TabPanel>
            <form>
                <div>
                    <label>Property Type</label>
                    <select>
                        <option value = "">Any</option>
                        <option value = "House">House</option>
                        <option value = "Flat">Flat</option>
                    </select>
                </div>

                <div>
                    <label>Min Price</label>
                    <input type = "number" placeholder = "Min price"/>
                </div>

                <div>
                    <label>Min Price</label>
                    <input type = "number" placeholder = "Max price"/>
                </div>

                <div>
                    <label>Min Bedrooms</label>
                    <input type = "number"/>
                </div>

                <div>
                    <label>Max Bedrooms</label>
                    <input type = "number"/>
                </div>

                <div>
                    <label>Postcode Area</label>
                    <input type = "text" placeholder = "e.g. NW1"/>
                </div>

                <button type="button">Search</button>
            </form>
        </TabPanel>

        <TabPanel>
            <p>No favourites added yet.</p>
        </TabPanel>
      </Tabs>

      <p style = {{marginTop: '20px'}}>
        Total properties loaded: {data.properties.length}
      </p>
    </div>
  )
}

export default SearchPage
