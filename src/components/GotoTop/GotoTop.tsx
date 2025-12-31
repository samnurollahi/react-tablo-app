import { IoIosArrowUp } from "react-icons/io";
import styled from "./style.module.css";
import { useEffect, useRef } from "react";

const GotoTop = () => {
  const btnGoToTop = useRef<null | HTMLButtonElement>(null);

  const handelEventScroll = () => {
    if (window.scrollY > 600 && btnGoToTop.current) {
      btnGoToTop.current?.classList.add("flex");
      btnGoToTop.current?.classList.remove("hidden");
    } else if (btnGoToTop.current) {
      btnGoToTop.current?.classList.add("hidden");
      btnGoToTop.current?.classList.remove("flex");
    }
  };
  const handelGotoTop = () => {
    window.scrollTo({
      behavior: "smooth",
      left: 0,
      top: 0,
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handelEventScroll);

    btnGoToTop.current?.addEventListener("click", handelGotoTop);

    //! cleaning
    return () => {
      window.removeEventListener("scroll", handelEventScroll);
      btnGoToTop.current?.removeEventListener("click", handelGotoTop);
    };
  });

  return (
    <button className={`${styled.btn} hidden`} ref={btnGoToTop}>
      <IoIosArrowUp />
    </button>
  );
};

export default GotoTop;
