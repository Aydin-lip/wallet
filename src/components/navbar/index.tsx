import Image from "next/image"
import Logo from "@/assets/images/logo.png"
import { ShoppingBagIcon } from "@heroicons/react/24/outline"
import { LockCircle } from "iconsax-react"
import FaceBookIcon from "@/assets/svgs/facebook"
import TwitterIcon from "@/assets/svgs/twitter"
import SkypeIcon from "@/assets/svgs/skype"
import Items from "./items"

const Navbar = () => {
  return (
    <>
      <nav className="absolute top-0 right-0 left-0">
        <div className="flex justify-between">
          <div className="flex items-center gap-8 py-8 pr-20">
            <Image
              src={Logo}
              alt="logo navbar"
              width={400}
              height={200}
              className="w-24"
            />
            <Items />
          </div>
          <div className="flex gap-4 items-center pl-12">
            <div className="h-1/2 border-l border-neutral-700 px-6 flex items-center gap-4 text-white">
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