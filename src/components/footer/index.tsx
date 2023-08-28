import FaceBookIcon from "@/assets/svgs/facebook"
import SkypeIcon from "@/assets/svgs/skype"
import TwitterIcon from "@/assets/svgs/twitter"
import Image from "next/image"
import Logo from "@/assets/images/logo.png"
import BackgroundMoj from '@/assets/images/bg-space.jpg'

const Footer = () => {
  return (
    <>
      <section className="w-full h-[23rem] bg-no-repeat bg-cover mb-[485px]" style={{ backgroundImage: `url('${BackgroundMoj.src}')` }}>
        <div className="w-full h-full bg-gradient-to-t from-black to-transparent flex justify-center items-center">
          <div className="text-center">
            <span className="underline text-active-them font-bold text-2xl">شروع پروژه</span>
            <h4 className="text-4xl text-white font-bold mt-6 mb-12">هم اکنون با ما تماس بگیرید</h4>
            <button className="text-white bg-active-them py-4 px-8 rounded-[1rem_0_1rem_0] transition-all duration-300 hover:rounded-[0_1rem_0_1rem] hover:bg-white hover:text-active-them font-bold text-sm">تماس با ما</button>
          </div>
        </div>
      </section>

      <footer className="text-white bg-black fixed bottom-0 right-0 left-0 -z-[1] px-20">
        <div>
          <div className="flex justify-between gap-4 py-20">
            <div className="px-20">
              <Image
                src={Logo}
                alt="logo navbar"
                width={400}
                height={200}
                className="w-24"
              />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-3">ارتباط با ما</h4>
              <div className="h-[3px] w-20 bg-active-them rounded-md mb-3"></div>
              <div>
                <h5 className="font-bold">آدرس</h5>
                <p className="text-neutral-400 #bcbcbc py-2">تهران. خیابان آزادی. کوچه دوازده. پلاک ۱۵. طبقه دوم</p>
              </div>
              <div className="mt-2">
                <h5 className="font-bold">تماس با ما</h5>
                <div className="py-2 flex gap-1">
                  <h6>تلفن : </h6>
                  <a href="tel:021-6147484" className="text-neutral-400">021-6147484</a>
                </div>
                <div className="flex gap-1">
                  <h6>آدرس ایمیل : </h6>
                  <a href="mailto:sendmail@creote.com" className="text-neutral-400 font-[cursive]">sendmail@creote.com</a>
                </div>
              </div>
            </div>
            <div className="w-[13rem]">
              <h4 className="text-xl font-bold mb-3">شرکت</h4>
              <div className="h-[3px] w-20 bg-active-them rounded-md mb-3"></div>
              <ul className="flex flex-col gap-1 text-neutral-400">
                <li>
                  خانه
                </li>
                <li>
                  درباره ما
                </li>
                <li>
                  تماس با ما
                </li>
                <li>
                  حرفه ای ها
                </li>
                <li>
                  بینش
                </li>
                <li>
                  منابع انسانی
                </li>
              </ul>
            </div>
            <div className="w-[23rem]">
              <h4 className="font-bold mb-3 text-xl">خبرنامه سایت</h4>
              <div className="h-[3px] w-20 bg-active-them rounded-md mb-3"></div>
              <div>
                <p className="text-neutral-400">با عضویت در خبرنامه سایت، از آخرین تخفیف و جشنواره ها بهره مند شوید.</p>
                <div className="mb-3 mt-6 relative w-[85%]">
                  <input type="email" className="outline-none p-2 rounded-lg bg-[#292929] border transition-all border-neutral-600 focus:border-neutral-500 w-full" />
                  <button className="absolute top-1 left-1 bottom-1 bg-active-them rounded-md px-2 text-sm transition-all hover:brightness-90">عضویت</button>
                </div>
                <span className="text-neutral-400 text-sm">* آدرس ایمیل شما ذخیره نخواهد شد</span>
              </div>
            </div>
          </div>
          <div className="py-6 border-t border-neutral-900 flex justify-between items-center">
            <div>
              <span className="text-sm text-neutral-400">© قالب شرکتی کریوت. متن کپی رایت</span>
            </div>
            <div className="flex gap-4">
              <span className="w-10 h-10 cursor-pointer flex justify-center items-center rounded-full transition-all border-neutral-500 hover:border">
                <FaceBookIcon color="#fff" className="w-5" />
              </span>
              <span className="w-10 h-10 cursor-pointer flex justify-center items-center rounded-full transition-all border-neutral-500 hover:border">
                <TwitterIcon color="#fff" className="w-4" />
              </span>
              <span className="w-10 h-10 cursor-pointer flex justify-center items-center rounded-full transition-all border-neutral-500 hover:border">
                <SkypeIcon color="#fff" className="w-4" />
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer