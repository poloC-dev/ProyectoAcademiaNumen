
const Button = (props) => {

    let {text} = props;

  return (
    <a style={{letterSpacing: "1.2px"}} href="#productores" className=" w-6 max-w-14rem text-white  mx-3 flex border-round p-3 font-semibold  bg-orange-500 ">{text}</a>
  )
}

export default Button;