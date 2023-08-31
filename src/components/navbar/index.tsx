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
`

const Navbar = () => {
  const [scroll, setScroll] = useState<boolean>(false)
  const { loading } = useAppContext()

  useEffect(() => {
    // For change height navbar scroll time
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () =>
        setScroll(window.pageYOffset >= 80),
      );
    }
  }, []);

  return (
    <>
      <style children={style} />
      <nav className={`${scroll ? 'shadow-lg bg-black' : ''} fixed z-[2] transition-all duration-300 top-0 right-0 left-0`}>
        <div className="flex justify-between items-center">
          <div className={`${scroll ? 'py-6' : 'pl-8 py-8'} pr-20 transition-all duration-300`}>
            <Image
              src={Logo}
              alt="logo navbar"
              width={400}
              height={200}
              className={`${scroll ? 'w-16' : 'w-24'} transition-all duration-300`}
            />
          </div>
          <div className={`${scroll ? '' : 'ml-auto'} transition-all duration-300`}>
            <div className={`transition-all duration-[2s] opacity-0 ${loading ? '' : 'opacity-100'}`}>
              <Items />
            </div>
          </div>
          <div className={`${scroll ? '' : 'hidden'} ml-28 transition-all duration-300`}>
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
          <div className={`flex gap-4 items-center pl-12 ${scroll ? 'hidden' : ''} transition-all duration-300 ${loading ? 'opacity-0' : 'opacity-100'}`}>
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
        </div>
      </nav>
    </>
  )
}

export default Navbar