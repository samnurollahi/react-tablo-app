export default () => {
  return (
    <>
      <div className="vazir bg-[#ffffff] min-h-screen flex flex-col items-center justify-center py-10 h-full w-full">
        <div className="bg-white shadow-md rounded-lg p-6 w-[90%] md:w-[600px] mt-6">
          <h1 className="text-2xl font-bold text-[#303f67] mb-4 text-center overflow-hidden">
            ارتباط با ما
          </h1>
          <p className="text-gray-700 leading-relaxed"></p>

          <div className="md:flex md:justify-between">
            <div className="mt-[15px]">
              <p className="text-gray-700 leading-relaxed">شماره ی تماس:</p>

              <a href="tel:09123188214" className="block text-blue-500">
                09123188214
              </a>
              <a href="tel:09106870047" className="block text-blue-500">
                09106870047
              </a>
            </div>
            <div className="mt-[15px]">
              <p className="text-gray-700 leading-relaxed">ایدی ایتا:</p>

              <a className="block text-blue-500">@Tabloapp_eitaa</a>
            </div>
            <div className="mt-[15px]">
              <p className="text-gray-700 leading-relaxed">ایدی تلگرام:</p>

              <a className="block text-blue-500">@Tabloapp_te</a>
            </div>
            <div className="mt-[15px]">
              <p className="text-gray-700 leading-relaxed">واتساپ:</p>

              <a className="block text-blue-500">09106870047</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
