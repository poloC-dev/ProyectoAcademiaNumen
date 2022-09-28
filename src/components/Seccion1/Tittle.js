const Tittle = (props) => {
  let { color, nocolor } = props;

  return (
    <div className="text-2xl px-3">
      <h2>
        {nocolor}
        <span className="text-orange-500">{color}</span>
      </h2>
    </div>
  );
};

export default Tittle;
