import Link from 'next/link'
import { useState, useEffect } from 'react'
import {
  BsFillTelephoneFill,
  BsEnvelopeFill,
  BsFillGeoAltFill,
} from 'react-icons/bs'

export default function UpperNav() {
  return (
    <section className={`w-screen bg-green-700 p-4 `}>
      <div className="flex flex-col md:flex-row items-center justify-around">
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="tel:0912111111"
              className="flex items-center justify-center gap-1"
            >
              <div>
                <BsFillTelephoneFill />
              </div>
              <div className="text-white hover:text-black duration-300">
                0912111111
              </div>
            </Link>
            <Link
              href="mailto:hello@example.com"
              className="flex items-center justify-center gap-1"
            >
              <div>
                <BsEnvelopeFill />
              </div>
              <div className="text-white hover:text-black duration-300">
                hello@example.com
              </div>
            </Link>
          </div>
          <div className="flex items-center justify-center gap-1">
            <div>
              <BsFillGeoAltFill />
            </div>
            <div className="text-white">ایران، تهران، میدان آزادی</div>
          </div>
        </div>
        <div className='flex gap-4'>
          <span className="text-white">پشتیبانی</span> {'|'}
          <span className="text-white">کمک</span>
          {'|'}
          <span className="text-white">انگلیسی</span>
        </div>
      </div>
    </section>
  )
}
