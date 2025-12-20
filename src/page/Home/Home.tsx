import { useEffect, useMemo, useRef, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

import Menu from "../../components/Menu/Menu";

// interface Data {
//   tolNeveshteTablo: number;
//   noeHrof: "حروف سوعدی" | "حروف عادی";
//   abadBox: number;
//   opt: any[];
// }

function Home() {
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
  const [priceText, setPriceText] = useState<number>(0);
  const [noeHrof, setNoeHrof] = useState<"حروف سوعدی" | "حروف عادی">(
    "حروف سوعدی"
  );
  const [abadBoxOne, setAbadBoxOne] = useState<number>(0);
  const [abadBoxTwo, setAbadBoxTwo] = useState<number>(0);
  const [priceBox, setPriceBox] = useState<number>(0);
  const [otpPrice, setOtpPrice] = useState<number>(0);
  const [boxCount, setBoxCount] = useState<number>(0);

  const [namaTabloWidth, setNamaTabloWidth] = useState<number>(0);
  const [namaTabloHeight, setNamaTabloHeight] = useState<number>(0);
  const [zirTabloWidth, setZirTabloWidth] = useState<number>(0);
  const [zirTabloHeight, setZirTabloHeight] = useState<number>(0);
  const [balaTabloWidth, setBalaTabloWidth] = useState<number>(0);
  const [balaTabloHeight, setBalaTabloHeight] = useState<number>(0);
  const [bagalTabloWidth, setBagalTabloWidth] = useState<number>(0);
  const [bagalTabloHeight, setBagalTabloHeight] = useState<number>(0);
  const [kampozitPrice, setKampozitPrice] = useState<number>(0);
  const [countKampozit, setCountKampozit] = useState<number>(0);
  const [priceNasb, setPriceNasb] = useState<number>(0);
  const [priceProfile, setPriceProfile] = useState<number>(0);
  const [countProfile, setCountProfile] = useState<number>(0);

  const noeHorofPrice = useRef<number>(750_000);
  const kampozitPriceStatic = useRef<number>(500_000);
  const nasbPriceStatic = useRef<number>(300_000);
  const profilPriceStatic = useRef<number>(200_000);

  useEffect(() => {
    let totalPrice = 0;
    optionList.forEach((otp) => {
      otp = otp.trim();
      totalPrice += price.option[otp as keyof typeof price.option];
    });
    setOtpPrice(totalPrice);
  }, [optionList]);

  useEffect(() => {
    calculateBoxPrice(abadBoxOne, abadBoxTwo);
  }, [abadBoxOne, abadBoxTwo]);

  const handleOptionClick = (option: string) => {
    if (optionList.includes(option)) {
      setOptionList(optionList.filter((item) => item !== option));
    } else {
      setOptionList([...optionList, option]);
    }
  };

  const calculateBoxPrice = (width: number, height: number) => {
    const widthInMeter = width / 100;
    const heightInMeter = height / 100;

    const count = widthInMeter * heightInMeter * 2.5;
    setBoxCount(Math.round(count));

    const price = count * noeHorofPrice.current;

    setPriceBox(Math.round(price));
  };

  useEffect(() => {
    let newPrice: number = 0;

    newPrice +=
      (namaTabloWidth / 100) * (namaTabloHeight / 100) +
      (namaTabloWidth / 100) * (namaTabloHeight / 100) * 0.1;

    newPrice +=
      (zirTabloWidth / 100) * (zirTabloHeight / 100) +
      (zirTabloWidth / 100) * (zirTabloHeight / 100) * 0.1;

    newPrice +=
      (balaTabloWidth / 100) * (balaTabloHeight / 100) +
      (balaTabloWidth / 100) * (balaTabloHeight / 100) * 0.1;

    newPrice +=
      (bagalTabloWidth / 100) * (bagalTabloHeight / 100) +
      (bagalTabloWidth / 100) * (bagalTabloHeight / 100) * 0.1;

    if (zirTabloHeight / 100 > 0.5 && zirTabloHeight / 100 < 1) {
      let c = zirTabloWidth * 6 + zirTabloWidth;
      setCountProfile(c / 6);
      setPriceProfile(c * profilPriceStatic.current);
    } else if (zirTabloHeight / 100 < 0.5) {
      let c = zirTabloWidth * 6;
      setCountProfile(c / 6);
      setPriceProfile(c * profilPriceStatic.current);
    } else if (zirTabloHeight / 100 == 0) {
      let c = zirTabloWidth / 2;
      setCountProfile(c);
      setPriceProfile(c * 6 * profilPriceStatic.current);
    } else if (zirTabloHeight / 100 >= 1 && balaTabloHeight / 100 >= 1) {
      let c = zirTabloWidth * 0.2 + zirTabloWidth * 0.2 + zirTabloWidth * 6;
      c += 6;
      setCountProfile(c / 6);
      setPriceProfile(c * profilPriceStatic.current);
    } else if (zirTabloHeight / 100 >= 1) {
      let c = zirTabloWidth * 0.2 + zirTabloWidth * 6;
      c += 6;
      setCountProfile(c / 6);
      setPriceProfile(c * profilPriceStatic.current);
    }

    setCountKampozit(+newPrice.toFixed(2));
    setPriceNasb(+newPrice.toFixed(2) * nasbPriceStatic.current);

    newPrice *= kampozitPriceStatic.current;
    setKampozitPrice(Math.round(newPrice));
  }, [
    namaTabloWidth,
    namaTabloHeight,
    zirTabloWidth,
    zirTabloHeight,
    balaTabloWidth,
    balaTabloHeight,
    bagalTabloWidth,
    bagalTabloHeight,
  ]);

  return (
    <>
      <div className="vazir">
        {/* header */}
        <div className="bg-white flex justify-around py-[35px]  w-[95%] md:w-[500px] m-auto rounded-b-3xl">
          <button
            className={`cursor-pointer ${
              page == "word"
                ? "bg-[#669999] text-white shadow-lg shadow-gray-400/60"
                : "bg-[#dcdddf] text-[#669999] shadow-md shadow-gray-300/50"
            }  p-2 rounded-lg  transition-all duration-300 hover:rounded-4xl`}
            onClick={() => setPage("word")}
          >
            محاسبه حروف
          </button>
          <button
            className={`cursor-pointer ${
              page == "tablo"
                ? "bg-[#669999] text-white shadow-lg shadow-gray-400/60"
                : "bg-[#dcdddf] text-[#669999] shadow-md shadow-gray-300/50"
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
              <div className="w-full mb-[25px]">
                <label htmlFor="" className="text-[#c4ab74]">
                  طول نوشته تابلو
                </label>
                <div className="flex items-center w-full justify-between mt-3 px-3 py-2 bg-[#ffffff] rounded-md border border-[#dde2d8]">
                  <span className="m-1">CM</span>

                  {/* <input
                    type="number"
                    className="w-[25%] outline-0 text-[#408080]"
                    name=""
                    id=""
                    value={tolTabloOne}
                    min="0"
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      setTolTabloOne(val < 0 ? 0 : val);
                    }}
                  />

                  <span className="text-gray-500 text-[12px]">+</span> */}

                  <input
                    type="number"
                    className="w-full outline-0 text-[#408080]"
                    name=""
                    id=""
                    dir="ltr"
                    value={tolTabloOne}
                    min="0"
                    onChange={(e) => {
                      setTolTabloOne(
                        Number(e.target.value ? e.target.value : 0)
                      );
                      setPriceText(
                        (Number(e.target.value ? e.target.value : 0) / 100) *
                          5 *
                          noeHorofPrice.current
                      );
                    }}
                  />
                </div>
              </div>

              <div className="w-full mb-[25px]">
                <label htmlFor="" className="text-[#c4ab74]">
                  نوع حروف
                </label>
                <div className="flex items-center w-full justify-between mt-3 px-3 py-2 bg-[#ffffff] rounded-md border border-[#dde2d8]">
                  <select
                    name=""
                    id=""
                    value={noeHrof}
                    onChange={(e) =>
                      setNoeHrof(e.target.value as "حروف سوعدی" | "حروف عادی")
                    }
                    className="w-full border-0 outline-0 text-[#408080]"
                  >
                    <option value="حروف سوعدی">حروف سوعدی</option>
                    <option value="حروف عادی">حروف عادی</option>
                  </select>
                </div>
              </div>

              <div className="w-full mb-[25px]">
                <label htmlFor="" className="text-[#c4ab74]">
                  ابعاد باکس
                </label>
                <div className="flex items-center w-full justify-between mt-3 px-3 py-2 bg-[#ffffff] rounded-md border border-[#dde2d8]">
                  <span className="m-1">CM</span>

                  <input
                    type="number"
                    className="w-[25%] outline-0 text-[#408080]"
                    name=""
                    id=""
                    value={abadBoxOne}
                    min="0"
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      setAbadBoxOne(val < 0 ? 0 : val);
                    }}
                  />

                  <span className="text-gray-500 text-[12px]">X</span>

                  <input
                    type="number"
                    className="w-[25%] outline-0 text-[#408080]"
                    name=""
                    id=""
                    dir="ltr"
                    value={abadBoxTwo}
                    min="0"
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      setAbadBoxTwo(val < 0 ? 0 : val);
                    }}
                  />
                </div>
              </div>

              <div className="w-full mb-[25px]">
                <label htmlFor="" className="text-[#c4ab74]">
                  آپشن ها
                </label>
                <div
                  className="flex relative items-center w-full justify-between mt-3 px-3 py-3 bg-[#ffffff] rounded-md border border-[#dde2d8] cursor-pointer"
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
                    } absolute z-10 bottom-[-120px] w-full right-0 bg-[#f0edec] text-[#303f67] border border-t-0 border-[#ffffff] rounded-b-2xl overflow-hidden`}
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
              <div className="w-full mb-[25px]">
                <label htmlFor="" className="text-[#c4ab74]">
                  ابعاد نمای تابلو
                </label>
                <div className="flex items-center w-full justify-between mt-3 px-3 py-2 bg-[#ffffff] rounded-md border border-[#dde2d8]">
                  <span className="m-1">CM</span>

                  <input
                    type="number"
                    className="w-[25%] outline-0 text-[#408080]"
                    name=""
                    id=""
                    min="0"
                    value={namaTabloWidth}
                    onChange={(e) => {
                      setNamaTabloWidth(Number(e.target.value));
                    }}
                  />

                  <span className="text-gray-500 text-[12px]">X</span>

                  <input
                    type="number"
                    className="w-[25%] outline-0 text-[#408080]"
                    name=""
                    id=""
                    dir="ltr"
                    min="0"
                    value={namaTabloHeight}
                    onChange={(e) => {
                      setNamaTabloHeight(Number(e.target.value));
                    }}
                  />
                </div>
              </div>
              <div className="w-full mb-[25px]">
                <label htmlFor="" className="text-[#c4ab74]">
                  ابعاد زیر تابلو
                </label>
                <div className="flex items-center w-full justify-between mt-3 px-3 py-2 bg-[#ffffff] rounded-md border border-[#dde2d8]">
                  <span className="m-1">CM</span>

                  <input
                    type="number"
                    className="w-[25%] outline-0 text-[#408080]"
                    name=""
                    id=""
                    min="0"
                    value={+zirTabloWidth}
                    onChange={(e) => {
                      setZirTabloWidth(Number(e.target.value));
                    }}
                  />

                  <span className="text-gray-500 text-[12px]">X</span>

                  <input
                    type="number"
                    className="w-[25%] outline-0 text-[#408080]"
                    name=""
                    id=""
                    dir="ltr"
                    value={+zirTabloHeight}
                    onChange={(e) => {
                      setZirTabloHeight(Number(e.target.value));
                    }}
                  />
                </div>
              </div>
              <div className="w-full mb-[25px]">
                <label htmlFor="" className="text-[#c4ab74]">
                  ابعاد بالای تابلو
                </label>
                <div className="flex items-center w-full justify-between mt-3 px-3 py-2 bg-[#ffffff] rounded-md border border-[#dde2d8]">
                  <span className="m-1">CM</span>

                  <input
                    type="number"
                    className="w-[25%] outline-0 text-[#408080]"
                    name=""
                    id=""
                    value={+balaTabloWidth}
                    onChange={(e) => {
                      setBalaTabloWidth(Number(e.target.value));
                    }}
                    min="0"
                  />

                  <span className="text-gray-500 text-[12px]">X</span>

                  <input
                    type="number"
                    className="w-[25%] outline-0 text-[#408080]"
                    name=""
                    id=""
                    dir="ltr"
                    value={+balaTabloHeight}
                    onChange={(e) => {
                      setBalaTabloHeight(Number(e.target.value));
                    }}
                  />
                </div>
              </div>
              <div className="w-full mb-[25px]">
                <label htmlFor="" className="text-[#c4ab74]">
                  ابعاد بغل تابلو
                </label>
                <div className="flex items-center w-full justify-between mt-3 px-3 py-2 bg-[#ffffff] rounded-md border border-[#dde2d8]">
                  <span className="m-1">CM</span>

                  <input
                    type="number"
                    className="w-[25%] outline-0 text-[#408080]"
                    name=""
                    id=""
                    value={+bagalTabloWidth}
                    onChange={(e) => {
                      setBagalTabloWidth(Number(e.target.value));
                    }}
                    min="0"
                  />

                  <span className="text-gray-500 text-[12px]">X</span>

                  <input
                    type="number"
                    className="w-[25%] outline-0 text-[#408080]"
                    name=""
                    id=""
                    dir="ltr"
                    min="0"
                    value={+bagalTabloHeight}
                    onChange={(e) => {
                      setBagalTabloHeight(Number(e.target.value));
                    }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        <div>
          <button
            onClick={() => {
              console.log("click me");
            }}
            id="mohasebe"
            className={`bg-[#669999] block m-auto cursor-pointer! text-white  rounded-4xl px-18 py-2 ${
              optionBox ? "z-[-1]" : ""
            } `}
          >
            محاسبه
          </button>
        </div>

        {/* tabel */}
        <div className="bg-white relative z-[-1] w-[95%]  md:w-[500px] m-auto mt-[35px] p-4 rounded-3xl">
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
                  <td className="p-3 ">{tolTabloOne / 100} متر</td>
                  <td className="p-3 ">{priceText.toLocaleString()}</td>
                </tr>
                <tr>
                  <td className="p-3 ">آپشن ها</td>
                  <td className="p-3 ">{optionList.length} عدد</td>
                  <td className="p-3 ">{otpPrice.toLocaleString()}</td>
                </tr>
                <tr>
                  <td className="p-3 ">باکس</td>
                  <td className="p-3 ">{boxCount} متر</td>
                  <td className="p-3 ">{priceBox.toLocaleString()}</td>
                </tr>
              </tbody>
            </table>
          ) : (
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
                  <td className="p-3 ">ورق کامپوزیت</td>
                  <td className="p-3 ">{countKampozit}</td>
                  <td className="p-3 ">{kampozitPrice.toLocaleString()}</td>
                </tr>

                <tr>
                  <td className="p-3 ">پروفیل اهنی</td>
                  <td className="p-3 ">{countProfile}</td>
                  <td className="p-3 ">{priceProfile}</td>
                </tr>

                <tr>
                  <td className="p-3 ">نصب</td>
                  <td className="p-3 ">1 بار</td>
                  <td className="p-3 ">{priceNasb.toLocaleString()}</td>
                </tr>
              </tbody>
            </table>
          )}
        </div>

        {/* menu */}
        <Menu />

        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
}

export default Home;
