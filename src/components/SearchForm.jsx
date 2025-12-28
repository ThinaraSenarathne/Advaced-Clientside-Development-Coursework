import { useState } from "react"

export default function SearchForm({ properties, setResults }) {
  const [filters, setFilters] = useState({
    type: "Any",
    minPrice: "",
    maxPrice: "",
    minBed: "",
    maxBed: "",
    postcode: "",
    dateFrom: "",
    dateTo: ""
  })

  const handleSearch = () => {
    const filtered = properties.filter(p => {
      if (filters.type !== "Any" && p.type !== filters.type) return false
      if (filters.minPrice && p.price < filters.minPrice) return false
      if (filters.maxPrice && p.price > filters.maxPrice) return false
      if (filters.minBed && p.bedrooms < filters.minBed) return false
      if (filters.maxBed && p.bedrooms > filters.maxBed) return false
      if (filters.postcode && !p.postcode.startsWith(filters.postcode.toUpperCase())) return false

      const propDate = new Date(`${p.added.month} ${p.added.day}, ${p.added.year}`)
      if (filters.dateFrom && propDate < new Date(filters.dateFrom)) return false
      if (filters.dateTo && propDate > new Date(filters.dateTo)) return false

      return true
    })

    setResults(filtered)
  }

  return (
    <section className="search-form">
      <h2>Search Properties</h2>

      <select onChange={e => setFilters({ ...filters, type: e.target.value })}>
        <option>Any</option>
        <option>House</option>
        <option>Flat</option>
      </select>

      <input placeholder="Min Price" type="number" onChange={e => setFilters({ ...filters, minPrice: e.target.value })} />
      <input placeholder="Max Price" type="number" onChange={e => setFilters({ ...filters, maxPrice: e.target.value })} />

      <input placeholder="Min Bedrooms" type="number" onChange={e => setFilters({ ...filters, minBed: e.target.value })} />
      <input placeholder="Max Bedrooms" type="number" onChange={e => setFilters({ ...filters, maxBed: e.target.value })} />

      <input placeholder="Postcode Area (e.g. BR1)" onChange={e => setFilters({ ...filters, postcode: e.target.value })} />

      <label>From Date</label>
      <input type="date" onChange={e => setFilters({ ...filters, dateFrom: e.target.value })} />

      <label>To Date</label>
      <input type="date" onChange={e => setFilters({ ...filters, dateTo: e.target.value })} />

      <button onClick={handleSearch}>Search</button>
    </section>
  )
}
