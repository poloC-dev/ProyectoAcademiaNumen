import React from "react";
import Tittle from "../Seccion1/Tittle";
const Iconos = () => {
  const tittleTextColor = "the Premium Bakery Quality";
  const tittleTextBlack = "Why Choose ";

  const cardsData = [
    {
      id: 1,
      icon: "pi pi-check p-2 bg-green-200",
      tittle: "Discover new flavours & people",
      phrase:
        "Discover new tastes, flavours and snacks and recipes to make wonderful meals. Also find out where your food comes from and who makes it.",
    },
    {
      id: 2,
      icon: "pi pi-check p-2 bg-green-200",
      tittle: "Buy wholesale",
      phrase:
        "We offer bulk formats, variety cases, and discovery boxes so you can save money on delicious foods by buying at wholesale prices.",
    },
    {
      id: 3,
      icon: "pi pi-check p-2 bg-green-200",
      tittle: "Support your community",
      phrase:
        "By buying in bulk from local and Canadian producers you are helping grow local food ecosystem, creating jobs and supporting families and entrepeneurs in your community.",
    },
    {
      id: 4,
      icon: "pi pi-check p-2 bg-green-200",
      tittle: "Enjoy the best quality",
      phrase:
        "We only offer great tasting, all natural foods that are better for you, and organic if possible.",
    },
    {
      id: 5,
      icon: "pi pi-check p-2 bg-green-200",
      tittle: "Enjoy Club Level Service",
      phrase:
        "As a member of a club, we will make sure you are delighted with our service or we will make it right!",
    },
  ];
  return (
    <section className="flex flex-wrap m-auto p-3 bg-blue-500">
      <div className="">
        <Tittle color={tittleTextColor} nocolor={tittleTextBlack} />
      </div>
      <div className=" md:inline-flex m-3 p-2 bg-red-400">
        {cardsData.map((item) => (
          <figure className="p-3 bg-gray-300 border-900" key={item.id}>
            <i className={item.icon} style={{ fontSize: "2em" }}></i>
            <figcaption className="my-2 bg-blue-200">
              <h3>{item.tittle}</h3>
              <p>{item.phrase}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default Iconos;
