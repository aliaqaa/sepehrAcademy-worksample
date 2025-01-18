import AuthFooterItems from "../../mock/AuthFooter";
import logo from "/public/images/icons/logo (1).png";
import FooterItems from "../../mock/FooterItems";
import { Link } from "react-router";

function DefualtFooter() {
  return (
    <>
      {/* Main Footer Container */}
      <div className="w-full relative  py-10 overflow-hidden max-sm:pt-10 max-xl:pt-20 sm:pt-40 md: lg:pt-12 xl:pt-16 2xl:pt-40">
        {/* Background Image */}
        <img
          className="absolute inset-0 w-full container h-full object-cover -z-10 mt-10"
          src="/public/images/icons/Rectangle 14.png"
          alt="background"
        />

        {/* Footer Content */}
        <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 relative z-10">
          {/* About Section */}
          <div className="text-center lg:text-left max-w-md max-sm:pt-40">
            <p className="text-gray-700 hover:scale-105 transition-transform">
              مجموعه آموزشی فلان فعالیت خود را از سال ۱۳۹۰ آغاز کرده است و
            </p>
            <p className="text-gray-700 hover:scale-105 transition-transform">
              امروز به بزرگترین کلونی برنامه نویسی شمال کشور تبدیل شده است
            </p>
            <address className="font-bold text-gray-800 mt-4 hover:scale-105 transition-transform">
              ساری ، میدان خــزر ، جــاده فــرح آباد ،
              <br /> جنب مجتمع دنیای آرزو
            </address>
            <p className="text-gray-700 mt-2 hover:scale-105 transition-transform">
              011 - 43332000
            </p>
          </div>

          {/* Logo and Social Links */}
          <div className="flex flex-col items-center space-y-4">
            <Link to="/" className="hover:scale-105 transition-transform">
              <img src={logo} alt="logo" className="" />
            </Link>
            <Link
              to="mailto:ali.tousi77@gmail.com"
              className="bg-cyan-600 text-white px-4 py-2 rounded-full hover:scale-105 transition-transform"
            >
              Ali.tousi77@gmail.com
            </Link>
            <div className="flex space-x-4">
              {AuthFooterItems.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  className="hover:scale-105 transition-transform"
                >
                  <img src={item.img} alt={item.title} className="w-10 h-10" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          <ul className="grid grid-cols-2 gap-4">
            {FooterItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.href}
                  className="text-gray-700 hover:text-cyan-600 hover:scale-105 transition-transform"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Badge Image */}
          <img
            src="/public/images/icons/samandehi-ezgif 1.png"
            alt="badge"
            className="w-32 h-32 lg:w-40 lg:h-40"
          />
        </div>
      </div>

      {/* Copyright Section */}
      <div className="w-full container bg-cyan-600 py-4 text-center text-white font-bold relative z-10">
        کلیه حقوق این وب سایت متعلق به آموزشگاه فلان می باشد
      </div>
    </>
  );
}

export default DefualtFooter;