import Menu from "../../components/Menu/Menu";

export default () => {
  return (
    <>
      {false ? (
        <div className="vazir bg-[#ffffff] min-h-screen mt-[150px] flex flex-col items-center py-10">
          <div className="bg-white shadow-md rounded-lg p-6 w-[90%] md:w-[600px]">
            <video controls className="w-full rounded-md">
              <source
                src="https://toplearn.com/courses/LiveDemoVideo/4616"
                type="video/mp4"
              />
              مرورگر شما از پخش ویدیو پشتیبانی نمی‌کند.
            </video>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 w-[90%] md:w-[600px] mt-6">
            <h1 className="text-2xl font-bold text-[#303f67] mb-4 text-center">
              آموزش استفاده از ماشین حساب
            </h1>
            <p className="text-gray-700 leading-relaxed">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus voluptatum veniam explicabo fuga quis neque,
              voluptatibus nam, magnam blanditiis vero modi perferendis sint
              hic, unde facere dolor. Porro, corporis suscipit.
            </p>
          </div>
          <Menu key={"Menu"} page={"Train"} />
        </div>
      ) : (
        <>
          <Menu key={"Menu"} page={"Train"} />

          <h1 className="text-center mt-[150px] vazir">
            این صفحه زمانی نمایش داده میشد که کارفرما محترم محتوا را ارسال نماید
          </h1>
        </>
      )}
    </>
  );
};
