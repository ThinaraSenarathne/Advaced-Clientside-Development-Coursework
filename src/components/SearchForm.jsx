import { useState } from "react"
import Select from "react-select"
import DatePicker from "react-datepicker"
import Slider from "rc-slider"
import "react-datepicker/dist/react-datepicker.css"
import "rc-slider/assets/index.css"

export default function SearchForm({ properties, setResults }) {

  const [type, setType] = useState(null)
  const [price, setPrice] = useState([0, 1500000])
  const [beds, setBeds] = useState([0, 6])
  const [postcode, setPostcode] = useState("")
  const [dateFrom, setDateFrom] = useState(null)
  const [dateTo, setDateTo] = useState(null)

  const typeOptions = [
    { value: "House", label: "House" },
    { value: "Flat", label: "Flat" }
  ]

  const handleSearch = () => {
    const filtered = properties.filter(p => {

      if (type && p.type !== type.value) return false
      if (p.price < price[0] || p.price > price[1]) return false
      if (p.bedrooms < beds[0] || p.bedrooms > beds[1]) return false
      if (postcode && !p.postcode.startsWith(postcode.toUpperCase())) return false

      const propDate = new Date(`${p.added.month} ${p.added.day}, ${p.added.year}`)
      if (dateFrom && propDate < dateFrom) return false
      if (dateTo && propDate > dateTo) return false

      return true
    })

    setResults(filtered)
  }

  return (
    <section className="search-form">
      <h2>Search Properties</h2>

      {/* PROPERTY TYPE */}
      <label>Property Type</label>
      <Select
        options={typeOptions}
        isClearable
        placeholder="Any"
        onChange={setType}
      />

      {/* PRICE RANGE */}
      <label>Price Range (£)</label>
      <Slider
        range
        min={0}
        max={1500000}
        step={50000}
        value={price}
        onChange={setPrice}
      />
      <p>£{price[0].toLocaleString()} – £{price[1].toLocaleString()}</p>

      {/* BEDROOM RANGE */}
      <label>Bedrooms</label>
      <Slider
        range
        min={0}
        max={6}
        value={beds}
        onChange={setBeds}
      />
      <p>{beds[0]} – {beds[1]} bedrooms</p>

      {/* POSTCODE */}
      <label>Postcode Area</label>
      <input
        placeholder="e.g. BR1"
        value={postcode}
        onChange={e => setPostcode(e.target.value)}
      />

      {/* DATE FROM */}
      <label>Date Added From</label>
      <DatePicker
        selected={dateFrom}
        onChange={setDateFrom}
        dateFormat="dd/MM/yyyy"
        placeholderText="Select start date"
      />

      {/* DATE TO */}
      <label>Date Added To</label>
      <DatePicker
        selected={dateTo}
        onChange={setDateTo}
        dateFormat="dd/MM/yyyy"
        placeholderText="Select end date"
      />

      <button onClick={handleSearch}>Search</button>
    </section>
  )
}
