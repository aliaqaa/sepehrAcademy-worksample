import AuthFooterItems from "../../mock/AuthFooter";
import logo from "/public/images/icons/logo (1).png";
import FooterItems from "../../mock/FooterItems";
import{ Link }from "react-router";
function DefualtFooter() {
  return (
    <>
      <div className="container-fluid w-full flex justify-center mt-20 gap-20  relative text-cyanlogin items-center">
        <img
          className=" absolute bottom-0 -z-10 "
          src="/public/images/icons/Rectangle 14.png"
          alt="rec"
        />
        <div className=" ">
          <span>
            <p>مجموعه آموزشی فلان فعالیت خود را از سال ۱۳۹۰ آغاز کرده است و </p>
            <p>امروز به بزرگترین کلونی برنامه نویسی شمال کشور تبدیل شده است</p>
          </span>
          <address className="font-extrabold">
            ساری ، میدان خــزر ، جــاده فــرح آباد ،<br /> جنب مجتمع دنیای آرزو
          </address>
          <p>011 - 43332000</p>
        </div>

        <div className="flex flex-col justify-center my-9 items-center ">
          <Link href="/" className="my-4">
            <img src={logo} alt="logo" />
          </Link>
          <Link
            className="bg-cyanlogin p-2 rounded-3xl text-white"
            href="mailto:ali.tousi77@gmail.com"
          >
            Ali.tousi77@gmail.com
          </Link>
          <span className="flex my-3">
            {AuthFooterItems.map((item) => (
              <div key={item.id} className="mx-1">
                <a href={item.link}>
                  {" "}
                  <img src={item.img} alt={item.img} width="40" height="40" />
                </a>
              </div>
            ))}
          </span>
        </div>

        <ul className="grid grid-cols-2 gap-x-5">
          {FooterItems.map((item) => (
            <Link href={item.href} key={item.id} className="list-disc">
              <li>{item.title}</li>
            </Link>
          ))}
        </ul>
        <img
          src="/public/images/icons/samandehi-ezgif 1.png"
          alt="badge"
          width="140"
          height="140"
        />
      </div>
      <div className="container bg-cyanlogin font-extrabold text-white z-10">
        کلیه حقوق این وب سایت متعلق به آموزشگاه فلان می باشد{" "}
      </div>
    </>
  );
}

export default DefualtFooter;
