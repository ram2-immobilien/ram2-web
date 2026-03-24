import Image from "next/image";
import "./PropertyCard.css";

type Property = {
  id: number;
  title: string;
  price: number;
  description: string;
  location: string;
  size: number;
  bedrooms: number;
  bathrooms: number;
  image: string;
};

type Props = {
  property: Property;
};

export default function PropertyCard({ property }: Props) {
  return (
    <div className="property-card">
      {/* IMAGEN */}
      <div className="property-image">
        <Image src={property.image} alt={property.title} fill className="img" />

        <div className="overlay"></div>

        <span className="status">Se vende</span>

        <div className="price">{property.price.toLocaleString()} €</div>
      </div>

      {/* INFO */}
      <div className="property-info">
        <h2>{property.title}</h2>

        <p className="description">ubicacion {property.description}</p>

        <div className="property-details"> {property.location}</div>

        <div className="property-details">
          <span>{property.size} m²</span>
          <span>{property.bedrooms} baños</span>
          <span>{property.bathrooms} habitaciones</span>
        </div>
      </div>
    </div>
  );
}
