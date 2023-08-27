import useHover from "@/hooks/useHover";
import { ChevronDownIcon } from "@heroicons/react/24/outline"
import DropdownNavbar from "./dropdown";
import { HomeIcon } from "@heroicons/react/20/solid";


const Items = () => {
  const [hoverItemOne, isHoveringItemOne] = useHover();
  const [hoverItemTwo, isHoveringItemTwo] = useHover();
  const [hoverItemThree, isHoveringItemThree] = useHover();
  const [hoverItemFour, isHoveringItemFour] = useHover();
  const [hoverItemFive, isHoveringItemFive] = useHover();

  const styleNavItems = 'pr-2 pl-8 cursor-pointer rounded border-r border-navbar transition-all hover:border-active-them'

  return (
    <>
      <ul className="flex gap-4 text-white">
        <li ref={hoverItemOne} className="cursor-pointer flex items-center gap-1 transition-all hover:text-active-them p-1">
          دموها
          <ChevronDownIcon className="w-4 text-neutral-400" />
          <DropdownNavbar isHoverElement={isHoveringItemOne}>
            <div className="flex justify-between w-[50rem] text-white p-4 text-nowrap">
              <ul className="flex flex-col gap-4">
                <li className={`${styleNavItems} flex items-center gap-2`}>
                  <span>
                    <HomeIcon className="w-4" />
                  </span>
                  دمو
                </li>
                <li className={`${styleNavItems} flex items-center gap-2`}>
                  <span>
                    <HomeIcon className="w-4" />
                  </span>
                  دمو
                </li>
                <li className={`${styleNavItems} flex items-center gap-2`}>
                  <span>
                    <HomeIcon className="w-4" />
                  </span>
                  دمو
                </li>
                <li className={`${styleNavItems} flex items-center gap-2`}>
                  <span>
                    <HomeIcon className="w-4" />
                  </span>
                  دمو
                </li>
              </ul>
              <ul className="flex flex-col gap-4">
                <li className={`${styleNavItems} flex items-center gap-2`}>
                  <span>
                    <HomeIcon className="w-4" />
                  </span>
                  دمو
                </li>
                <li className={`${styleNavItems} flex items-center gap-2`}>
                  <span>
                    <HomeIcon className="w-4" />
                  </span>
                  دمو
                </li>
                <li className={`${styleNavItems} flex items-center gap-2`}>
                  <span>
                    <HomeIcon className="w-4" />
                  </span>
                  دمو
                </li>
                <li className={`${styleNavItems} flex items-center gap-2`}>
                  <span>
                    <HomeIcon className="w-4" />
                  </span>
                  دمو
                </li>
              </ul>
              <ul className="flex flex-col gap-4">
                <li className={`${styleNavItems} flex items-center gap-2`}>
                  <span>
                    <HomeIcon className="w-4" />
                  </span>
                  دمو
                </li>
                <li className={`${styleNavItems} flex items-center gap-2`}>
                  <span>
                    <HomeIcon className="w-4" />
                  </span>
                  دمو
                </li>
                <li className={`${styleNavItems} flex items-center gap-2`}>
                  <span>
                    <HomeIcon className="w-4" />
                  </span>
                  دمو
                </li>
                <li className={`${styleNavItems} flex items-center gap-2`}>
                  <span>
                    <HomeIcon className="w-4" />
                  </span>
                  دمو
                </li>
              </ul>
              <ul className="flex flex-col gap-4">
                <li className={`${styleNavItems} flex items-center gap-2`}>
                  <span>
                    <HomeIcon className="w-4" />
                  </span>
                  دمو
                </li>
                <li className={`${styleNavItems} flex items-center gap-2`}>
                  <span>
                    <HomeIcon className="w-4" />
                  </span>
                  دمو
                </li>
                <li className={`${styleNavItems} flex items-center gap-2`}>
                  <span>
                    <HomeIcon className="w-4" />
                  </span>
                  دمو
                </li>
                <li className={`${styleNavItems} flex items-center gap-2`}>
                  <span>
                    <HomeIcon className="w-4" />
                  </span>
                  دمو
                </li>
              </ul>
            </div>
          </DropdownNavbar>
        </li>
        <li ref={hoverItemTwo} className="cursor-pointer flex items-center gap-1 transition-all hover:text-active-them p-1">
          صفحات
          <ChevronDownIcon className="w-4 text-neutral-400" />
          <DropdownNavbar isHoverElement={isHoveringItemTwo}>
            <div className="flex justify-between gap-4 min-w-[50rem] text-white px-4 text-nowrap">
              <div>
                <ul className="flex flex-col gap-4 text-[.8rem]">
                  <h5 className="font-bold text-lg">صفحات</h5>
                  <li className={styleNavItems}>
                    درباره ما - طرح ۰۱
                  </li>
                  <li className={styleNavItems}>
                    درباره ما - طرح ۰۲
                  </li>
                  <li className={styleNavItems}>
                    تماس با ما - طرح ۰۱
                  </li>
                  <li className={styleNavItems}>
                    تماس با ما - طرح ۰۲
                  </li>
                  <li className={styleNavItems}>
                    تماس با ما - طرح ۰۳
                  </li>
                </ul>
                <ul className="flex flex-col gap-4 text-[.8rem] mt-4">
                  <h5 className="font-bold text-lg">فروشگاه</h5>
                  <li className={styleNavItems}>
                    محصولات
                  </li>
                  <li className={styleNavItems}>
                    جزییات محصول
                  </li>
                  <li className={styleNavItems}>
                    جزییات محصول با سایدبار
                  </li>
                </ul>
              </div>
              <ul className="flex flex-col gap-4 text-[.8rem]">
                <h5 className="font-bold text-lg">خدمات</h5>
                <li className={styleNavItems}>
                  خدمات - طرح ۰۱
                </li>
                <li className={styleNavItems}>
                  خدمات - طرح ۰۲
                </li>
                <li className={styleNavItems}>
                  خدمات - طرح ۰۳
                </li>
                <li className={styleNavItems}>
                  خدمات - طرح ۰۴ و ۰۵
                </li>
                <li className={styleNavItems}>
                  جزییات خدمات ۰۱
                </li>
                <li className={styleNavItems}>
                  جزییات خدمات ۰۲
                </li>
              </ul>
              <ul className="flex flex-col gap-4 text-[.8rem]">
                <h5 className="font-bold text-lg">پروژه ها</h5>
                <li className={styleNavItems}>
                  پروژه ها - طرح ۰۱ ۱ ستونه
                </li>
                <li className={styleNavItems}>
                  پروژه ها - طرح ۰۲ ۲ ستونه
                </li>
                <li className={styleNavItems}>
                  پروژه ها - طرح ۰۳ ۳ ستونه
                </li>
                <li className={styleNavItems}>
                  پروژه ها - طرح ۰۴ پوشش ۳ ستونه
                </li>
                <li className={styleNavItems}>
                  پروژه ها - طرح ۰۵ ۳ ستونه
                </li>
                <li className={styleNavItems}>
                  پروژه ها - طرح ۰۶ ۳ ستونه
                </li>
                <li className={styleNavItems}>
                  جزییات پروژه ۰۱
                </li>
                <li className={styleNavItems}>
                  جزییات پروژه ۰۲
                </li>
              </ul>
              <ul className="flex flex-col gap-4 text-[.8rem]">
                <h5 className="font-bold text-lg">دیگر صفحات</h5>
                <li className={styleNavItems}>
                  تعرفه خدمات - طرح ۰۱
                </li>
                <li className={styleNavItems}>
                  تعرفه خدمات - طرح ۰۲
                </li>
                <li className={styleNavItems}>
                  تیم ما - طرح ۰۱
                </li>
                <li className={styleNavItems}>
                  تیم ما - طرح ۰۲
                </li>
                <li className={styleNavItems}>
                  نظرات مشتریان - طرح ۰۱
                </li>
                <li className={styleNavItems}>
                  سوالات متداول - طرح ۰۱
                </li>
                <li className={styleNavItems}>
                  سوالات متداول - طرح ۰۲
                </li>
                <li className={styleNavItems}>
                  به زودی
                </li>
                <li className={styleNavItems}>
                  ۴۰۴
                </li>
              </ul>
            </div>
          </DropdownNavbar>
        </li>
        <li ref={hoverItemThree} className="cursor-pointer flex items-center gap-1 transition-all hover:text-active-them p-1">
          عناصر
          <ChevronDownIcon className="w-4 text-neutral-400" />
          <DropdownNavbar isHoverElement={isHoveringItemThree}>
            <div className="flex justify-between w-[50rem] text-white p-4 text-nowrap">
              <ul className="flex flex-col gap-4">
                <li className={`${styleNavItems} flex items-center gap-2`}>
                  <span>
                    <HomeIcon className="w-4" />
                  </span>
                  دمو
                </li>
                <li className={`${styleNavItems} flex items-center gap-2`}>
                  <span>
                    <HomeIcon className="w-4" />
                  </span>
                  دمو
                </li>
                <li className={`${styleNavItems} flex items-center gap-2`}>
                  <span>
                    <HomeIcon className="w-4" />
                  </span>
                  دمو
                </li>
                <li className={`${styleNavItems} flex items-center gap-2`}>
                  <span>
                    <HomeIcon className="w-4" />
                  </span>
                  دمو
                </li>
              </ul>
              <ul className="flex flex-col gap-4">
                <li className={`${styleNavItems} flex items-center gap-2`}>
                  <span>
                    <HomeIcon className="w-4" />
                  </span>
                  دمو
                </li>
                <li className={`${styleNavItems} flex items-center gap-2`}>
                  <span>
                    <HomeIcon className="w-4" />
                  </span>
                  دمو
                </li>
                <li className={`${styleNavItems} flex items-center gap-2`}>
                  <span>
                    <HomeIcon className="w-4" />
                  </span>
                  دمو
                </li>
                <li className={`${styleNavItems} flex items-center gap-2`}>
                  <span>
                    <HomeIcon className="w-4" />
                  </span>
                  دمو
                </li>
              </ul>
              <ul className="flex flex-col gap-4">
                <li className={`${styleNavItems} flex items-center gap-2`}>
                  <span>
                    <HomeIcon className="w-4" />
                  </span>
                  دمو
                </li>
                <li className={`${styleNavItems} flex items-center gap-2`}>
                  <span>
                    <HomeIcon className="w-4" />
                  </span>
                  دمو
                </li>
                <li className={`${styleNavItems} flex items-center gap-2`}>
                  <span>
                    <HomeIcon className="w-4" />
                  </span>
                  دمو
                </li>
                <li className={`${styleNavItems} flex items-center gap-2`}>
                  <span>
                    <HomeIcon className="w-4" />
                  </span>
                  دمو
                </li>
              </ul>
              <ul className="flex flex-col gap-4">
                <li className={`${styleNavItems} flex items-center gap-2`}>
                  <span>
                    <HomeIcon className="w-4" />
                  </span>
                  دمو
                </li>
                <li className={`${styleNavItems} flex items-center gap-2`}>
                  <span>
                    <HomeIcon className="w-4" />
                  </span>
                  دمو
                </li>
                <li className={`${styleNavItems} flex items-center gap-2`}>
                  <span>
                    <HomeIcon className="w-4" />
                  </span>
                  دمو
                </li>
                <li className={`${styleNavItems} flex items-center gap-2`}>
                  <span>
                    <HomeIcon className="w-4" />
                  </span>
                  دمو
                </li>
              </ul>
              <ul className="flex flex-col gap-4">
                <li className={`${styleNavItems} flex items-center gap-2`}>
                  <span>
                    <HomeIcon className="w-4" />
                  </span>
                  دمو
                </li>
                <li className={`${styleNavItems} flex items-center gap-2`}>
                  <span>
                    <HomeIcon className="w-4" />
                  </span>
                  دمو
                </li>
                <li className={`${styleNavItems} flex items-center gap-2`}>
                  <span>
                    <HomeIcon className="w-4" />
                  </span>
                  دمو
                </li>
                <li className={`${styleNavItems} flex items-center gap-2`}>
                  <span>
                    <HomeIcon className="w-4" />
                  </span>
                  دمو
                </li>
              </ul>
              <ul className="flex flex-col gap-4">
                <li className={`${styleNavItems} flex items-center gap-2`}>
                  <span>
                    <HomeIcon className="w-4" />
                  </span>
                  دمو
                </li>
                <li className={`${styleNavItems} flex items-center gap-2`}>
                  <span>
                    <HomeIcon className="w-4" />
                  </span>
                  دمو
                </li>
                <li className={`${styleNavItems} flex items-center gap-2`}>
                  <span>
                    <HomeIcon className="w-4" />
                  </span>
                  دمو
                </li>
                <li className={`${styleNavItems} flex items-center gap-2`}>
                  <span>
                    <HomeIcon className="w-4" />
                  </span>
                  دمو
                </li>
              </ul>
            </div>
          </DropdownNavbar>
        </li>
        <li ref={hoverItemFour} className="cursor-pointer flex items-center gap-1 transition-all hover:text-active-them p-1">
          وبلاگ
          <ChevronDownIcon className="w-4 text-neutral-400" />
          <DropdownNavbar isHoverElement={isHoveringItemFour}>
            <div className="flex justify-between text-white text-nowrap">
              <ul className="flex flex-col gap-4">
                <li className={styleNavItems}>
                  وبلاگ مدرن ۰۱
                </li>
                <li className={styleNavItems}>
                  وبلاگ مدرن ۰۲
                </li>
                <li className={styleNavItems}>
                  وبلاگ کلاسیک ۰۱
                </li>
                <li className={styleNavItems}>
                  وبلاگ کلاسیک ۰۲
                </li>
                <li className={styleNavItems}>
                  وبلاگ کلاسیک ۰۳
                </li>
                <li className={styleNavItems}>
                  وبلاگ کلاسیک ۰۴
                </li>
                <li className={styleNavItems}>
                  وبلاگ ساده
                </li>
                <li className={styleNavItems}>
                  نمایش لیست وبلاگ
                </li>
                <li className={styleNavItems}>
                  مترو تمام عرض
                </li>
                <li className={styleNavItems}>
                  جزییات وبلاگ
                </li>
              </ul>
            </div>
          </DropdownNavbar>
        </li>
        <li ref={hoverItemFive} className="cursor-pointer flex items-center gap-1 transition-all hover:text-active-them p-1">
          فروشگاه
          <ChevronDownIcon className="w-4 text-neutral-400" />
          <DropdownNavbar isHoverElement={isHoveringItemFive}>
            <div className="flex justify-between text-white text-nowrap">
              <ul className="flex flex-col gap-4">
                <li className={styleNavItems}>
                  فروشگاه طرح دو
                </li>
                <li className={styleNavItems}>
                  محصولات
                </li>
                <li className={styleNavItems}>
                  محصولات با سایدبار
                </li>
                <li className={styleNavItems}>
                  جزییات محصول
                </li>
                <li className={styleNavItems}>
                  جزییات محصول با سایدبار
                </li>
                <li className={styleNavItems}>
                  حساب کاربری من
                </li>
                <li className={styleNavItems}>
                  علاقه مندی ها
                </li>
                <li className={styleNavItems}>
                  تسویه حساب
                </li>
                <li className={styleNavItems}>
                  سبد خرید
                </li>
              </ul>
            </div>
          </DropdownNavbar>
        </li>
        <li className="cursor-pointer transition-all hover:text-active-them p-1">
          تماس با ما
        </li>
      </ul>
    </>
  )
}

export default Items