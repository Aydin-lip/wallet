import Link from 'next/link'
import {
  BsFillTelephoneFill,
  BsEnvelopeFill,
  BsFillGeoAltFill,
} from 'react-icons/bs'
import LanguageSelectBox from '../home/components/LangSelectBox'

export default function UpperNav() {
  return (
    <section className="w-screen bg-black p-2 text-[.8rem]">
      <div className="flex flex-col min-[900px]:flex-row items-center justify-center lg:justify-around gap-2 sm:gap-4">
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center items-center">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4">
            <Link
              href="tel:0912111111"
              className="flex items-center justify-center gap-1"
            >
              <div className='text-active-them'>
                <BsFillTelephoneFill />
              </div>
              <div className="text-white hover:text-active-them duration-300">
                0912111111
              </div>
            </Link>
            <Link
              href="mailto:hello@example.com"
              className="flex items-center justify-center gap-1"
            >
              <div className='text-active-them'>
                <BsEnvelopeFill />
              </div>
              <div className="text-white hover:text-active-them duration-300">
                hello@example.com
              </div>
            </Link>
          </div>
          <div className="flex items-center justify-center gap-1">
            <div className='text-active-them'>
              <BsFillGeoAltFill />
            </div>
            <div className="text-white">ایران، تهران، میدان آزادی</div>
          </div>
        </div>
        <div className="flex gap-2 sm:gap-4 text-white">
          <span className="hover:text-active-them cursor-pointer">پشتیبانی</span> {'|'}
          <span className="hover:text-active-them cursor-pointer">کمک</span>
          {'|'}
          <div className="cursor-pointer">
            <LanguageSelectBox />
          </div>
        </div>
      </div>
    </section>
  )
}
