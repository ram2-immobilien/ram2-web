"use client";

import { useTranslations } from "next-intl";
import PropertyCard from "@/components/Tarjeta-Propiedad/PropertyCard";

export default function Home() {
  const t = useTranslations("home");

  const properties = [
    {
      id: 1,
      title: "Apartamento en Valencia",
      price: 390000,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ornare lectus quis neque egestas, sed sagittis turpis porttitor. Nunc massa dui, tempor in efficitur non, iaculis a sapien. Morbi elementum libero ac lectus elementum, vitae sagittis purus blandit. Duis in pharetra erat. Suspendisse dignissim sit amet risus ut mattis. Quisque congue vitae felis eu sagittis. Curabitur euismod quis quam in aliquet. Mauris vel ante aliquam tortor ultrices vehicula id eu nunc. Pellentesque nec odio dignissim, rutrum libero nec, ullamcorper enim. Duis eu vulputate sem, a placerat ante.",
      location: "Valencia, España",
      size: 103,
      bedrooms: 2,
      bathrooms: 2,
      image: "/images/casa.png",
    },
    {
      id: 2,
      title: "Casa en Madrid",
      price: 250000,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ornare lectus quis neque egestas, sed sagittis turpis porttitor. Nunc massa dui, tempor in efficitur non, iaculis a sapien. Morbi elementum libero ac lectus elementum, vitae sagittis purus blandit. Duis in pharetra erat. Suspendisse dignissim sit amet risus ut mattis. Quisque congue vitae felis eu sagittis. Curabitur euismod quis quam in aliquet. Mauris vel ante aliquam tortor ultrices vehicula id eu nunc. Pellentesque nec odio dignissim, rutrum libero nec, ullamcorper enim. Duis eu vulputate sem, a placerat ante.",
      location: "Madrid, España",
      size: 80,
      bedrooms: 3,
      bathrooms: 1,
      image: "/images/casa.png",
    },
  ];

  return (
    <div>
      <p>{t("header")}</p>

      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}
