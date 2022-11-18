import React from "react";
import Card from "./Card";

const CardList = () => {
  const cardsData = [
    {
      id: 1,
      icon: "pi pi-star text-5xl",
      tittle: "Descubre nuevos sabores",
      phrase:
        "Descubre nuevos gustos, sabores y snacks y recetas para hacer comidas maravillosas.",
    },
    {
      id: 2,
      icon: "pi pi-shopping-cart text-5xl",
      tittle: "Comprar al por mayor",
      phrase:
        "Ofrecemos formatos a granel, estuches variados y cajas sorpresa para que puedas ahorrar dinero",
    },
    {
      id: 3,
      icon: "pi pi-user-plus text-5xl",
      tittle: "Apoya a tu comunidad",
      phrase:
        "Al comprar a granel de productores locales, está ayudando a hacer crecer el ecosistema alimentario local.",
    },
    {
      id: 4,
      icon: "pi pi-thumbs-up text-5xl",
      tittle: "Disfrute de la mejor calidad",
      phrase:
        "Solo ofrecemos gran sabor, todos los alimentos naturales que son mejores para usted y orgánicos si es posible.",
    },
    {
      id: 5,
      icon: "pi pi-heart text-5xl",
      tittle: "Disfrute del servicio de nivel Club",
      phrase:
        "Como miembro de un club, nos aseguraremos de que esté encantado con nuestro servicio o lo volvemos a hacer bien.",
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {cardsData.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          icon={item.icon}
          tittle={item.tittle}
          phrase={item.phrase}
        />
      ))}
    </div>
  );
};

export default CardList;
