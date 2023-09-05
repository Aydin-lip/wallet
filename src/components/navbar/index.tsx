import { CgClose } from "react-icons/cg";
import { BiSearchAlt2 } from "react-icons/bi";
import { BiMenu } from "react-icons/bi";
import { useState, useEffect } from 'react'
import Image from "next/image"
import Logo from "@/assets/images/logo.png"
import { ShoppingBagIcon } from "@heroicons/react/24/outline"
import { Category, LockCircle } from "iconsax-react"
import FaceBookIcon from "@/assets/svgs/facebook"
import TwitterIcon from "@/assets/svgs/twitter"
import SkypeIcon from "@/assets/svgs/skype"
import Items from "./items"
import { useAppContext } from '@/context/state'
import Menu from "./menu";
import UpperNav from './UpperNav'

const style = `
.open {
  animation: openAnimation .1s linear forwards;
}
.close {
  animation: closeAnimation .1s linear forwards;
}
@keyframes openAnimation {
  from {
    margin-top: -1rem;
  }
  to {
    margin-top: 0;
  }
}
@keyframes closeAnimation {
  from {
    margin-top: 0;
  }
  to {
    margin-top: -1rem;
    display: none;
  }
}

.upper-open {
  animation: upperOpen .1s linear forwards;
}
.upper-close {
  animation: upperClose .1s linear forwards;
}
@keyframes upperOpen {
  from {
    margin-top: 0;
  }
  to {
    margin-top: -1rem;
    display: none;
  }
}
@keyframes upperClose {
  from {
    margin-top: 0;
  }
  to {
    margin-top: -1rem;
    display: none;
  }
}
`

const Navbar = () => {
  const [scroll, setScroll] = useState<boolean>(false)
  const [isOpenNav, setIsOpenNav] = useState<boolean>(false)
  const [showSearch, setShowSearch] = useState<boolean>(false)
  const { loading } = useAppContext()

  useEffect(() => {
    // For change height navbar scroll time
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () =>
        setScroll(window.pageYOffset >= 80)
      )
    }
  }, [])

  return (
    <>
      <style children={style} />
      <nav className={`${scroll ? 'shadow-lg bg-black' : ''} max-md:shadow-lg max-md:bg-black fixed z-[5] transition-all duration-300 top-0 right-0 left-0`}>
        <div className={`transition-all duration-300 ${scroll ? "translate-y-[-100%] h-0 opacity-0" : ""}`}>
          <UpperNav />
        </div>
        <div className="flex justify-between items-center relative">
          <div className={`${scroll ? 'py-6 pl-8' : 'pl-8 py-6 md:py-8'} max-[400px]:p-4 pr-8 sm:pr-20 transition-all duration-300`}>
            <Image
              src={Logo}
              alt="logo navbar"
              width={400}
              height={200}
              className={`${scroll ? 'w-16' : 'w-14 min-[400px]:w-16 md:w-24'} transition-all duration-300`}
            />
          </div>
          <div className={`ml-auto max-[1200px]:hidden transition-all duration-300`}>
            <div className={`transition-all duration-[2s] opacity-0 ${loading ? '' : 'opacity-100'}`}>
              <Items />
            </div>
          </div>
          <div className={`${scroll ? 'flex' : 'hidden'} items-center gap-8 max-[1200px]:hidden ml-28 transition-all duration-300`}>
            {showSearch ?
              <div className="relative flex">
                <div
                  className="bg-[#e1e1e11f] text-white flex justify-center items-center w-10 cursor-pointer border border-l-0 border-neutral-600 rounded-r-md"
                  onClick={() => setShowSearch(false)}
                >
                  <CgClose className="w-6 h-6" />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="جستجو کردن..."
                    className="outline-none p-2 text-[.8rem] w-60 rounded-l-md bg-[#e1e1e11f] text-white border border-neutral-600"
                  />
                  <div className="absolute top-0 left-0 bottom-0 m-[.1rem] w-8 min-[400px]:w-10 bg-active-them rounded-[.3rem] flex justify-center items-center text-white cursor-pointer">
                    <BiSearchAlt2 className="w-5 h-5" />
                  </div>
                </div>
              </div>
              :
              <span onClick={() => setShowSearch(true)}>
                <BiSearchAlt2 className="text-white w-6 h-6 min-[400px]:w-8 min-[400px]:h-8 cursor-pointer" />
              </span>
            }
            <div className='p-1 border rounded-full border-active-them cursor-pointer transition-all duration-300 hover:bg-active-them'>
              <span className='block p-2 rounded-full bg-active-them'>
                <Category
                  size={20}
                  color='#fff'
                  variant="Bulk"
                />
              </span>
            </div>
          </div>
          <div className={`flex gap-4 items-center pl-12 ${scroll ? 'hidden' : ''} max-[1200px]:hidden transition-all duration-300 ${loading ? 'opacity-0' : 'opacity-100'}`}>
            <div className={`h-1/2 border-l border-neutral-700 px-6 flex items-center gap-4 text-white`}>
              <div className="relative cursor-pointer">
                <ShoppingBagIcon className="w-5" />
                <span className="rounded-full bg-green-600 absolute -bottom-2 -right-1 w-4 h-4 text-sm flex justify-center items-center">
                  0
                </span>
              </div>
              <div className="flex items-center gap-1 cursor-pointer">
                <span className="text-sm">ورود</span>
                <LockCircle size={24} />
              </div>
            </div>
            <div className="flex gap-2 px-4">
              <span className="w-10 h-10 cursor-pointer flex justify-center items-center rounded-full border">
                <FaceBookIcon color="#fff" className="w-4" />
              </span>
              <span className="w-10 h-10 cursor-pointer flex justify-center items-center rounded-full border">
                <TwitterIcon color="#fff" className="w-3" />
              </span>
              <span className="w-10 h-10 cursor-pointer flex justify-center items-center rounded-full border">
                <SkypeIcon color="#fff" className="w-3" />
              </span>
            </div>
          </div>
          <div className="min-[1200px]:hidden ml-4 min-[400px]:ml-6 sm:ml-12 cursor-pointer" onClick={() => setIsOpenNav(true)}>
            <BiMenu className="text-white w-8 h-8 min-[400px]:w-10 min-[400px]:h-10" />
          </div>
        </div>
      </nav>
      <Menu isOpen={isOpenNav} setIsOpen={setIsOpenNav} />
    </>
  )
}

export default Navbar
