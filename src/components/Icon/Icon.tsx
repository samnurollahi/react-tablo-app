import { Link } from "react-router-dom";

const Icon = () => {
  return (
    <Link to={"/"}>
      <div className="select-none absolute top-[13px] translate-x-1/2 right-[50%] md:translate-x-0 md:top-[15px] md:right-5 overflow-hidden rounded-[100%]">
        <img src="./icon.ico" className="w-[90px]" alt="" />
      </div>
    </Link>
  );
};

export default Icon;
