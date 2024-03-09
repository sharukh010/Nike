const Button = (props) => {
  const { label, iconURL } = props;
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg leading-none bg-coral-red rounded-full text-white border-coral-red">
      {label}
      {iconURL && <img
        src={iconURL}
        alt="Arrow"
        width={20}
        height={20}
        className="ml-2 rounded-full w-5 h-5"
      />}
    </button>
  );
};

export default Button;
