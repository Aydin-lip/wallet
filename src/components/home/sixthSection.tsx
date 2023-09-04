/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import TestimonyBg from '@/assets/images/circles.svg'
import Avatar from '@/assets/images/hero-pic-3.jpg'
import { SwiperSlider } from './components/SwiperSlider'

export default function Testimony() {
  const sectionStyle = {
    backgroundImage: `url(${TestimonyBg.src})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  }

  return (
    <section className="mt-20">
      <div
        className="w-full min-[400px]:w-3/4 lg-w-1/2 mx-auto lg:mb-0 p-4 text-white flex flex-col items-center"
        style={sectionStyle}
      >
        <h3 className="text-2xl min-[400px]:text-4xl lg:text-5xl mb-12 min-[400px]:mb-16 text-center">
          آنها از WALLET لذت می‌برند
        </h3>
        <div className="h-full flex flex-col md:flex-row text-center md:text-right items-center gap-2 min-[400px]:gap-8">
          <Image
            alt="testimonial"
            className="w-40 h-40 mb-8 flex-shrink-0 object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
            src={Avatar}
          />
          <div>
            <p className="leading-relaxed flex-grow min-[400px]:text-lg">
              بیست سال بعد شما از کارهایی که انجام نداده‌اید ناراحت می‌شوید نه
              کارهایی که انجام داده‌اید، پس طناب قایق‌تان را از ساحل باز کنید و
              از ساحل امن خود به سوی آب‌های آزاد برانید و خطر کنید. جستجو کنید،
              رویا بسازید و کشف کنید.
            </p>
            <br />
            <span className="inline-block h-1 w-10 rounded bg-active-them-dark min-[400px]:mt-6 min-[400px]:mb-4"></span>
            <div className="font-medium">
              <h2 className="title-font tracking-wider text-sm">
                یونس کیشی‌‌زاده
              </h2>
              <p className="">مدیرعامل</p>
            </div>
          </div>
        </div>
      </div>
      <SwiperSlider />
    </section>
  )
}
