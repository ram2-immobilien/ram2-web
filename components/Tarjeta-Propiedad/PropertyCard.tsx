import Image from "next/image";
import "./PropertyCard.css";

type Props = {
  title: string;
  price: number;
  description: string;
  location: string;
  size: number;
  bedrooms: number;
  bathrooms: number;
  image: any;
};

export default function PropertyCard({
  title,
  price,
  description,
  location,
  size,
  bedrooms,
  bathrooms,
  image,
}: Props) {
  return (
    <div className="property-card">
      {/* IMAGEN */}
      <div className="property-image">
        <Image src={image} alt={title} fill className="img" />

        <div className="overlay"></div>

        <span className="status">Se vende</span>

        <div className="price">{price.toLocaleString()} €</div>
      </div>

      {/* INFO */}
      <div className="property-info">
        <h2>{title}</h2>

        <p className="description">{description}</p>

        <div className="property-details">📍 {location}</div>

        <div className="property-details">
          <span>{size} m²</span>
          <span>🛏 {bedrooms}</span>
          <span>🛁 {bathrooms}</span>
        </div>
      </div>
    </div>
  );
}
