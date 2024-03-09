
const Button = (props) => {

  return (
    <button
      className={`flex items-center justify-center px-4 py-3 font-poppins-medium text-md leading-none border rounded-full ${
        props.backgroundColor
          ? `${props.backgroundColor} ${props.borderColor} ${props.textColor} ${props.textSize} ${props.width} `
          : "bg-[#FFEC05] border text-black"
      }`}

    >
      <p>{props.label}</p>
    </button>
  );
};

export default Button;