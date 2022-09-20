const Tittle = (props) => {

    let {color,nocolor} = props;

  return (
    <div className="px-3">
        <h2><span className="text-orange-300 ">{color}</span>{nocolor}</h2>
    </div>
  );
};

export default Tittle