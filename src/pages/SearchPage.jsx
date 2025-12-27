import { useState } from "react";
import propertiesData from "../data/properties.json";
import SearchForm from "../components/SearchForm";
import PropertyList from "../components/PropertyList";
import Favourites from "../components/Favourites";
import "../styles/search.css";

export default function SearchPage() {
  const [filters, setFilters] = useState({});
  const [favourites, setFavourites] = useState([]);

  const filteredProperties = propertiesData.properties.filter(p => {
    if (filters.type && filters.type !== "any" && p.type !== filters.type) return false;
    if (filters.minPrice && p.price < filters.minPrice) return false;
    if (filters.maxPrice && p.price > filters.maxPrice) return false;
    if (filters.minBeds && p.bedrooms < filters.minBeds) return false;
    if (filters.maxBeds && p.bedrooms > filters.maxBeds) return false;
    if (filters.postcode && !p.postcode.startsWith(filters.postcode)) return false;

    if (filters.dateFrom) {
      const d = new Date(`${p.added.month} ${p.added.day}, ${p.added.year}`);
      if (d < filters.dateFrom) return false;
    }

    return true;
  });

  return (
    <div className="layout">
      <SearchForm onSearch={setFilters} />
      <PropertyList
        properties={filteredProperties}
        favourites={favourites}
        setFavourites={setFavourites}
      />
      <Favourites
        favourites={favourites}
        setFavourites={setFavourites}
      />
    </div>
  );
}
