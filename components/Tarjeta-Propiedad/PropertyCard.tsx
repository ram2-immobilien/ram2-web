import Image from "next/image";
import "./PropertyCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faBed, faBath, faCar, faSeedling, faArrowsUpDownLeftRight,} from "@fortawesome/free-solid-svg-icons";

type Property = {
  id: number;
  title: string;
  price: number;
  description: string;
  location: string;
  size: number;
  bedrooms: number;
  bathrooms: number;
  garage: number;
  garden: number;
  image: string;
};

type Props = {
  property: Property;
};

export default function PropertyCard({ property }: Props) {

  return (
    <div className="property-card">
      {/* IMAGEN */}
      <div className="property-image" >
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
          <FontAwesomeIcon icon={faLocationDot} /> {property.location}
        </div>

        <div className="property-details">
          <span>
            <FontAwesomeIcon icon={faArrowsUpDownLeftRight}/> {property .size} m²
          </span>
          <span className="divider">|</span>
          <span>
            <FontAwesomeIcon icon={faBed}/> {property.bedrooms > 0 ? property.bedrooms : ""}
          </span>
          <span>
            <FontAwesomeIcon icon={faBath} /> {property.bathrooms > 0 ? property.bathrooms : ""}
          </span>
          <span className="divider">|</span>
          <span>
            <FontAwesomeIcon icon={faCar}/> {property.garage > 0 ? property.garage : ""}
          </span>
          <span>
            <FontAwesomeIcon icon={faSeedling}/> {property.garden > 0 ? property.garden : ""} 
          </span>
        </div>
      </div>
    </div>
  );
}
