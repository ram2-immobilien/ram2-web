import Image from "next/image";
import "./PropertyCard.css";
import { MapPin, Bed, Bath, Car, Leaf, Move } from "lucide-react";

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

        <p className="description">{property.description}</p>

        <div className="property-details">
          <MapPin size={20} /> {property.location}
        </div>

        <div className="property-details">
          <span>
            <Move size={20} /> {property.size} m²
          </span>
          <span className="divider">|</span>
          <span>
            <Bed size={20} />
            {property.bedrooms}{" "}
          </span>
          <span>
            <Bath size={20} />
            {property.bathrooms}{" "}
          </span>
          <span className="divider">|</span>
          <span>
            <Car size={20} />
          </span>
          <span>
            <Leaf size={20} />
          </span>
        </div>
      </div>
    </div>
  );
}
