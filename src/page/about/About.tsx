import Menu from "../../components/Menu/Menu";

export default () => {
  return (
    <>
      <Menu key={"Menu"} page={"About"} />

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

      <div className="w-[90%] md:w-[60%] m-auto mb-25 bg vazir mt-0 md:-mt-20">
        <h1 className="text-[20px] font-bold text-center text-[#3399CC]">
          تابلو اپ | محاسبه آنلاین تابلو سردر فروشگاه
        </h1>

        <br />

        <p className="text-[#444444]">
          تابلو اپ اولین ابزار آنلاین تخصصی در ایران برای محاسبه سریع و دقیق
          تابلو سردر فروشگاه‌هاست. ما به فروشگاه‌داران، صاحبان کسب‌وکار و
          تابلوسازان حرفه‌ای کمک می‌کنیم تا در چند ثانیه متراژ حروف برجسته و
          زمینه کامپوزیت را محاسبه کنند، هزینه را پیش‌بینی کنند و بدون خطا سفارش
          دهند.
        </p>

        <br />
        <br />

        <h3 className="text-[18px] text-[#3399CC]">ما چه می‌کنیم؟</h3>

        <br />

        <p className="text-[#444444]">
          با وارد کردن ابعاد دلخواه، به‌راحتی می‌توانید:
        </p>

        <ol className="list-disc">
          <li className="text-[#444444]">
            متراژ دقیق حروف برجسته (چلنیوم، استیل، پلاستیک و …) را دریافت کنید
          </li>
          <li className="text-[#444444]">
            متراژ زمینه کامپوزیت را محاسبه کنید
          </li>
          <li className="text-[#444444]">
            از هزینه نهایی پروژه تصویر شفاف‌تری داشته باشید
          </li>
        </ol>

        <p className="text-[#444444]">
          بدون نیاز به محاسبات دستی، بدون اشتباه و بدون اتلاف وقت.
        </p>

        <br />
        <br />

        <h3 className="text-[18px] text-[#3399CC]">چرا تابلو اپ؟</h3>

        <br />

        <ol className="list-disc">
          <li className="text-[#444444]">محاسبه آنلاین و رایگان</li>
          <li className="text-[#444444]">رابط کاربری ساده و سریع</li>
          <li className="text-[#444444]">کاهش هزینه‌های اضافی</li>
          <li className="text-[#444444]">
            مناسب برای همه فروشگاه‌ها و کارگاه‌های تابلوسازی
          </li>
        </ol>

        <br />
        <br />

        <h3 className="text-[18px] text-[#3399CC]">چشم‌انداز ما</h3>

        <br />

        <p className="text-[#444444]">
          می‌خواهیم تابلو اپ را به کامل‌ترین پلتفرم دیجیتال تابلو‌سازی ایران
          تبدیل کنیم؛ از پیش‌نمایش سه‌بعدی تابلو و مقایسه قیمت متریال‌های مختلف
          گرفته تا اتصال مستقیم به تابلوسازان معتبر و گسترش خدمات به تمام شهرهای
          کشور. هدف ما این است که هر کسب‌وکاری در ایران بتواند تابلوی حرفه‌ای
          خود را سریع‌تر، ارزان‌تر و زیباتر بسازد.
        </p>
      </div>
    </>
  );
};
