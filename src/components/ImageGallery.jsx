import Gallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function ImageGallery({ images }) {
  const galleryImages = images.map(img => ({
    original: img,
    thumbnail: img
  }));

  return <Gallery items={galleryImages} />;
}
