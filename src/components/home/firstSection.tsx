import FirstSectionBg from '@/assets/images/first-section_bg.jpg'
import HeroSection from './components/HeroSection'

const FirstSection = () => {
  return (
    <>
      <section className="w-full h-[40rem]">
        <div
          className="relative w-full h-60 bg-top bg-no-repeat"
          style={{
            backgroundImage: `url(${FirstSectionBg.src})`,
            backgroundSize: '70rem 40rem',
          }}
        >
          <div className="absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
          <div className="absolute top-0 left-[30rem] w-0 h-0 shadow-[0_0_200px_90px_#747474]"></div>
          <div className="absolute -top-8 left-[19rem] w-0 h-0 shadow-[0_0_160px_45px_#b7e6ac]"></div>
          <HeroSection />
        </div>
      </section>
    </>
  )
}

export default FirstSection
