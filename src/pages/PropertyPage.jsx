import { useParams } from "react-router-dom";
import propertiesData from "../data/properties(1).json";
import PropertyImageGallery from "../components/ImageGallery";
import PropertyTabs from "../components/PropertyTabs";
import "../styles/property.css";

export default function PropertyPage() {
  const { id } = useParams();
  const property = propertiesData.properties.find(p => p.id === id);

  return (
    <div className="property-page">
      <h1>£{property.price.toLocaleString()}</h1>
      <PropertyImageGallery images={property.picture} />
      <PropertyTabs property={property} />
    </div>
  );
}
