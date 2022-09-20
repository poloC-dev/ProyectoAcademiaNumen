
const Button = (props) => {

    let {text} = props;

  return (
    <a href="#productores" className="w-6 flex  p-3 bg-red-500 ">{text}</a>
  )
}

export default Button;