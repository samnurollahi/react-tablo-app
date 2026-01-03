import { useEffect, useRef, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

import styled from "../../components/Menu/style.module.css";
import { Link } from "react-router-dom";
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
      "لبه رنگی و طلایی": 20_000,
      "لبه پانچ": 40_000,
      "پلکسی دوبل": 70_000,
      "پلکسی دوبل الماسی": 90_000,
      "پلکسی تک الماسی": 25_000,
      "پلکسی دوبل طلایی": 70_000,
      "پلکسی دوبل طلایی الماسی سفارشی": 202_000,
      "پلکسی رینگی الماسی": 100_000,
      نوراندریک: 100_000,
      فوری: 100_000,
      کریستال: 200_000,
      "استیکر رنگی": 25_000,
      "چاپ مستقیم روی پلکسی ۴ رنگ (فلت بد)": 600_000,
    },
  };

  const [page, setPage] = useState<"word" | "tablo">("word");
  const [optionBox, setOptionBox] = useState<boolean>(false);
  const [optionList, setOptionList] = useState<string[]>([]);
  const [tolTabloOne, setTolTabloOne] = useState<number>(0);
  const [priceText, setPriceText] = useState<number>(0);
  const [noeHrof, setNoeHrof] = useState<
    "حروف سوئدی" | "حروف چنلیوم" | "حروف پلاستیک"
  >("حروف سوئدی");
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

  const [result, setResult] = useState<any>({
    smd: {},
    pvcStrip: {},
    print: {},
    aluminum: {},
    pvcSheet: {},
    transformers: {},
    totalPrice: 0,
  });

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const noeHorofPrice = useRef<number>(580_000);
  const kampozitPriceStatic = useRef<number>(500_000);
  const nasbPriceStatic = useRef<number>(500_000);
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

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const calculateBoxPrice = (width: number, height: number) => {
    const widthInMeter = width / 100;
    const heightInMeter = height / 100;

    const count = widthInMeter * heightInMeter * 2.5;
    setBoxCount(Math.round(count));

    if (noeHrof == "حروف پلاستیک") {
      const price = count * 680_000; //! gymat horof plastik
      setPriceBox(Math.round(price));
    } else {
      const price = count * noeHorofPrice.current;
      setPriceBox(Math.round(price));
    }
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

  useEffect(() => {
    function calculateLightboxPrice(widthCm: number, heightCm: number): any {
      const widthM = widthCm / 100;
      const heightM = heightCm / 100;
      const area = widthM * heightM;
      const perimeter = 2 * (widthM + heightM);

      // ۱. محاسبات مقادیر
      const smdCount = Math.ceil(area * 9);
      const pvcStripLength = perimeter;
      const aluminumLength = perimeter;
      const pvcSheetArea = area;
      const printArea = area + area * 0.1;

      // ۲. منطق ترکیب ترانس‌ها
      const totalWattsNeeded = area * 125;
      let remainingWatts = totalWattsNeeded;
      let t400 = 0,
        t300 = 0,
        t200 = 0;

      while (remainingWatts > 0) {
        if (remainingWatts > 300) {
          t400++;
          remainingWatts -= 400;
        } else if (remainingWatts > 200) {
          t300++;
          remainingWatts -= 300;
        } else {
          t200++;
          remainingWatts -= 200;
        }
      }

      // ۳. قیمت‌های واحد (تومان)
      const unitPrices = {
        smd: 120000,
        pvcStrip: 400000,
        print: 600000,
        trans200: 750000,
        trans300: 800000,
        trans400: 850000,
        aluminum: 500000,
        pvcSheet: 500000,
      };

      // ۴. ساخت آبجکت نهایی مطابق درخواست شما
      const result = {
        smd: {
          count: smdCount,
          price: smdCount * unitPrices.smd,
        },
        pvcStrip: {
          count: Number(pvcStripLength.toFixed(2)),
          price: pvcStripLength * unitPrices.pvcStrip,
        },
        print: {
          count: Number(printArea.toFixed(2)),
          price: printArea * unitPrices.print,
        },
        aluminum: {
          count: Number(aluminumLength.toFixed(2)),
          price: aluminumLength * unitPrices.aluminum,
        },
        pvcSheet: {
          count: Number(pvcSheetArea.toFixed(2)),
          price: pvcSheetArea * unitPrices.pvcSheet,
        },
        transformers: {
          t400Count: t400,
          t300Count: t300,
          t200Count: t200,
          price:
            t400 * unitPrices.trans400 +
            t300 * unitPrices.trans300 +
            t200 * unitPrices.trans200,
        },
      };

      // محاسبه مبلغ کل نهایی
      const totalPrice =
        result.smd.price +
        result.pvcStrip.price +
        result.print.price +
        result.aluminum.price +
        result.pvcSheet.price +
        result.transformers.price;

      return {
        ...result,
        totalPrice: Math.round(totalPrice),
      };
    }

    const result = calculateLightboxPrice(namaTabloWidth, namaTabloHeight);
    setResult(result);
  }, [namaTabloWidth, namaTabloHeight]);

  return (
    <>
      {/* Menu */}
      <Menu key={"Menu"} page={"Home"} />

      <div className="vazir" id="box">
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
                    className="w-[95%] outline-0 text-[#408080]"
                    name=""
                    id=""
                    dir="ltr"
                    value={tolTabloOne == 0 ? "" : tolTabloOne}
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
                      setNoeHrof(
                        e.target.value as
                          | "حروف سوئدی"
                          | "حروف چنلیوم"
                          | "حروف پلاستیک"
                      )
                    }
                    className="w-full border-0 outline-0 text-[#408080]"
                  >
                    <option value="حروف سوعدی">حروف سوئدی</option>
                    <option value="حروف عادی">حروف چنلیوم</option>
                    <option value="حروف عادی">حروف پلاستیک</option>
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
                    value={abadBoxOne == 0 ? "" : abadBoxOne}
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
                    value={abadBoxTwo == 0 ? "" : abadBoxTwo}
                    min="0"
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      setAbadBoxTwo(val < 0 ? 0 : val);
                    }}
                  />
                </div>
              </div>

              <div className="w-full mb-[25px] " id="xxx">
                <label htmlFor="" className="text-[#c4ab74]">
                  آپشن ها
                </label>
                <div
                  className="flex relative items-center w-full justify-between mt-3 px-3 py-3 bg-[#ffffff] rounded-md border border-[#dde2d8] cursor-pointer  "
                  onClick={() => setOptionBox(!optionBox)}
                >
                  <div className="w-full ">
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
                    } absolute z-10 top-full w-full right-0 bg-[#f0edec] text-[#303f67] border border-t-0 border-[#ffffff] rounded-b-2xl overflow-hidden `}
                  >
                    {Object.keys(price.option).map((key) => (
                      <>
                        <p
                          className="py-2 px-4 hover:bg-white w-full"
                          onClick={() => handleOptionClick(key)}
                        >
                          {key}
                        </p>
                      </>
                    ))}
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
                    value={namaTabloWidth == 0 ? "" : namaTabloWidth}
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
                    value={namaTabloHeight == 0 ? "" : namaTabloHeight}
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
                    value={+zirTabloWidth == 0 ? "" : +zirTabloWidth}
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
                    value={+zirTabloHeight == 0 ? "" : +zirTabloHeight}
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
                    value={+balaTabloWidth == 0 ? "" : +balaTabloWidth}
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
                    value={+balaTabloHeight == 0 ? "" : +balaTabloHeight}
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
                    value={+bagalTabloWidth == 0 ? "" : +bagalTabloWidth}
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
                    value={+bagalTabloHeight == 0 ? "" : +bagalTabloHeight}
                    onChange={(e) => {
                      setBagalTabloHeight(Number(e.target.value));
                    }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="overflow-hidden">
          <button
            onClick={togglePopup}
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
                  <td className="p-3 ">{boxCount}</td>
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

        {/* Popup */}
        {isPopupOpen && (
          <>
            <div className="fixed scroll-auto inset-0  flex justify-center items-center z-50">
              <div
                className={`bg-white p-6 rounded-lg shadow-lg w-[90%] md:w-[800px] overflow-y-scroll h-[450px] z-50 ${styled.animatedPopup}`}
              >
                <h2 className="text-xl font-bold mb-4 overflow-hidden">
                  فاکتور
                </h2>
                <table
                  key={"word"}
                  className=" animate__animated animate__fadeIn  table-auto w-full text-right border-collapse  "
                >
                  <thead className="bg-[#f0edec] ">
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
                      <td className="p-3 ">{boxCount}</td>
                      <td className="p-3 ">{priceBox.toLocaleString()}</td>
                    </tr>

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
                      <td className="p-3 ">شاخه اس ام دی</td>
                      <td className="p-3 ">{result.smd.count}</td>
                      <td className="p-3 ">{result.smd.price}</td>
                    </tr>

                    <tr>
                      <td className="p-3 "> نوار پی وی سی فریم لس</td>
                      <td className="p-3 ">{result.pvcStrip.count} متر</td>
                      <td className="p-3 ">{result.pvcStrip.price}</td>
                    </tr>
                    <tr>
                      <td className="p-3 ">چاپ 8 پس یو وی روی پارچه تکستایل</td>
                      <td className="p-3 ">{result.print.count} مترمربع</td>
                      <td className="p-3 ">{result.print.price}</td>
                    </tr>
                    <tr>
                      <td className="p-3 ">پروفیل آلومینیومی لایت باکس </td>
                      <td className="p-3 ">{result.aluminum.count}</td>
                      <td className="p-3 ">{result.aluminum.price}</td>
                    </tr>
                    <tr>
                      <td className="p-3 ">پی وی سی </td>
                      <td className="p-3 ">{result.pvcSheet.count}</td>
                      <td className="p-3 ">{result.pvcSheet.price}</td>
                    </tr>
                    <tr>
                      <td className="p-3 "> ترانس </td>
                      <td className="p-3 ">
                        تعداد ترانس 400 وات:{" "}
                        {result.transformers.t400Count + " "}
                        تعداد ترانس 300 وات:{" "}
                        {result.transformers.t300Count + " "}
                        تعداد ترانس 200 وات:{" "}
                        {result.transformers.t200Count + " "}
                      </td>
                      <td className="p-3 ">{result.transformers.price}</td>
                    </tr>
                    <tr>
                      <td className="p-3 ">نصب</td>
                      <td className="p-3 ">1 بار</td>
                      <td className="p-3 ">{priceNasb.toLocaleString()}</td>
                    </tr>

                    <tr>
                      <td className="p-3 ">جمع کل</td>
                      <td className="p-3 "></td>
                      <td className="p-3 ">
                        {(
                          priceText +
                          otpPrice +
                          priceBox +
                          kampozitPrice +
                          priceProfile +
                          priceNasb +
                          result.totalPrice
                        ).toLocaleString()}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <br />
                <br />
                <br />

                <p></p>

                <Link
                  to={"/about"}
                  className="bg-[#669999] cu text-white px-4 py-2 rounded-lg cursor-pointer"
                  // onClick={togglePopup}
                >
                  سفارش از ما
                </Link>
              </div>
              <div
                className="fixed inset-0 bg-black opacity-80 z-40"
                onClick={togglePopup}
              ></div>
            </div>
          </>
        )}

        <br />
        <br />
        <br />
        <br />
      </div>

      {/* text */}
      <div className="w-[90%] md:w-[60%] m-auto mb-25 bg vazir">
        <h1 className="text-[20px] font-bold text-center text-[#3399CC]">
          وب سایت تابـلو آپ
        </h1>
        <br />
        <p className="text-[#444444]">
          تابلو آپ | محاسبه آنلاین تابلو سردر فروشگاه به‌صورت هوشمند تابلو آپ یک
          وب‌سایت تخصصی و کاربردی برای افرادی است که قصد محاسبه و سفارش تابلو
          سردر فروشگاه را دارند. این ابزار آنلاین با هدف ساده‌سازی فرآیند برآورد
          ابعاد و متراژ تابلو طراحی شده و به سفارش‌دهندگان کمک می‌کند پیش از
          اجرا، دیدی دقیق و شفاف نسبت به تابلو مورد نظر خود داشته باشند.
        </p>
        <br />
        <br />
        <h3 className="text-[18px] text-[#3399CC]">
          تابلو آپ چگونه فرآیند سفارش تابلو سردر فروشگاه را ساده می‌کند؟
        </h3>
        <br />
        <p className="text-[#444444]">
          در طراحی و اجرای تابلو سردر فروشگاه، دو بخش اصلی نقش کلیدی دارند:
        </p>
        <ol className="list-disc">
          <li className="text-[#444444]">حروف برجسته تابلو</li>
          <li className="text-[#444444]">
            زمینه تابلو که معمولاً از جنس کامپوزیت انتخاب می‌شود{" "}
          </li>
        </ol>
        <p className="text-[#444444]">
          وب‌سایت تابلو آپ این دو بخش را به‌عنوان محور اصلی محاسبات در نظر گرفته
          و امکان برآورد آنلاین و دقیق آن‌ها را برای کاربران فراهم کرده است.
        </p>

        <br />
        <br />
        <h3 className="text-[18px]  text-[#3399CC]">
          محاسبه آنلاین متراژ حروف برجسته تابلو
        </h3>
        <br />
        <p className="text-[#444444]">
          یکی از مهم‌ترین چالش‌ها در سفارش تابلو سردر فروشگاه، محاسبه متراژ حروف
          برجسته است. وب سایت تابلو آپ با طراحی یک رابط کاربری ساده و هوشمند این
          امکان را فراهم می‌کند که کاربران:
        </p>
        <ol className="list-disc">
          <li className="text-[#444444]">
            ابعاد تقریبی حروف برجسته را وارد کنند
          </li>
          <li className="text-[#444444]">
            متراژ مورد نیاز حروف تابلو را محاسبه کنند{" "}
          </li>
          <li className="text-[#444444]">
            برآورد دقیق‌تری از هزینه نهایی تابلو داشته باشند
          </li>
        </ol>
        <p className="text-[#444444]">
          این قابلیت باعث کاهش خطاهای محاسبات دستی و افزایش دقت در تصمیم‌گیری
          می‌شود.
        </p>

        <br />
        <br />
        <h3 className="text-[18px]   text-[#3399CC]">
          محاسبه متراژ زمینه تابلو کامپوزیت
        </h3>
        <br />
        <p className="text-[#444444]">
          دومین بخش مهم در طراحی تابلو سردر فروشگاه، زمینه تابلو است. در وب‌سایت
          تابلو آپ کاربران می‌توانند:
        </p>
        <ol className="list-disc">
          <li className="text-[#444444]"> ابعاد زمینه تابلو را مشخص کنند </li>
          <li className="text-[#444444]">
            متراژ کامپوزیت مورد نیاز را محاسبه کنند
          </li>
          <li className="text-[#444444]">
            انتخاب آگاهانه‌تری برای طراحی و سفارش تابلو داشته باشند
          </li>
        </ol>
        <p className="text-[#444444]">
          این ویژگی به‌خصوص در پروژه‌های تابلو‌سازی، باعث صرفه‌جویی در زمان و
          هزینه می‌شود.
        </p>

        <br />
        <br />
        <h3 className="text-[18px]   text-[#3399CC]">
          مزایای استفاده از وب‌سایت تابلو آپ
        </h3>
        <br />
        <ol className="list-disc">
          <li className="text-[#444444]"> محاسبه آنلاین تابلو سردر فروشگاه</li>
          <li className="text-[#444444]">
            مناسب سفارش‌دهندگان و فعالان حوزه تابلو‌سازی{" "}
          </li>
          <li className="text-[#444444]">
            تمرکز بر حروف برجسته و زمینه کامپوزیت{" "}
          </li>
          <li className="text-[#444444]"> کاهش خطا در محاسبه متراژ تابلو </li>
          <li className="text-[#444444]">افزایش سرعت و دقت در برآورد هزینه </li>
        </ol>

        <br />
        <br />
        <h3 className="text-[18px]   text-[#3399CC]">
          تابلو آپ؛ راهکاری هوشمند برای محاسبه تابلو فروشگاهی
        </h3>
        <br />
        <p className="text-[#444444]">
          وب‌سایت تابلو آپ با تمرکز بر نیازهای واقعی بازار تابلو‌سازی طراحی شده
          و ابزاری کارآمد برای افرادی است که به دنبال محاسبه سریع، دقیق و آنلاین
          تابلو سردر فروشگاه هستند.
        </p>

        <br />
        <br />
        <h3 className="text-[18px]   text-[#3399CC]">
          تابلو آپ | محاسبه آنلاین تابلو سردر فروشگاه و حروف برجسته
        </h3>
        <br />
        <p className="text-[#444444]">
          با وب‌سایت تابلو آپ، متراژ حروف برجسته و زمینه تابلو سردر فروشگاه را
          به‌صورت آنلاین و دقیق محاسبه کنید و با دید بهتر سفارش تابلو بدهید.
        </p>
      </div>
    </>
  );
}

export default Home;
