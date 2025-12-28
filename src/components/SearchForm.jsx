import { useState } from "react";
import { Dropdown, DatePicker } from "react-widgets";
import "react-widgets/styles.css";

export default function SearchForm({ onSearch }) {
  const [type, setType] = useState("any");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minBeds, setMinBeds] = useState("");
  const [maxBeds, setMaxBeds] = useState("");
  const [postcode, setPostcode] = useState("");
  const [dateFrom, setDateFrom] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    onSearch({ type, minPrice, maxPrice, minBeds, maxBeds, postcode, dateFrom });
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <h2>Search Properties</h2>

      <Dropdown data={["Any", "House", "Flat"]} value={type} onChange={setType} />
      <input type="number" placeholder="Min Price" onChange={e => setMinPrice(e.target.value)} />
      <input type="number" placeholder="Max Price" onChange={e => setMaxPrice(e.target.value)} />
      <input type="number" placeholder="Min Bedrooms" onChange={e => setMinBeds(e.target.value)} />
      <input type="number" placeholder="Max Bedrooms" onChange={e => setMaxBeds(e.target.value)} />
      <input type="text" placeholder="Postcode (e.g. BR1)" onChange={e => setPostcode(e.target.value)} />
      <DatePicker placeholder="Date Added After" value={dateFrom} onChange={setDateFrom} />

      <button type="submit">Search</button>
    </form>
  );
}
