import imagen from "./Assets/huerta.jpg";
import Button from './Button';
import Tittle from "./Tittle";
import Subtittle from './Subittle';

const frases = [
  {
    id:1, description: "Because it connects us to the land we live on, and to the people who live here."
  },
  {
    id:2, description: "Because it's more meaningful to cook and eat something made by a person nearby than by some distant corporation."
  },
  {
    id:3, description: "Because good local food makes our corner of the world a better place to live."
  },
  {
    id:4, description: "Because it's support local jobs."
  },
  {
    id:5, description: "Because it makes more sense for the environment."
  }
]

const buttonText = "Discover Our Producers";
const tittleTextColor = "Who Makes ";
const tittleTextBlack = "Your Food?";
const subtittleText = "Our mission is to help grow the local food ecosystem in BC and across Canada. Why?"

const Seccion1 = () => {
  return (
    <section className="grid my-2 md:my-2 lg:my-4">
      <div className="col-12 md:col-6 lg:col-6 bg-green-500">
        <Tittle color ={tittleTextColor} nocolor={tittleTextBlack}/>
        <Subtittle description={subtittleText} />
        {frases.map((item) => (
          <div className="flex p-3" key={item.id}> 
            <i className="pi pi-check-circle pr-2"></i>
            <p>{item.description}</p>
          </div>
        ))}
        <Button text={buttonText} />
      </div>
      <div style={{ backgroundImage: `url(${imagen})`, backgroundSize: "cover" }} className="col-12 md:col-6 lg:col-6 ">
      </div>
    </section>
  );
};

export default Seccion1;
