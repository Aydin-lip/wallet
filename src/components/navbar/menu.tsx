import { useState, useEffect, useMemo } from 'react'
import { CgClose } from "react-icons/cg";
import { RiArrowDownSLine } from "react-icons/ri";
import { BiSearchAlt2 } from "react-icons/bi";
import { Dispatch, SetStateAction } from 'react'
import { HomeIcon } from "@heroicons/react/24/outline";

const Style = `
.openMenu {
  animation: openMenu .2s ease forwards;
}
@keyframes openMenu {
  from {
    left: -20rem;
  }
  to {
    left: 0;
  }
}
.closeMenu {
  animation: closeMenu .2s ease forwards;
}
@keyframes closeMenu {
  from {
    left: 0;
  }
  to {
    left: -20rem;
  }
}
`

interface IProps {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}
const Menu = ({ isOpen, setIsOpen }: IProps) => {
  const [active, setActive] = useState<number>(0)
  const [initialState, setInitialState] = useState<boolean | null>(null);
  const [close, setClose] = useState<boolean>(false);

  useMemo(() => {
    if (!isOpen) {
      setTimeout(() => {
        setClose(true);
      }, 400);
    } else {
      setClose(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (initialState !== null) return;
    if (isOpen === false) return;

    setInitialState(isOpen);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  if (initialState === null) return <></>;

  const styleNavItems = 'pr-2 pl-8 cursor-pointer transition-all hover:pr-4  flex items-center gap-2 py-3 border-t border-t-neutral-500'

  return (
    <>
      <style children={Style} />
      {!close &&
        <div className={`fixed top-0 right-0 bottom-0 left-0 z-10 bg-black bg-opacity-40 transition-all opacity-0 ${isOpen ? 'opacity-100' : ''}`}>
          <div className='absolute top-0 right-0 bottom-0 left-0' onClick={() => setIsOpen(false)}></div>
          <div className={`transition-all absolute top-0 max-[400px]:right-0 ${isOpen ? 'openMenu' : 'closeMenu'} bottom-0 bg-background-light p-5 flex flex-col gap-2 min-[400px]:gap-4 shadow-[0px_0px_20px_#ffffff38] overflow-auto`}>
            <div className="text-white min-[400px]:mt-2 flex">
              <span className="rounded-full border border-neutral-500 p-2 flex cursor-pointer" onClick={() => setIsOpen(false)}>
                <CgClose className='w-4 h-4 min-[400px]:w-6 min-[400px]:h-6' />
              </span>
            </div>
            <div className="relative mt-2 flex justify-end">
              <input
                type="text"
                placeholder="جستجو کردن..."
                className="outline-none p-2 min-[400px]:px-2 min-[400px]:py-4 text-sm w-60 rounded-md bg-[#e1e1e11f] text-white border border-neutral-600"
              />
              <div className="absolute top-0 left-0 bottom-0 m-1 min-[400px]:m-2 w-8 min-[400px]:w-10 bg-active-them rounded-md flex justify-center items-center text-white cursor-pointer">
                <BiSearchAlt2 className="w-5 h-5" />
              </div>
            </div>

            <ul className="text-white mt-6">
              <li className="border-b border-neutral-500">
                <div className="py-3 flex justify-between items-center">
                  <span className="cursor-pointer text-[.9rem]">دموها</span>
                  <span className="border border-neutral-500 rounded-[.2rem] p-[.3rem] cursor-pointer" onClick={() => setActive(active === 1 ? 0 : 1)}>
                    <RiArrowDownSLine className={`transition-all ${active === 1 ? 'rotate-180' : ''}`} />
                  </span>
                </div>
                <div className={`overflow-hidden text-sm transition-all ${active === 1 ? 'p-2 h-auto mb-4 rounded-md shadow-[0px_0px_5px_#ffffff4f]' : 'h-0'}`}>
                  {active === 1 &&
                    <ul className="flex flex-col">
                      <li className={`pr-2 pl-8 cursor-pointer transition-all hover:pr-4  flex items-center gap-2 py-3`}>
                        <span>
                          <HomeIcon className="w-4" />
                        </span>
                        دمو
                      </li>
                      <li className={`${styleNavItems}`}>
                        <span>
                          <HomeIcon className="w-4" />
                        </span>
                        دمو
                      </li>
                      <li className={`${styleNavItems}`}>
                        <span>
                          <HomeIcon className="w-4" />
                        </span>
                        دمو
                      </li>
                      <li className={`${styleNavItems}`}>
                        <span>
                          <HomeIcon className="w-4" />
                        </span>
                        دمو
                      </li>
                      <li className={`${styleNavItems}`}>
                        <span>
                          <HomeIcon className="w-4" />
                        </span>
                        دمو
                      </li>
                    </ul>
                  }
                </div>
              </li>
              <li className="border-b border-neutral-500">
                <div className="py-3 flex justify-between items-center">
                  <span className="cursor-pointer text-[.9rem]">صفحات</span>
                  <span className="border border-neutral-500 rounded-[.2rem] p-[.3rem] cursor-pointer" onClick={() => setActive(active === 2 ? 0 : 2)}>
                    <RiArrowDownSLine className={`transition-all ${active === 2 ? 'rotate-180' : ''}`} />
                  </span>
                </div>
                <div className={`overflow-hidden text-sm transition-all ${active === 2 ? 'p-2 h-auto mb-4 rounded-md shadow-[0px_0px_5px_#ffffff4f]' : 'h-0'}`}>
                  {active === 2 &&
                    <ul className="flex flex-col">
                      <h5 className="font-bold text-base mt-4">فروشگاه</h5>
                      <li className={`pr-2 pl-8 cursor-pointer transition-all hover:pr-4  flex items-center gap-2 py-3`}>
                        محصولات
                      </li>
                      <li className={styleNavItems}>
                        جزییات محصول
                      </li>
                      <li className={styleNavItems}>
                        جزییات محصول با سایدبار
                      </li>
                      <h5 className="font-bold text-base mt-4">خدمات</h5>
                      <li className={`pr-2 pl-8 cursor-pointer transition-all hover:pr-4  flex items-center gap-2 py-3`}>
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
                  }
                </div>
              </li>
              <li className="border-b border-neutral-500">
                <div className="py-3 flex justify-between items-center">
                  <span className="cursor-pointer text-[.9rem]">عناصر</span>
                  <span className="border border-neutral-500 rounded-[.2rem] p-[.3rem] cursor-pointer" onClick={() => setActive(active === 3 ? 0 : 3)}>
                    <RiArrowDownSLine className={`transition-all ${active === 3 ? 'rotate-180' : ''}`} />
                  </span>
                </div>
                <div className={`overflow-hidden text-sm ransition-all ${active === 3 ? 'p-2 h-auto mb-4 rounded-md shadow-[0px_0px_5px_#ffffff4f]' : 'h-0'}`}>
                  {active === 3 &&
                    <ul className="flex flex-col">
                      <li className={`pr-2 pl-8 cursor-pointer transition-all hover:pr-4  flex items-center gap-2 py-3`}>
                        <span>
                          <HomeIcon className="w-4" />
                        </span>
                        دمو
                      </li>
                      <li className={`${styleNavItems}`}>
                        <span>
                          <HomeIcon className="w-4" />
                        </span>
                        دمو
                      </li>
                      <li className={`${styleNavItems}`}>
                        <span>
                          <HomeIcon className="w-4" />
                        </span>
                        دمو
                      </li>
                      <li className={`${styleNavItems}`}>
                        <span>
                          <HomeIcon className="w-4" />
                        </span>
                        دمو
                      </li>
                      <li className={`${styleNavItems}`}>
                        <span>
                          <HomeIcon className="w-4" />
                        </span>
                        دمو
                      </li>
                    </ul>
                  }
                </div>
              </li>
              <li className="border-b border-neutral-500">
                <div className="py-3 flex justify-between items-center">
                  <span className="cursor-pointer text-[.9rem]">وبلاگ</span>
                  <span className="border border-neutral-500 rounded-[.2rem] p-[.3rem] cursor-pointer" onClick={() => setActive(active === 4 ? 0 : 4)}>
                    <RiArrowDownSLine className={`transition-all ${active === 4 ? 'rotate-180' : ''}`} />
                  </span>
                </div>
                <div className={`overflow-hidden text-sm transition-all ${active === 4 ? 'p-2 h-auto mb-4 rounded-md shadow-[0px_0px_5px_#ffffff4f]' : 'h-0'}`}>
                  {active === 4 &&
                    <ul className="flex flex-col">
                      <li className={`pr-2 pl-8 cursor-pointer transition-all hover:pr-4  flex items-center gap-2 py-3`}>
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
                  }
                </div>
              </li>
              <li className="border-b border-neutral-500">
                <div className="py-3 flex justify-between items-center">
                  <span className="cursor-pointer text-[.9rem]">فروشگاه</span>
                  <span className="border border-neutral-500 rounded-[.2rem] p-[.3rem] cursor-pointer" onClick={() => setActive(active === 5 ? 0 : 5)}>
                    <RiArrowDownSLine className={`transition-all ${active === 5 ? 'rotate-180' : ''}`} />
                  </span>
                </div>
                <div className={`overflow-hidden text-sm transition-all ${active === 5 ? 'p-2 h-auto mb-4 rounded-md shadow-[0px_0px_5px_#ffffff4f]' : 'h-0'}`}>
                  {active === 5 &&
                    <ul className="flex flex-col">
                      <li className={`pr-2 pl-8 cursor-pointer transition-all hover:pr-4  flex items-center gap-2 py-3`}>
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
                  }
                </div>
              </li>
              <li className="border-b border-neutral-500">
                <div className="py-3 flex justify-between items-center">
                  <span className="cursor-pointer text-[.9rem]">تماس با ما</span>
                </div>
              </li>
            </ul>

          </div>
        </div>
      }
    </>
  )
}

export default Menu