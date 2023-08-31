import SwiperCore, { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.min.css'
import Link from 'next/link'
import SVGData from '../../assets/images/logos'
import Image from 'next/image'

export const SwiperSlider = () => {
  SwiperCore.use([Autoplay])
  return (
    <div className="w-3/4 h-[100%] mx-auto py-[50px] mt-6">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        // navigation={true}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        slidesPerView={3}
        breakpoints={{
          // When window width is >= 768px
          768: {
            slidesPerView: 5,
          },
        }}
      >
        {SVGData &&
          SVGData.length > 0 &&
          SVGData.map((item) => (
            <SwiperSlide key={item.id}>
              <Link href="/">
                <div className="relative overflow-hidden cursor-grab">
                  <div>
                    <Image
                      alt=""
                      className="w-[100%] h-auto object-cover rounded-lg"
                      src={item.logo.src}
                      width={40}
                      height={30}
                    ></Image>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  )
}
