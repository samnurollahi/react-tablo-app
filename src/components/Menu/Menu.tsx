import { useState } from "react";

import styled from "./style.module.css";
import { Link } from "react-router-dom";

export default function ({ page = null }: { page: string | null }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  return (
    <>
      <div className="z-9999 w-full md:w-auto fixed bottom-[15px] translate-x-1/2  md:translate-x-0 right-[50%] md:top-[20%] md:right-[25px] bg-transparent">
        <nav className="flex gap-4 flex-row md:flex-col justify-center md:justify-start text-center">
          {page == "Home" ? (
            <a
              href={"#box"}
              className={`cursor-pointer  bg-[#669999] text-white 
                p-2 px-7 rounded-lg transition-all duration-300 hover:rounded-4xl text-[12px] md:text-[15px]`}
            >
              ماشین حساب
            </a>
          ) : (
            <Link
              to={"/"}
              className={`cursor-pointer  bg-[#669999] text-white 
                p-2 px-7 rounded-lg transition-all duration-300 hover:rounded-4xl text-[12px] md:text-[15px]`}
            >
              ماشین حساب
            </Link>
          )}

          <Link
            to={"/train"}
            className={`cursor-pointer  bg-[#669999] text-white  
               p-2 rounded-lg transition-all duration-300 hover:rounded-4xl text-[12px] md:text-[15px]`}
          >
            اموزش
          </Link>
          <Link
            to={"/about"}
            className={`cursor-pointer  bg-[#669999] text-white w-[28%] md:w-auto 
               p-2 rounded-lg transition-all duration-300 hover:rounded-4xl text-[12px] md:text-[15px]`}
          >
            ارتباط با ما
          </Link>
        </nav>
      </div>

      {isPopupOpen && (
        <>
          <div className="fixed inset-0  flex justify-center items-center z-50">
            <div
              className={`bg-white p-6 rounded-lg shadow-lg w-[90%] md:w-[400px] z-50 ${styled.animatedPopup}`}
            >
              <h2 className="text-xl font-bold mb-4">درباره ما</h2>
              <p className="text-gray-700 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias molestiae similique quam laudantium, iste consequatur
                aut architecto quia impedit soluta accusamus alias labore,
                consectetur iusto beatae consequuntur facere maiores quo!
                09944576853
              </p>
              <button
                className="bg-[#669999] cu text-white px-4 py-2 rounded-lg cursor-pointer"
                onClick={togglePopup}
              >
                بستن
              </button>
            </div>
            <div
              className="fixed inset-0 bg-black opacity-80 z-40"
              onClick={togglePopup}
            ></div>
          </div>
        </>
      )}
    </>
  );
}
