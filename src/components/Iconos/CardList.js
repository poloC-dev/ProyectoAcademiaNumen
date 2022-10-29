import React from "react";
import Card from "./Card";

const CardList = () => {
  const cardsData = [
    {
      id: 1,
      icon: "pi pi-star text-5xl",
      tittle: "Discover new flavours",
      phrase:
        "Discover new tastes, flavours and snacks and recipes to make wonderful meals.",
    },
    {
      id: 2,
      icon: "pi pi-shopping-cart text-5xl",
      tittle: "Buy wholesale",
      phrase:
        "We offer bulk formats, variety cases, and discovery boxes so you can save money.",
    },
    {
      id: 3,
      icon: "pi pi-user-plus text-5xl",
      tittle: "Support your community",
      phrase:
        "By buying in bulk from local and Canadian producers you are helping grow local food ecosystem.",
    },
    {
      id: 4,
      icon: "pi pi-thumbs-up text-5xl",
      tittle: "Enjoy the best quality",
      phrase:
        "We only offer great tasting, all natural foods that are better for you, and organic if possible.",
    },
    {
      id: 5,
      icon: "pi pi-heart text-5xl",
      tittle: "Enjoy Club Level Service",
      phrase:
        "As a member of a club, we will make sure you are delighted with our service or we will make it right!",
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
