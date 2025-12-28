import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function PropertyImageGallery({ images }) {
  const galleryImages = images.map(pic => ({
    original: `/${pic.replace("public/", "")}`,
    thumbnail: `/${pic.replace("public/", "")}`
  }));

  return <ImageGallery items={galleryImages} />;
}
