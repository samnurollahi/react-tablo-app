import { useEffect, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

// interface Data {
//   tolNeveshteTablo: number;
//   noeHrof: "حروف سوعدی" | "حروف عادی";
//   abadBox: number;
//   opt: any[];
// }

function App() {
  const price = {
    word: 700_000,
    abad: 700_000,
    option: {
      "لبه پانچی": 100_000,
      "لبه عادی": 200_000,
      "آپشن رنگی": 500_000,
    },
  };

  const [page, setPage] = useState<"word" | "tablo">("word");
  const [optionBox, setOptionBox] = useState<boolean>(false);
  const [optionList, setOptionList] = useState<string[]>([]);
  const [tolTabloOne, setTolTabloOne] = useState<number>(0);
  const [tolTabloTwo, setTolTabloTwo] = useState<number>(0);
  const [priceText, setPriceText] = useState<number>(0);
  const [noeHrof, setNoeHrof] = useState<"حروف سوعدی" | "حروف عادی">(
    "حروف سوعدی"
  );
  const [abadBoxOne, setAbadBoxOne] = useState<number>(0);
  const [abadBoxTwo, setAbadBoxTwo] = useState<number>(0);
  const [priceBox, setPriceBox] = useState<number>(0);
  const [otpPrice, setOtpPrice] = useState<number>(0);

  useEffect(() => {
    setPriceText((((tolTabloOne + tolTabloTwo) * 5) / 100) * price.word);
  }, [tolTabloOne, tolTabloTwo]);
  useEffect(() => {
    setPriceBox((abadBoxOne / 100 + abadBoxTwo / 100) * 2.5 * price.abad);
  }, [abadBoxOne, abadBoxTwo]);
  useEffect(() => {
    optionList.forEach((otp) => {
      otp = otp.trim();
      setOtpPrice(
        (prev) => +prev + price.option[otp as keyof typeof price.option]
      );
    });
  }, [optionList]);

  const handleOptionClick = (option: string) => {
    if (optionList.includes(option)) {
      setOptionList(optionList.filter((item) => item !== option));
    } else {
      setOptionList([...optionList, option]);
    }
  };

  return (
    <>
      <div className="vazir">
        {/* header */}
        <div className="bg-white flex justify-around py-[35px]  w-[95%] md:w-[500px] m-auto rounded-b-3xl">
          <button
            className={`cursor-pointer ${
              page == "word"
                ? "bg-[#ba9f4f] text-white"
                : "bg-[#dcdddf] text-[#ba9f4f]"
            }  p-2 rounded-lg  transition-all duration-300 hover:rounded-4xl`}
            onClick={() => setPage("word")}
          >
            محاسبه حروف
          </button>
          <button
            className={`cursor-pointer ${
              page == "tablo"
                ? "bg-[#ba9f4f] text-white"
                : "bg-[#dcdddf] text-[#ba9f4f]"
            } p-2 rounded-lg transition-all duration-300 hover:rounded-4xl`}
            onClick={() => setPage("tablo")}
          >
            محاسبه تابلو
          </button>
        </div>

        {/* form */}
        <div className="bg-white w-[95%] md:w-[500px] m-auto mt-[35px] p-4 rounded-3xl transition-all">
          {page == "word" ? (
            <div
              key={"word"}
              className="animate__animated animate__fadeIn flex flex-wrap justify-between"
            >
              <div className="w-[45%] mb-[25px]">
                <label htmlFor="" className="text-[#303f67]">
                  طول نوشته تابلو
                </label>
                <div className="flex items-center w-full justify-between mt-3 px-3 py-2 bg-[#f0edec] rounded-md border-t-2 border-t-[#ba9f4f]">
                  <span className="m-1">CM</span>

                  <input
                    type="number"
                    className=" w-[25%] outline-0"
                    name=""
                    id=""
                    value={tolTabloOne}
                    onChange={(e) => setTolTabloOne(Number(e.target.value))}
                  />

                  <span>+</span>

                  <input
                    type="number"
                    className=" w-[25%] outline-0"
                    name=""
                    id=""
                    dir="ltr"
                    value={tolTabloTwo}
                    onChange={(e) => setTolTabloTwo(Number(e.target.value))}
                  />
                </div>
              </div>

              <div className="w-[45%] mb-[25px]">
                <label htmlFor="" className="text-[#303f67]">
                  نوع حروف
                </label>
                <div className="flex items-center w-full justify-between mt-3 px-3 py-2 bg-[#f0edec] rounded-md border-t-2 border-t-[#ba9f4f]">
                  <select
                    name=""
                    id=""
                    value={noeHrof}
                    onChange={(e) =>
                      setNoeHrof(e.target.value as "حروف سوعدی" | "حروف عادی")
                    }
                    className="w-full border-0 outline-0"
                  >
                    <option value="حروف سوعدی">حروف سوعدی</option>
                    <option value="حروف عادی">حروف عادی</option>
                  </select>
                </div>
              </div>

              <div className="w-[45%] mb-[25px]">
                <label htmlFor="" className="text-[#303f67]">
                  ابعاد باکس
                </label>
                <div className="flex items-center w-full justify-between mt-3 px-3 py-2 bg-[#f0edec] rounded-md border-t-2 border-t-[#ba9f4f]">
                  <span className="m-1">CM</span>

                  <input
                    type="number"
                    className=" w-[25%] outline-0"
                    name=""
                    id=""
                    value={abadBoxOne}
                    onChange={(e) => setAbadBoxOne(Number(e.target.value))}
                  />

                  <span>X</span>

                  <input
                    type="number"
                    className=" w-[25%] outline-0"
                    name=""
                    id=""
                    dir="ltr"
                    defaultValue={0}
                    value={abadBoxTwo}
                    onChange={(e) => setAbadBoxTwo(Number(e.target.value))}
                  />
                </div>
              </div>

              <div className="w-full mb-[25px]">
                <label htmlFor="" className="text-[#303f67]">
                  آپشن ها
                </label>
                <div
                  className="flex relative items-center w-full justify-between mt-3 px-3 py-3 bg-[#f0edec] rounded-md border-t-2 border-t-[#ba9f4f] cursor-pointer"
                  onClick={() => setOptionBox(!optionBox)}
                >
                  <div className="w-full">
                    {optionList.length > 0 ? (
                      optionList.map((option, index) => (
                        <span
                          key={index}
                          className="bg-white p-1 rounded-full inline-flex items-center text-sm mr-1"
                        >
                          <AiOutlineCloseCircle
                            className="text-[#ba9f4f] cursor-pointer ml-1"
                            onClick={() => handleOptionClick(option)}
                          />
                          {option}
                        </span>
                      ))
                    ) : (
                      <span className="text-[#303f67]">انتخاب کنید</span>
                    )}
                  </div>

                  <div
                    className={`${
                      optionBox ? "" : "hidden"
                    } absolute z-10 bottom-[-120px] w-full right-0 bg-[#f0edec] text-[#303f67] border border-t-0 border-[#ba9f4f] rounded-b-2xl overflow-hidden`}
                  >
                    <p
                      className="py-2 px-4 hover:bg-white w-full"
                      onClick={() => handleOptionClick("لبه پانچی")}
                    >
                      لبه پانجی
                    </p>
                    <p
                      className="py-2 px-4 hover:bg-white w-full"
                      onClick={() => handleOptionClick("لبه عادی")}
                    >
                      لبه عادی
                    </p>
                    <p
                      className="py-2 px-4 hover:bg-white w-full"
                      onClick={() => handleOptionClick("آپشن رنگی")}
                    >
                      آپشن رنگی
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div
              key={"tablo"}
              className="animate__animated animate__fadeIn flex flex-wrap justify-between"
            >
              <div className="w-[45%] mb-[25px]">
                <label htmlFor="" className="text-[#303f67]">
                  ابعاد نمای تابلو
                </label>
                <div className="flex items-center w-full justify-between mt-3 px-3 py-2 bg-[#f0edec] rounded-md border-t-2 border-t-[#ba9f4f]">
                  <span className="m-1">CM</span>

                  <input
                    type="number"
                    className=" w-[25%] outline-0"
                    name=""
                    id=""
                    defaultValue={0}
                  />

                  <span>X</span>

                  <input
                    type="number"
                    className=" w-[25%] outline-0"
                    name=""
                    id=""
                    dir="ltr"
                    defaultValue={0}
                  />
                </div>
              </div>
              <div className="w-[45%] mb-[25px]">
                <label htmlFor="" className="text-[#303f67]">
                  ابعاد زیر تابلو
                </label>
                <div className="flex items-center w-full justify-between mt-3 px-3 py-2 bg-[#f0edec] rounded-md border-t-2 border-t-[#ba9f4f]">
                  <span className="m-1">CM</span>

                  <input
                    type="number"
                    className=" w-[25%] outline-0"
                    name=""
                    id=""
                    defaultValue={0}
                  />

                  <span>X</span>

                  <input
                    type="number"
                    className=" w-[25%] outline-0"
                    name=""
                    id=""
                    dir="ltr"
                    defaultValue={0}
                  />
                </div>
              </div>
              <div className="w-[45%] mb-[25px]">
                <label htmlFor="" className="text-[#303f67]">
                  ابعاد بالای تابلو
                </label>
                <div className="flex items-center w-full justify-between mt-3 px-3 py-2 bg-[#f0edec] rounded-md border-t-2 border-t-[#ba9f4f]">
                  <span className="m-1">CM</span>

                  <input
                    type="number"
                    className=" w-[25%] outline-0"
                    name=""
                    id=""
                    defaultValue={0}
                  />

                  <span>X</span>

                  <input
                    type="number"
                    className=" w-[25%] outline-0"
                    name=""
                    id=""
                    dir="ltr"
                    defaultValue={0}
                  />
                </div>
              </div>
              <div className="w-[45%] mb-[25px]">
                <label htmlFor="" className="text-[#303f67]">
                  ابعاد بغل تابلو
                </label>
                <div className="flex items-center w-full justify-between mt-3 px-3 py-2 bg-[#f0edec] rounded-md border-t-2 border-t-[#ba9f4f]">
                  <span className="m-1">CM</span>

                  <input
                    type="number"
                    className=" w-[25%] outline-0"
                    name=""
                    id=""
                    defaultValue={0}
                  />

                  <span>X</span>

                  <input
                    type="number"
                    className=" w-[25%] outline-0"
                    name=""
                    id=""
                    dir="ltr"
                    defaultValue={0}
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="bg-white relative z-[-1] w-[95%] md:w-[500px] m-auto mt-[35px] p-4 rounded-3xl">
          {page == "word" ? (
            <table
              key={"word"}
              className="animate__animated animate__fadeIn  table-auto w-full text-right border-collapse"
            >
              <thead className="bg-[#f0edec]">
                <tr>
                  <th className="p-3 text-[#303f67]">نوع سفارش</th>
                  <th className="p-3 text-[#303f67]">تعداد</th>
                  <th className="p-3 text-[#303f67]">مبلغ نهایی</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="p-3 ">{noeHrof}</td>
                  <td className="p-3 ">2 سطر</td>
                  <td className="p-3 ">{priceText.toLocaleString()}</td>
                </tr>
                <tr>
                  <td className="p-3 ">آپشن ها</td>
                  <td className="p-3 ">{optionList.length} عدد</td>
                  <td className="p-3 ">{otpPrice.toLocaleString()}</td>
                </tr>
                <tr>
                  <td className="p-3 ">باکس</td>
                  <td className="p-3 ">1 عدد</td>
                  <td className="p-3 ">{priceBox.toLocaleString()}</td>
                </tr>
              </tbody>
            </table>
          ) : (
            <></>
          )}
        </div>

        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
}

export default App;
